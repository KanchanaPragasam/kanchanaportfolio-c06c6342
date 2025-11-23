import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Code2, Palette, Layers, Sparkles, Download, GraduationCap, Briefcase } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";
import ParticlesBackground from "@/components/ParticlesBackground";

const Index = () => {
  const skills = [
    { name: "Angular", icon: Code2 },
    { name: "TypeScript", icon: Code2 },
    { name: "HTML5", icon: Code2 },
    { name: "SCSS", icon: Palette },
    { name: "Responsive Design", icon: Layers },
    { name: "UI/UX Basics", icon: Sparkles },
    { name: "Git / GitHub", icon: Github },
  ];

  const projects = [
    {
      title: "Inspiration Computer Services",
      description: "A comprehensive corporate website for an IT software development company offering custom software, mobile applications, and enterprise solutions. Implemented with Angular SSO authentication, fully responsive design, and SEO optimization.",
      image: project1,
      tech: ["Angular", "TypeScript", "SSO", "SEO", "Responsive Design"],
      demo: "https://inspirationcs.ca/",
      github: "https://github.com/KanchanaPragasam",
    },
    {
      title: "IT Training Course Platform",
      description: "Modern training course platform for IT education with course catalog, enrollment system, and interactive learning modules. Fully responsive with smooth animations and optimized performance.",
      image: project2,
      tech: ["Angular", "TypeScript", "SCSS", "API Integration"],
      demo: "#",
      github: "https://github.com/KanchanaPragasam",
    },
    {
      title: "Static Business Website",
      description: "Professional static website with modern design, smooth scrolling, and glass-morphism effects. Deployed and hosted with complete SEO implementation for optimal search engine visibility.",
      image: project3,
      tech: ["HTML5", "SCSS", "JavaScript", "SEO"],
      demo: "#",
      github: "https://github.com/KanchanaPragasam",
    },
  ];

  const education = [
    {
      institution: "Arignar Anna Government Arts College for Women",
      location: "Walajapet, Ranipet",
      degree: "Bachelor's Degree",
      duration: "2021 - 2024",
      grade: "8.2 CGPA",
    },
    {
      institution: "Government Girls Hr. Sec. School",
      location: "",
      degree: "Higher Secondary (HSC)",
      duration: "2020 - 2021",
      grade: "93.17%",
    },
    {
      institution: "Government Girls Hr. Sec. School",
      location: "",
      degree: "Secondary School (SSLC)",
      duration: "2018 - 2019",
      grade: "94%",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ParticlesBackground />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Frontend Developer
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              & UI Builder
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Passionate about crafting clean, modern web experiences with pixel-perfect precision and smooth interactions
            </p>
            <Button 
              size="lg" 
              variant="hero"
              className="text-lg px-8 py-6 h-auto"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </section>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card p-12 animate-fade-in hover-lift">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <img 
                src={profilePhoto} 
                alt="Kanchana Pragasam" 
                className="w-48 h-48 rounded-full object-cover border-4 border-primary/30 glow-primary"
              />
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                  About Me
                </h2>
                <div className="flex gap-4">
                  <Button 
                    variant="hero" 
                    size="sm"
                    onClick={() => window.open('https://github.com/KanchanaPragasam', '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Hi, I'm <span className="text-primary font-semibold">Kanchana Pragasam</span>, a Software Engineer Trainee at <span className="text-secondary">Missionmind IT Services</span>, specializing in building smooth, responsive, and pixel-perfect user interfaces. With a strong foundation in <span className="text-secondary">Angular</span>, <span className="text-secondary">TypeScript</span>, <span className="text-secondary">HTML5</span>, and <span className="text-secondary">SCSS</span>, I transform designs into interactive web experiences.
              </p>
              <p>
                I'm passionate about creating clean, maintainable code and implementing modern design patterns. I've worked on Angular SSO implementation projects, static websites with complete hosting and SEO optimization. Every project I build focuses on performance, accessibility, and user experience. I believe that great UI is the perfect blend of aesthetics and functionality.
              </p>
              <p>
                Beyond coding, I'm an active volunteer at <span className="text-accent font-semibold">Gold Heart Foundation</span>, an NGO where I contribute to meaningful social causes. When I'm not coding or volunteering, you'll find me exploring new web technologies and designing the next innovative interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="glass-card p-6 hover-lift glow-primary cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
            Professional Experience
          </h2>
          <div className="glass-card p-8 hover-lift">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl bg-primary/10 glow-primary">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">Software Engineer Trainee</h3>
                <p className="text-secondary font-semibold mb-2">Missionmind IT Services</p>
                <p className="text-muted-foreground mb-4">December 2024 - Present</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    Implemented Angular SSO (Single Sign-On) authentication for enterprise applications
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    Developed and deployed static websites with modern design patterns
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    Managed complete hosting solutions and implemented comprehensive SEO strategies
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    Collaborated with cross-functional teams to deliver high-quality web applications
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="glass-card p-8 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-secondary/10 glow-secondary">
                    <GraduationCap className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{edu.institution}</h3>
                    {edu.location && <p className="text-muted-foreground mb-1">{edu.location}</p>}
                    <p className="text-primary font-semibold mb-2">{edu.degree}</p>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <span>{edu.duration}</span>
                      <span className="text-accent font-semibold">• {edu.grade}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="glass-card overflow-hidden hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="glass" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => project.demo !== '#' && window.open(project.demo, '_blank')}
                      disabled={project.demo === '#'}
                    >
                      View Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-secondary/50 hover:border-secondary"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
            Get In Touch
          </h2>
          <div className="glass-card p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="glass-card border-white/10 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="glass-card border-white/10 focus:border-primary/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={6}
                  className="glass-card border-white/10 focus:border-primary/50 resize-none"
                />
              </div>
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
              >
                Send Message
              </Button>
            </form>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-12 pt-8 border-t border-white/10">
              <a
                href="mailto:kanchanapragasam@gmail.com"
                className="p-4 glass-card hover:border-primary/50 transition-all hover:scale-110 glow-primary"
              >
                <Mail className="w-6 h-6 text-primary" />
              </a>
              <a
                href="https://linkedin.com/in/kanchanapragasam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-card hover:border-secondary/50 transition-all hover:scale-110 glow-secondary"
              >
                <Linkedin className="w-6 h-6 text-secondary" />
              </a>
              <a
                href="https://github.com/KanchanaPragasam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-card hover:border-accent/50 transition-all hover:scale-110 glow-accent"
              >
                <Github className="w-6 h-6 text-accent" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Kanchana Pragasam. Built with React, TypeScript & Tailwind CSS</p>
          <p className="text-sm mt-2">Active Volunteer at Gold Heart Foundation</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
