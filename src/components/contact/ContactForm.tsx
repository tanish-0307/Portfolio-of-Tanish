
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const mailtoLink = `mailto:tanish030507@gmail.com?subject=Portfolio Contact: ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Message prepared!",
        description: "Your default email client will open with the message. Thank you for reaching out!",
      });
      
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error preparing your message. Please try again or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            placeholder="Your name"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            placeholder="Your email address"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            placeholder="Your message"
            rows={5}
            required
          />
        </div>
        
        <button
          type="submit"
          className="inline-flex items-center px-5 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : (
            <>
              Send Message
              <ArrowRight size={16} className="ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
