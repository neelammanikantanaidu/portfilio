import { Award, ExternalLink, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import nptelAiCert from "@/assets/nptel-ai-management.jpg";

type Cert = {
  title: string;
  issuer: string;
  score?: string;
  duration?: string;
  description: string;
  date: string;
  type: string;
  image?: string;
  rollNo?: string;
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);

  const certifications: Cert[] = [
    {
      title: "Artificial Intelligence (AI) for Management",
      issuer: "NPTEL · IIT Madras",
      score: "65%",
      description:
        "12-week NPTEL online certification from IIT Madras (funded by MoE, Govt. of India) covering AI fundamentals, machine learning concepts, and applications of AI in modern management and decision-making.",
      date: "2026",
      type: "NPTEL Certification",
      image: nptelAiCert,
      rollNo: "NPTEL26CS10S151300451",
    },
    {
      title: "IoT & Industry 4.0",
      issuer: "NPTEL (Funded by MoE, Govt. of India)",
      score: "67%",
      description:
        "Comprehensive course covering Internet of Things fundamentals, Industry 4.0 concepts, smart manufacturing, and IoT security principles.",
      date: "2024",
      type: "NPTEL Certification",
    },
    {
      title: "Python Full Stack Development",
      issuer: "DataValley",
      duration: "2 Months",
      description:
        "Internship program covering Python programming, web development frameworks, database management, and full-stack application development.",
      date: "2024",
      type: "Internship",
    },
    {
      title: "ECE Industrial Training",
      issuer: "iLite India Pvt. Ltd.",
      duration: "6 Months",
      description:
        "Hands-on industrial training in the Electronics & Communication department covering circuits, embedded systems and industrial equipment as part of diploma curriculum.",
      date: "2023-2024",
      type: "Industrial Training",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Certifications & Training
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Click any card to view full details and certificate
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <Card
              key={idx}
              className="bg-card/50 border-border hover:border-primary/40 transition-all hover:scale-105 duration-300 cursor-pointer group overflow-hidden"
              onClick={() => setSelectedCert(cert)}
            >
              {cert.image && (
                <div className="relative h-40 overflow-hidden border-b border-border">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Award className="h-8 w-8 text-primary" />
                  <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                    {cert.type}
                  </span>
                </div>
                <CardTitle className="text-xl">{cert.title}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {cert.score && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Score:</span>
                      <span className="text-accent font-semibold">{cert.score}</span>
                    </div>
                  )}
                  {cert.duration && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="text-foreground font-medium">{cert.duration}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="text-foreground font-medium">{cert.date}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full mt-4 text-primary hover:text-primary hover:bg-primary/10"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  View Certificate
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certificate Dialog */}
        <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl text-primary pr-8">
                {selectedCert?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {selectedCert?.image && (
                <div className="rounded-lg overflow-hidden border border-border bg-white">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto"
                  />
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Issuer</h4>
                  <p className="text-muted-foreground text-sm">{selectedCert?.issuer}</p>
                </div>
                {selectedCert?.score && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Score</h4>
                    <p className="text-accent font-semibold">{selectedCert.score}</p>
                  </div>
                )}
                {selectedCert?.duration && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Duration</h4>
                    <p className="text-muted-foreground text-sm">{selectedCert.duration}</p>
                  </div>
                )}
                {selectedCert?.rollNo && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Roll No.</h4>
                    <p className="text-muted-foreground text-sm">{selectedCert.rollNo}</p>
                  </div>
                )}
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">About</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {selectedCert?.description}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certifications;