import { Shield, Code, Network, Database, Cpu, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["C", "C++", "Java", "Python"],
      color: "text-primary",
    },
    {
      title: "Web Development",
      icon: Terminal,
      skills: ["HTML", "CSS", "JavaScript"],
      color: "text-accent",
    },
    {
      title: "Frameworks / Tools",
      icon: Cpu,
      skills: ["Git", "VS Code", "Arduino IDE"],
      color: "text-soft-blue",
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL", "DBMS"],
      color: "text-soft-indigo",
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: ["Network Security", "NMap", "Wireshark"],
      color: "text-primary",
    },
    {
      title: "Operating Systems",
      icon: Network,
      skills: ["Windows", "Linux", "Mac"],
      color: "text-accent",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Technical Skills
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Tools and technologies I'm actively learning and applying
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <Card
              key={idx}
              className="bg-card/50 border-border hover:border-primary/40 transition-all hover:scale-105 duration-300"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                  <span className={category.color}>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 bg-muted/50 rounded-full text-sm text-foreground border border-border hover:border-primary/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Strengths */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="bg-card/30 border-primary/40">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">73.2%</div>
              <p className="text-muted-foreground">B.Tech Cyber Security</p>
            </CardContent>
          </Card>
          <Card className="bg-card/30 border-accent/40">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">70.3%</div>
              <p className="text-muted-foreground">Diploma in ECE</p>
            </CardContent>
          </Card>
          <Card className="bg-card/30 border-soft-blue/40">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-soft-blue mb-2">9.3</div>
              <p className="text-muted-foreground">SSC CGPA</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;