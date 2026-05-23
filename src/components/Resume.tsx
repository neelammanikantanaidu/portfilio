import { Download, FileText, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text-accent">
          Resume
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Download my resume to learn more about my experience and skills
        </p>

        <Card className="bg-card/50 border-border hover:border-primary/40 transition-all duration-300 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Resume Preview Icon */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-primary/15 blur-3xl rounded-full" />
                <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-2xl border border-primary/30 flex items-center justify-center">
                  <FileText className="h-12 w-12 md:h-16 md:w-16 text-primary" strokeWidth={1.5} />
                </div>
              </div>

              {/* Resume Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Neelam Manikanta Naidu
                </h3>
                <p className="text-muted-foreground mb-6">
                  Cyber Security Student &middot; ECE Background &middot; Ethical Hacker
                </p>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button
                    size="lg"
                    className="glow-effect"
                    asChild
                  >
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye className="mr-2 h-5 w-5" />
                      View in Browser
                    </a>
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  PDF format &middot; Opens in a new tab
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: "Education", value: "B.Tech" },
            { label: "Field", value: "Cyber Security" },
            { label: "Experience", value: "Internships" },
            { label: "Projects", value: "10+" },
          ].map((stat, idx) => (
            <Card
              key={idx}
              className="bg-card/30 border-border hover:border-primary/30 transition-all duration-300 text-center"
            >
              <CardContent className="p-4">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
