import { Shield, Code, Cpu, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePic from "@/assets/profile.webp";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-8 slide-in">
          {/* Profile Photo */}
          <div className="relative float-animation">
            <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full" />
            <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-full overflow-hidden border-4 border-primary/60 shadow-[0_0_40px_hsl(var(--primary)/0.5)] mx-auto">
              <img
                src={profilePic}
                alt="Neelam Manikanta Naidu"
                className="h-full w-full object-cover object-center"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-2 border-2 border-primary">
              <Shield className="h-6 w-6 text-primary" strokeWidth={2} />
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text-accent leading-tight">
              Neelam Manikanta Naidu
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xl md:text-2xl text-muted-foreground">
              <span className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Cyber Security Fresher
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-accent" />
                ECE Background
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="flex items-center gap-2">
                <Code className="h-5 w-5 text-soft-blue" />
                Ethical Hacker
              </span>
            </div>
          </div>

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for Internships & Entry-Level Roles
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-foreground max-w-3xl leading-relaxed">
            "Exploring the unseen side of technology — securing the future, one system at a time."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="glow-effect"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open("https://github.com/neelammanikantanaidu", "_blank")}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open("https://linkedin.com/in/manikantanaidu453", "_blank")}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open("mailto:manikantanaiduneelam@gmail.com", "_blank")}
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open("tel:+919392452477", "_blank")}
            >
              <Phone className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;