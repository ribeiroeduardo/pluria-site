
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '#features', label: 'FEATURES' },
    { href: '#process', label: 'PROCESS' },
    { href: '#testimonials', label: 'TESTIMONIALS' },
    { href: '#portfolio', label: 'PORTFOLIO' },
    { href: '#about', label: 'ABOUT' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300',
        isScrolled ? 'bg-background/95 backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-serif font-medium tracking-widest uppercase z-10">
            Pluria
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="text-xs font-medium tracking-widest uppercase transition-colors hover:text-accent/80"
              >
                {link.label}
              </a>
            ))}
            <Button 
              className="bg-transparent hover:bg-accent/10 text-foreground border border-accent/30 uppercase tracking-widest text-xs rounded-none px-6" 
              size="sm"
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 z-10 text-primary" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          'fixed inset-0 bg-background z-0 transition-transform duration-300 ease-out-expo md:hidden',
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="container h-full flex flex-col justify-center items-center space-y-8 p-4">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="text-base font-medium tracking-widest uppercase transition-colors hover:text-accent/80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button 
            className="mt-4 bg-transparent hover:bg-accent/10 text-foreground border border-accent/30 uppercase tracking-widest text-xs rounded-none px-6" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
