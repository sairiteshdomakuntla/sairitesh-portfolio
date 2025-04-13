import React, { useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Sai Ritesh', // Your name
        },
        'YOUR_PUBLIC_KEY'
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (error) {
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
            Name
          </label>
          <input 
            type="text" 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-neon-blue/50 focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
            Email
          </label>
          <input 
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-neon-blue/50 focus:outline-none transition-colors"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
          Subject
        </label>
        <input 
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-neon-blue/50 focus:outline-none transition-colors"
          placeholder="What is this regarding?"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
          Message
        </label>
        <textarea 
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-neon-blue/50 focus:outline-none transition-colors"
          placeholder="Your message here..."
        ></textarea>
      </div>

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
  );
};

export default ContactForm; 