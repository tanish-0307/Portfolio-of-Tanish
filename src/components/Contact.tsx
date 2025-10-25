import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out and I'll get back to you as soon as possible.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <ContactInfo />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
