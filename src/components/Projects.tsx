import { useEffect, useState } from "react";
import { Github, Star, GitFork, ExternalLink, Loader2, Code2, ShieldAlert, Bot, Camera, Hand } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const featuredProjects = [
  {
    icon: ShieldAlert,
    title: "Phishing Detector Chrome Extension",
    description:
      "Browser extension that detects phishing websites in real time using URL analysis, heuristic checks, and reputation lookups to keep users safe while browsing.",
    tech: ["JavaScript", "Chrome API", "URL Analysis", "Security"],
    color: "text-primary",
  },
  {
    icon: Bot,
    title: "Artificial Cat",
    description:
      "AI-based virtual assistant simulating natural user interaction. Built in Python with speech, command parsing, and contextual response logic.",
    tech: ["Python", "AI", "Speech I/O", "Automation"],
    color: "text-accent",
  },
  {
    icon: Camera,
    title: "Cam Tracker",
    description:
      "Real-time object tracking system using computer vision techniques — detects, follows, and logs movement across video frames.",
    tech: ["Python", "OpenCV", "Computer Vision"],
    color: "text-soft-blue",
  },
  {
    icon: Hand,
    title: "Touchless Control System",
    description:
      "Gesture-based control system using camera input for hands-free human-computer interaction — ideal for accessibility and hygienic environments.",
    tech: ["Python", "OpenCV", "Gesture Recognition"],
    color: "text-soft-indigo",
  },
];

const GITHUB_USER = "neelammanikantanaidu";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
  archived: boolean;
  pushed_at: string;
};

const langColor: Record<string, string> = {
  Python: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
  JavaScript: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  TypeScript: "bg-blue-500/20 text-blue-300 border-blue-500/40",
  HTML: "bg-orange-500/20 text-orange-300 border-orange-500/40",
  CSS: "bg-pink-500/20 text-pink-300 border-pink-500/40",
  Java: "bg-red-500/20 text-red-300 border-red-500/40",
  C: "bg-slate-500/20 text-slate-300 border-slate-500/40",
  "C++": "bg-purple-500/20 text-purple-300 border-purple-500/40",
  Shell: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
};

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
          { headers: { Accept: "application/vnd.github+json" } }
        );
        if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
        const data: Repo[] = await res.json();
        const filtered = data
          .filter((r) => !r.fork && !r.archived)
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          );
        setRepos(filtered);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to load repos");
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 border-primary/40 text-primary"
          >
            <Github className="h-3 w-3 mr-2" />
            github.com/{GITHUB_USER}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Projects
          </h2>
          <p className="text-center text-muted-foreground text-lg max-w-2xl">
            Featured work from my resume, plus a live feed from my GitHub.
          </p>
        </div>

        {/* Featured Projects from Resume */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-accent mb-6 flex items-center gap-2">
            <span className="text-primary">—</span> Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((p, idx) => (
              <Card
                key={idx}
                className="bg-card/60 border-border hover:border-primary/50 transition-all hover:-translate-y-1 duration-300"
              >
                <CardHeader>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 rounded-md bg-primary/10">
                      <p.icon className={`h-6 w-6 ${p.color}`} />
                    </div>
                    <CardTitle className="text-xl leading-tight">{p.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {p.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-accent flex items-center gap-2">
            <span className="text-primary">—</span> GitHub Repositories
          </h3>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-16 text-primary">
            <Loader2 className="h-8 w-8 animate-spin mr-3" />
            <span>Fetching repositories...</span>
          </div>
        )}

        {error && !loading && (
          <Card className="max-w-xl mx-auto border-destructive/50">
            <CardContent className="p-6 text-center">
              <p className="text-destructive mb-3">Couldn't load repos: {error}</p>
              <Button asChild variant="outline">
                <a
                  href={`https://github.com/${GITHUB_USER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Visit GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        )}

        {!loading && !error && repos.length === 0 && (
          <p className="text-center text-muted-foreground">
            No public repositories yet — check back soon.
          </p>
        )}

        {!loading && !error && repos.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <Card
                key={repo.id}
                className="bg-card/60 border-border hover:border-primary/50 transition-all hover:-translate-y-1 duration-300 group flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Code2 className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-lg break-words group-hover:text-primary transition-colors">
                    {repo.name}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed line-clamp-3 min-h-[3.75rem]">
                    {repo.description || "No description provided."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {repo.language && (
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs border ${
                          langColor[repo.language] ||
                          "bg-muted text-muted-foreground border-border"
                        }`}
                      >
                        {repo.language}
                      </span>
                    )}
                    {repo.topics?.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/30"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                    {repo.homepage && (
                      <Button asChild variant="ghost" size="sm">
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="glow-effect"
          >
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              Follow on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;