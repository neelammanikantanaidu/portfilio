import { useEffect, useState } from "react";
import { MessagesSquare, Send, Loader2, User } from "lucide-react";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

type Post = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(80),
  message: z.string().trim().min(1, "Message required").max(1000),
});

const Discussion = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const load = async () => {
    const { data, error } = await supabase
      .from("discussions")
      .select("id,name,message,created_at")
      .order("created_at", { ascending: false })
      .limit(50);
    if (!error && data) setPosts(data as Post[]);
    setFetching(false);
  };

  useEffect(() => {
    load();
    const channel = supabase
      .channel("discussions-feed")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "discussions" },
        (payload) => setPosts((prev) => [payload.new as Post, ...prev])
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, message });
    if (!parsed.success) {
      toast({ title: "Invalid input", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("discussions").insert({
      name: parsed.data.name,
      message: parsed.data.message,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Could not post", description: error.message, variant: "destructive" });
      return;
    }
    setMessage("");
    toast({ title: "Posted!", description: "Your message is live in the discussion." });
  };

  return (
    <section id="discussion" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <MessagesSquare className="h-8 w-8 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary">
            Open Discussion
          </h2>
        </div>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Leave a public message, share feedback, or ask a question — everyone can see the conversation.
        </p>

        <Card className="bg-card/50 border-border mb-8">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="d-name">Your Name</Label>
                <Input
                  id="d-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="How should we call you?"
                  maxLength={80}
                  required
                  className="bg-secondary/50 border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="d-message">Message</Label>
                <Textarea
                  id="d-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your thoughts..."
                  rows={3}
                  maxLength={1000}
                  required
                  className="bg-secondary/50 border-border resize-none"
                />
              </div>
              <Button type="submit" className="w-full glow-effect" disabled={loading}>
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                Post to Discussion
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {fetching && (
            <div className="text-center text-muted-foreground py-8">
              <Loader2 className="h-6 w-6 animate-spin mx-auto" />
            </div>
          )}
          {!fetching && posts.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              Be the first to start the conversation.
            </p>
          )}
          {posts.map((p) => (
            <Card key={p.id} className="bg-card/30 border-border hover:border-primary/40 transition-colors">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <p className="font-semibold text-foreground truncate">{p.name}</p>
                      <span className="text-xs text-muted-foreground shrink-0">
                        {new Date(p.created_at).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-foreground/90 whitespace-pre-wrap break-words">{p.message}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discussion;
