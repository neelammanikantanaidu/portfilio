import { GraduationCap, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              I'm a <span className="text-primary font-semibold">Cyber Security student</span> with a strong background in{" "}
              <span className="text-accent font-semibold">Electronics and Communication Engineering</span>, passionate about{" "}
              <span className="text-primary">system testing, bug bounty, penetration testing, and network security</span>.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              Skilled in identifying vulnerabilities and applying security techniques to protect systems. I bridge hardware fundamentals from my{" "}
              <span className="text-primary">Diploma in ECE (70.3%)</span> with modern cyber defense practices from my{" "}
              <span className="text-accent">B.Tech in Cyber Security (73.2%)</span>.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              Seeking an opportunity to apply my cybersecurity knowledge in{" "}
              <span className="text-primary font-semibold">real-world environments</span> — contributing to secure, resilient, and trustworthy systems.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="bg-card/50 border-border hover:border-primary/40 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Education</h3>
                    <p className="text-foreground">
                      B.Tech in Cyber Security (73.2%)<br />
                      <span className="text-sm text-muted-foreground">A.M. Reddy Memorial College of Engineering & Technology</span>
                    </p>
                    <p className="text-foreground mt-2">
                      Diploma in ECE (70.3%)<br />
                      <span className="text-sm text-muted-foreground">Government Polytechnic, Parvathipuram</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border hover:border-primary/40 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-accent mb-2">Certifications</h3>
                    <p className="text-foreground">
                      NPTEL - IoT & Industry 4.0 (67%)<br />
                      NPTEL - AI for Management (65%)<br />
                      <span className="text-sm text-muted-foreground">IIT Madras / NPTEL</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border hover:border-primary/40 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Target className="h-8 w-8 text-soft-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-soft-blue mb-2">Goal</h3>
                    <p className="text-foreground">
                      To become a <span className="text-primary font-semibold">Professional Ethical Hacker & IoT Security Expert</span>,
                      protecting digital environments and empowering safe innovation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center p-8 bg-card/30 rounded-lg border border-border">
          <p className="text-xl md:text-2xl text-primary font-semibold italic">
            "Security isn't just about defense — it's about designing systems that can stand strong."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;