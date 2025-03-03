
import React from 'react';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <Section id="contact" className="bg-secondary/50">
      <div className="text-center section-title animate-fade-in">
        <span className="tag bg-primary/10 text-primary">Get In Touch</span>
        <h2 className="mt-4 mb-4">Contact Us</h2>
        <p className="section-subtitle mx-auto">
          Reach out to discuss your dream guitar or schedule a consultation with our expert team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="animate-fade-in">
          <div className="glass-panel p-8 rounded-lg h-full">
            <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@pluriaguitars.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Workshop</p>
                  <p className="text-muted-foreground">123 Craftsman Way</p>
                  <p className="text-muted-foreground">Portland, OR 97204</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Workshop Hours</h4>
              <div className="grid grid-cols-2 gap-2">
                <p>Monday - Friday</p>
                <p>9:00 AM - 6:00 PM</p>
                <p>Saturday</p>
                <p>10:00 AM - 4:00 PM</p>
                <p>Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="animate-fade-in animation-delay-200">
          <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-lg">
            <h3 className="text-2xl font-medium mb-6">Send Us a Message</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input id="phone" placeholder="Your phone number" />
            </div>
            
            <div className="space-y-2 mb-6">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Tell us about your dream guitar or ask a question..." 
                rows={5}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
