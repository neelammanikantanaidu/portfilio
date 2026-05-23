import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manikantanaiduneelam@gmail.com",
      link: "mailto:manikantanaiduneelam@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 93924 52477",
      link: "tel:+919392452477",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "manikantanaidu453",
      link: "https://linkedin.com/in/manikantanaidu453",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "neelammanikantanaidu",
      link: "https://github.com/neelammanikantanaidu",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Let's connect and build something secure together
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact info cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 content-start">
            {contactInfo.map((contact, idx) => (
              <Card
                key={idx}
                className="bg-card/50 border-border hover:border-primary/40 transition-all hover:scale-[1.02] duration-300 cursor-pointer"
                onClick={() => window.open(contact.link, "_blank")}
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <contact.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground">{contact.label}</p>
                      <p className="text-foreground font-medium truncate">{contact.value}</p>
                    </div>
                    <Send className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact form */}
          <ContactForm />
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/40">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Interested in collaboration?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, want to discuss cybersecurity, or just want to connect,
              I'm always open to new opportunities and conversations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="glow-effect"
                onClick={() => window.open("mailto:manikantanaiduneelam@gmail.com", "_blank")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open("https://linkedin.com/in/manikantanaidu453", "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-muted-foreground">
          <p className="text-sm">
            © 2024 Neelam Manikanta Naidu. Built with security in mind.
          </p>
          <p className="text-xs mt-2 italic text-primary">
            "Securing the future, one system at a time."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;