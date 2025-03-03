import React from 'react';
import { cn } from '@/lib/utils';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = [{
    title: 'Company',
    links: [{
      label: 'About Us',
      href: '#about'
    }, {
      label: 'Our Process',
      href: '#process'
    }, {
      label: 'Portfolio',
      href: '#portfolio'
    }, {
      label: 'Contact',
      href: '#contact'
    }]
  }, {
    title: 'Services',
    links: [{
      label: 'Custom Guitars',
      href: '#'
    }, {
      label: 'Repair & Maintenance',
      href: '#'
    }, {
      label: 'Restoration',
      href: '#'
    }, {
      label: 'Consulting',
      href: '#'
    }]
  }, {
    title: 'Resources',
    links: [{
      label: 'Blog',
      href: '#'
    }, {
      label: 'FAQ',
      href: '#'
    }, {
      label: 'Testimonials',
      href: '#testimonials'
    }, {
      label: 'Care Guide',
      href: '#'
    }]
  }, {
    title: 'Legal',
    links: [{
      label: 'Privacy Policy',
      href: '#'
    }, {
      label: 'Terms of Service',
      href: '#'
    }, {
      label: 'Warranty',
      href: '#'
    }, {
      label: 'Shipping Policy',
      href: '#'
    }]
  }];
  const socialLinks = [{
    icon: Facebook,
    href: '#',
    label: 'Facebook'
  }, {
    icon: Instagram,
    href: '#',
    label: 'Instagram'
  }, {
    icon: Twitter,
    href: '#',
    label: 'Twitter'
  }, {
    icon: Youtube,
    href: '#',
    label: 'YouTube'
  }];
  return <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            
            
            <div className="flex space-x-4">
              {socialLinks.map((link, i) => {
              const Icon = link.icon;
              return <a key={i} href={link.href} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200" aria-label={link.label}>
                    <Icon className="h-5 w-5" />
                  </a>;
            })}
            </div>
          </div>

          {footerLinks.map((column, i) => <div key={i}>
              <h4 className="font-medium text-lg mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, j) => <li key={j}>
                    <a href={link.href} className="text-white/70 hover:text-white transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>)}
              </ul>
            </div>)}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} Pluria Custom Guitars. All rights reserved.
          </p>
          <p className="text-white/70 text-sm mt-2 md:mt-0">
            Handcrafted with passion in Portland, Oregon
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;