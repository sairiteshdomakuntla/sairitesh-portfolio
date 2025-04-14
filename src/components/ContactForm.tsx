import React, { useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize form with react-hook-form and zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
  });

  const onSubmit = async (data: FormValues) => {
    setStatus('sending');
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_p0vbvu6', // Your EmailJS service ID
        'template_fo5pu0m', // Your EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_name: 'Sai Ritesh',
        },
        'zC2cFmrfez-Hfi7u4' // Your EmailJS public key
      );

      // Reset form and show success message
      form.reset();
      setStatus('success');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm text-gray-400">Name</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-neon-blue/50 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm text-gray-400">Email</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type="email"
                    className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-neon-blue/50 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Subject field */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm text-gray-400">Subject</FormLabel>
              <FormControl>
                <input
                  {...field}
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-neon-blue/50 focus:outline-none transition-colors"
                  placeholder="What is this regarding?"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm text-gray-400">Message</FormLabel>
              <FormControl>
                <textarea
                  {...field}
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-neon-blue/50 focus:outline-none transition-colors"
                  placeholder="Your message here..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-6 py-3 bg-neon-blue text-black font-medium rounded-md flex items-center gap-2 hover:animate-pulse-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <>
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>

          {status === 'success' && (
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle size={18} />
              Message sent successfully!
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-400">
              <XCircle size={18} />
              {errorMessage}
            </div>
          )}
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
