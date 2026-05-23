import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      role: "PCB Design Intern",
      company: "I-lite PVT Limited",
      duration: "Industrial Training",
      period: "2023-2024",
      description: "Hands-on industrial training in PCB design and electronics manufacturing as part of the ECE diploma curriculum. Worked alongside engineers on schematic capture, board layout, and component-level testing.",
      achievements: [
        "Designed multi-layer PCB layouts using industry tools",
        "Performed schematic capture and component placement",
        "Assisted in prototyping and circuit-level debugging",
        "Gained exposure to manufacturing and quality-check workflows",
      ],
    },
    {
      role: "Python Full Stack Intern",
      company: "Data Valley",
      duration: "Internship",
      period: "2024",
      description: "Full-stack web development internship using Python. Built end-to-end applications covering frontend, backend, and database layers while practicing professional development workflows.",
      achievements: [
        "Built Python-based web applications with HTML, CSS, JavaScript",
        "Worked with MySQL databases and REST APIs",
        "Practiced version control with Git and code reviews",
        "Delivered project modules within sprint timelines",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Experience
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Real-world experience shaping my cybersecurity journey
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              className="bg-card/50 border-border hover:border-primary/40 transition-all"
            >
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{exp.role}</CardTitle>
                    <CardDescription className="text-lg text-primary font-medium">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                    <span className="ml-2 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">{exp.description}</p>
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIdx) => (
                      <li key={achIdx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-accent">Education</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card/30 border-border">
              <CardHeader>
                <CardTitle className="text-xl">B.Tech - Cyber Security</CardTitle>
                <CardDescription className="text-primary font-medium">
                  A.M. Reddy Memorial College of Engineering & Technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year:</span>
                    <span className="text-foreground font-medium">3rd Year (2024-27)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Percentage:</span>
                    <span className="text-accent font-bold text-lg">73.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/30 border-border">
              <CardHeader>
                <CardTitle className="text-xl">Diploma in ECE</CardTitle>
                <CardDescription className="text-primary font-medium">
                  Government Polytechnic, Parvathipuram
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Percentage:</span>
                    <span className="text-accent font-bold text-lg">70.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Stream:</span>
                    <span className="text-foreground font-medium">Electronics & Communication</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/30 border-border">
              <CardHeader>
                <CardTitle className="text-xl">SSC</CardTitle>
                <CardDescription className="text-primary font-medium">
                  Secondary School Certificate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CGPA:</span>
                    <span className="text-accent font-bold text-lg">9.3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year:</span>
                    <span className="text-foreground font-medium">2021</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;