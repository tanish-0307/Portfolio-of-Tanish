
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SocialLinks from './SocialLinks';

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="mr-4 p-3 rounded-full bg-primary/10 text-primary">
            <Mail size={20} />
          </div>
          <div>
            <h4 className="font-medium mb-1">Email</h4>
            <a href="mailto:Tanish030507@gmail.com" className="text-muted-foreground hover:text-primary">
              Tanish030507@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-4 p-3 rounded-full bg-primary/10 text-primary">
            <Phone size={20} />
          </div>
          <div>
            <h4 className="font-medium mb-1">Phone</h4>
            <a href="tel:+917418950307" className="text-muted-foreground hover:text-primary">
              (+91) 7418950307
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-4 p-3 rounded-full bg-primary/10 text-primary">
            <MapPin size={20} />
          </div>
          <div>
            <h4 className="font-medium mb-1">Location</h4>
            <p className="text-muted-foreground">
              Chennai, Tamil Nadu, India
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <h4 className="font-medium mb-4">Connect with me</h4>
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactInfo;
