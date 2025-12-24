import { Instagram, Youtube, Twitter, Mail, ChevronDown } from "lucide-react";
import jaaasi1 from "@/assets/jaaasi-1.jpeg";
import jaaasi2 from "@/assets/jaaasi-2.jpeg";
import jaaasi3 from "@/assets/jaaasi-3.jpeg";
import jaaasi4 from "@/assets/jaaasi-4.jpeg";
import jaaasi5 from "@/assets/jaaasi-5.jpeg";
import jaaasi6 from "@/assets/jaaasi-6.jpeg";
import jaaasi7 from "@/assets/jaaasi-7.jpeg";

const Index = () => {
  const galleryImages = [jaaasi2, jaaasi3, jaaasi4, jaaasi5, jaaasi6, jaaasi7];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-2xl text-primary tracking-wider">
            JAAASI
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm tracking-wide">
              ABOUT
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm tracking-wide">
              GALLERY
            </a>
            <a href="#connect" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm tracking-wide">
              CONNECT
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Hero Image */}
            <div className="relative animate-scale-in">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-gold animate-glow">
                <img 
                  src={jaaasi1} 
                  alt="JAAASI THE BOSS" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: '20s' }} />
            </div>
            
            {/* Hero Content */}
            <div className="text-center lg:text-left animate-slide-up">
              <p className="text-primary font-body text-lg tracking-widest mb-4">WELCOME TO THE WORLD OF</p>
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-none mb-6">
                JAAASI
                <span className="block text-gradient-gold">THE BOSS</span>
              </h1>
              <div className="space-y-2 mb-8">
                <p className="text-primary font-body text-sm md:text-base italic tracking-wide">
                  "NEVER FORGET TO TAKE REVENGE"
                </p>
                <p className="text-muted-foreground font-body text-sm md:text-base italic">
                  "If I am doing revenge, only someone will notice it's revenge"
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a 
                  href="#gallery" 
                  className="bg-gradient-gold text-primary-foreground px-8 py-3 rounded-full font-body font-semibold tracking-wide hover:shadow-gold transition-shadow"
                >
                  View Gallery
                </a>
                <a 
                  href="#connect" 
                  className="border border-primary/50 text-primary px-8 py-3 rounded-full font-body font-semibold tracking-wide hover:bg-primary/10 transition-colors"
                >
                  Connect
                </a>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-muted-foreground text-sm font-body tracking-widest">SCROLL</span>
            <ChevronDown className="text-primary" size={24} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-body tracking-widest mb-4">GET TO KNOW</p>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-8">THE BOSS LIFE</h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-12 rounded-full" />
            <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed mb-8">
              I'm JAAASI — a man who believes in living life to the fullest. Whether it's cruising through the streets, 
              setting trends with my style, or just vibing with life's best moments, I embrace every opportunity to shine.
            </p>
            <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed mb-8">
              Fashion, lifestyle, and an attitude that says "I'm the boss" — that's what defines me. 
              Join me on this journey and let's make every moment legendary.
            </p>
            
            {/* Boss Quotes */}
            <div className="border-l-4 border-primary pl-6 text-left max-w-2xl mx-auto space-y-4">
              <p className="text-foreground font-display text-2xl md:text-3xl italic">
                "NEVER FORGET TO TAKE REVENGE"
              </p>
              <p className="text-muted-foreground font-body text-lg md:text-xl italic">
                "If I am doing revenge, only someone will notice it's revenge"
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { number: "100%", label: "AUTHENTIC" },
              { number: "24/7", label: "GRINDING" },
              { number: "∞", label: "JOWA UNLIMITED" },
              { number: "#1", label: "MINDSET" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display text-4xl md:text-5xl text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground font-body text-sm tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-body tracking-widest mb-4">VISUAL VIBES</p>
            <h2 className="font-display text-5xl md:text-7xl text-foreground">THE GALLERY</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative aspect-square overflow-hidden rounded-xl bg-card shadow-card hover:shadow-gold transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={image} 
                  alt={`JAAASI photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-primary font-display text-xl tracking-wider">JAAASI</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-body tracking-widest mb-4">LET'S CONNECT</p>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-8">STAY IN TOUCH</h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-12 rounded-full" />
            <p className="text-muted-foreground font-body text-lg md:text-xl mb-12">
              Follow my journey, get inspired, and be part of the boss movement.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-12">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
                { icon: Twitter, label: "Twitter" },
                { icon: Mail, label: "Email" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-gold transition-all duration-300"
                >
                  <social.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={28} />
                  <span className="text-muted-foreground group-hover:text-foreground text-sm font-body transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-display text-2xl text-primary tracking-wider">JAAASI THE BOSS</p>
            <p className="text-muted-foreground font-body text-sm">
              © 2024 All Rights Reserved. Living the Boss Life.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
