
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
    { href: '#features', label: 'Features' },
    { href: '#process', label: 'Process' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        isScrolled ? 'bg-white/80 dark:bg-pluria-950/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-serif font-bold tracking-tight z-10">
            Pluria
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white" size="sm">
              Contact Us
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
          'fixed inset-0 bg-white dark:bg-pluria-950 z-0 transition-transform duration-300 ease-out-expo md:hidden',
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="container h-full flex flex-col justify-center items-center space-y-8 p-4">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="text-xl font-medium transition-colors hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button 
            className="mt-4 bg-primary hover:bg-primary/90 text-white" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
