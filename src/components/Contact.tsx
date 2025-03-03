import React from 'react';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
interface ContactFormData {
  email: string;
  phone: string;
  message: string;
}
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<ContactFormData>();
  const onSubmit = async (data: ContactFormData) => {
    // TODO: Implement form submission
    console.log(data);
  };
  return <Section id="contact" className="bg-secondary/50">
      <div className="text-center section-title animate-fade-in">
        <span className="tag bg-primary/10 text-primary">Get In Touch</span>
        <h2 className="mt-4 mb-4">Contact Us</h2>
        <p className="section-subtitle mx-auto">
          Reach out to discuss your dream guitar or schedule a consultation with our expert team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="animate-fade-in">
          
        </div>
        
        <div className="animate-fade-in animation-delay-200">
          <form onSubmit={handleSubmit(onSubmit)} className="glass-panel p-8 rounded-lg">
            <h3 className="text-2xl font-medium mb-6">Send Us a Message</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })} className={errors.email ? 'border-destructive' : ''} />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input id="phone" type="tel" {...register('phone', {
              required: 'Phone number is required'
            })} className={errors.phone ? 'border-destructive' : ''} />
              {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>}
            </div>
            
            <div className="space-y-2 mb-6">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={6} {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters'
              }
            })} className={errors.message ? 'border-destructive' : ''} />
              {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
            </div>
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </Section>;
};
export default Contact;