import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, Shield, Code, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Online Course Portal
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Mini LMS built with React JS featuring routing with login protection
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/courses">
              <Button size="lg" className="gap-2">
                <BookOpen className="h-5 w-5" />
                Explore Courses
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="gap-2">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Built with Modern Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">React JS</h3>
              <p className="text-muted-foreground">
                Modern React with hooks, components, and best practices
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Protected Routes</h3>
              <p className="text-muted-foreground">
                Secure authentication system with route protection
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learning Management</h3>
              <p className="text-muted-foreground">
                Complete course management and enrollment system
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-muted py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-card p-8 rounded-lg shadow-card max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Technologies Used</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {['React JS', 'React Router DOM', 'Protected Routes', 'Authentication System', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                <span key={tech} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Credits */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Project Credits</h3>
            <p className="text-lg text-primary font-semibold mb-1">Online Course Portal (Mini LMS)</p>
            <p className="text-muted-foreground mb-6">React JS Routing with Login Protection</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Team Members</h4>
              <ul className="space-y-2 text-sm">
                <li>S. Maadhesh</li>
                <li>Shafiq</li>
                <li>Aadhithiyan</li>
                <li>K. Karthikeyan</li>
              </ul>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Project Information</h4>
              <p className="text-sm mb-2">
                <span className="font-medium">Concept:</span> React JS Routing with Login Protection
              </p>
              <p className="text-sm">
                <span className="font-medium">Guided by:</span> Faculty Name
              </p>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>© 2024 EduPortal. Built as a learning project.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
