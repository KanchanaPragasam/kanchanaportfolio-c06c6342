import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Code2, Palette, Layers, Sparkles, Download, GraduationCap, Briefcase, Heart, Server, Database, Image as ImageIcon, Zap, FileCode } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";
import ParticlesBackground from "@/components/ParticlesBackground";
import Navigation from "@/components/Navigation";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  const skills = [
    { name: "Angular", icon: Code2 },
    { name: "TypeScript", icon: Code2 },
    { name: "JavaScript", icon: FileCode },
    { name: "HTML5", icon: Code2 },
    { name: "SCSS", icon: Palette },
    { name: "Responsive Design", icon: Layers },
    { name: "UI/UX Basics", icon: Sparkles },
    { name: "Git / GitHub", icon: Github },
    { name: "SEO Optimization", icon: Zap },
    { name: "Lazy Loading", icon: Zap },
    { name: "API Integration", icon: Server },
    { name: "WordPress", icon: Database },
    { name: "FTP (FileZilla)", icon: Server },
    { name: "Performance Optimization", icon: Zap },
    { name: "Image Compression", icon: ImageIcon },
  ];

  const projects = [
    {
      title: "Inspiration Computer Services",
      description: "A corporate website for an IT company offering software and mobile app solutions. Implemented with Angular SSO authentication, fully responsive design, and SEO optimization.",
      image: project1,
      tech: ["Angular", "TypeScript", "SSO", "SEO", "Responsive Design"],
      demo: "https://inspirationcs.ca/",
      github: "https://github.com/KanchanaPragasam",
    },
    {
      title: "IT Training Course Platform",
      description: "A modern platform for IT education featuring course listings, animations, and optimized modules with Angular architecture.",
      image: project2,
      tech: ["Angular", "TypeScript", "SCSS", "API Integration"],
      demo: "https://wp4.inspirationcs.ca",
      github: "https://github.com/KanchanaPragasam",
    },
    {
      title: "Static Business Website",
      description: "Professional static website with modern design, smooth scrolling, and glassmorphism effects with complete hosting and SEO implementation.",
      image: project3,
      tech: ["HTML5", "SCSS", "JavaScript", "SEO"],
      demo: "https://staging.missinmindtech.com",
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
      <Navigation />
      <BackToTop />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ParticlesBackground />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in pt-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-primary mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Hi, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Kanchana Pragasam
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Frontend Developer & UI Builder
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Specializing in building smooth, responsive, and pixel-perfect user interfaces with Angular, TypeScript, and modern web technologies.
            </p>
            <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                variant="hero"
                className="text-lg px-8 py-6 h-auto"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="glass"
                className="text-lg px-8 py-6 h-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-20 w-24 h-24 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
            About Me
          </h2>
          <div className="glass-card p-12 animate-fade-in hover-lift">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <img 
                src={profilePhoto} 
                alt="Kanchana Pragasam" 
                className="w-56 h-56 rounded-full object-cover border-4 border-primary/30 glow-primary flex-shrink-0"
              />
              <div className="flex-1 space-y-6 text-lg text-muted-foreground">
                <p>
                  Hi, I'm <span className="text-primary font-semibold">Kanchana Pragasam</span>, a <span className="text-secondary font-semibold">Software Engineer Trainee</span> at <span className="text-secondary">Missionmind IT Services</span> specializing in building smooth, responsive, and pixel-perfect user interfaces. I transform designs into interactive experiences using <span className="text-primary">Angular</span>, <span className="text-primary">TypeScript</span>, <span className="text-primary">HTML5</span>, and <span className="text-primary">SCSS</span>.
                </p>
                <p>
                  I focus on <span className="text-accent">performance</span>, <span className="text-accent">accessibility</span>, and modern UI design patterns. I've worked on Angular SSO implementation, static site development, hosting setups, scalability planning, and SEO optimization.
                </p>
                <p>
                  I also volunteer actively at <span className="text-secondary font-semibold">Gold Heart Foundation</span>, contributing to community-focused initiatives. When I'm not coding, I explore new technologies and experiment with UI/UX concepts.
                </p>
                <div className="pt-4">
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={() => window.open('https://github.com/KanchanaPragasam', '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="glass-card p-6 hover-lift glow-primary cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:scale-110 duration-300">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{skill.name}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
            Professional Experience
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
            
            <div className="glass-card p-8 hover-lift ml-20 animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="absolute -left-14 p-4 rounded-xl bg-primary/10 glow-primary">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Software Engineer Trainee</h3>
                  <p className="text-secondary font-semibold mb-2">Missionmind IT Services</p>
                  <p className="text-muted-foreground mb-6">December 2024 - Present</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">▹</span>
                      <span>Implemented <span className="text-primary font-semibold">Angular SSO authentication</span> for enterprise applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">▹</span>
                      <span>Developed and deployed static websites with <span className="text-secondary font-semibold">modern design patterns</span></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">▹</span>
                      <span>Managed complete <span className="text-accent font-semibold">hosting solutions</span> and implemented comprehensive <span className="text-accent font-semibold">SEO strategies</span></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">▹</span>
                      <span>Built scalable UI using <span className="text-secondary font-semibold">Angular + TypeScript</span></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">▹</span>
                      <span>Used <span className="text-primary font-semibold">lazy loading</span>, WebP images, and performance tuning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">▹</span>
                      <span>Worked with <span className="text-accent font-semibold">WordPress</span> and deployed websites using <span className="text-accent font-semibold">FTP (FileZilla)</span></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
            Education
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-primary to-accent" />
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="glass-card p-8 hover-lift ml-20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="absolute -left-14 p-4 rounded-xl bg-secondary/10 glow-secondary">
                      <GraduationCap className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{edu.institution}</h3>
                      {edu.location && <p className="text-muted-foreground mb-2">{edu.location}</p>}
                      <p className="text-primary font-semibold text-lg mb-3">{edu.degree}</p>
                      <div className="flex flex-wrap gap-4 text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          {edu.duration}
                        </span>
                        <span className="text-accent font-semibold text-lg">• {edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
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
                      onClick={() => window.open(project.demo, '_blank')}
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

      {/* Volunteer Section */}
      <section id="volunteer" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
            Community Involvement
          </h2>
          <div className="glass-card p-12 hover-lift animate-fade-in">
            <div className="flex items-start gap-6">
              <div className="p-6 rounded-xl bg-accent/10 glow-accent flex-shrink-0">
                <Heart className="w-12 h-12 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-4">Active Volunteer</h3>
                <p className="text-accent font-semibold text-xl mb-4">Gold Heart Foundation</p>
                <p className="text-lg text-muted-foreground mb-6">
                  I am proud to be an active volunteer at <span className="text-accent font-semibold">Gold Heart Foundation</span>, an NGO dedicated to making a positive impact in our community. Through this organization, I contribute to various social initiatives and community development programs.
                </p>
                <p className="text-lg text-muted-foreground">
                  Beyond my professional work in software development, I believe in giving back to society and using my skills and time to support meaningful causes. Volunteering has taught me valuable lessons about teamwork, empathy, and the importance of community service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
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
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-center text-muted-foreground mb-6">Connect with me</p>
              <div className="flex justify-center gap-6">
                <a
                  href="mailto:kanchanapragasam@gmail.com"
                  className="p-4 glass-card hover:border-primary/50 transition-all hover:scale-110 glow-primary group"
                  title="Email"
                >
                  <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://linkedin.com/in/kanchanapragasam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-card hover:border-secondary/50 transition-all hover:scale-110 glow-secondary group"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://github.com/KanchanaPragasam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-card hover:border-accent/50 transition-all hover:scale-110 glow-accent group"
                  title="GitHub"
                >
                  <Github className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 bg-card/20">
        <div className="container mx-auto text-center">
          <p className="text-lg gradient-text font-semibold mb-2">Kanchana Pragasam</p>
          <p className="text-muted-foreground mb-4">Frontend Developer & UI Builder</p>
          <p className="text-sm text-muted-foreground">
            © 2024 Kanchana Pragasam. Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
