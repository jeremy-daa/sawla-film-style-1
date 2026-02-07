'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RequestFixerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RequestFixerModal({ isOpen, onClose }: RequestFixerModalProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: '',
    dates: '',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the submission
    console.log('Form submitted:', formState);
    // simulated delay or success
    setTimeout(() => {
        onClose();
        setFormState({ name: '', email: '', projectType: '', dates: '', details: '' });
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-101 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-zinc-950 border border-white/10 w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div>
                        <h2 className="text-2xl font-serif text-white">Start Your Production</h2>
                        <p className="text-zinc-400 text-sm mt-1">Tell us about your shoot in Ethiopia.</p>
                    </div>
                    <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-zinc-300">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="Jane Doe"
                                    value={formState.name}
                                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="jane@production.com"
                                    value={formState.email}
                                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="type" className="text-sm font-medium text-zinc-300">Project Type</label>
                                <select 
                                    id="type"
                                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all [&>option]:bg-zinc-900"
                                    value={formState.projectType}
                                    onChange={(e) => setFormState({...formState, projectType: e.target.value})}
                                >
                                    <option value="" disabled>Select Type</option>
                                    <option value="documentary">Documentary</option>
                                    <option value="feature">Feature Film</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="tv-series">TV Series</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                             <div className="space-y-2">
                                <label htmlFor="dates" className="text-sm font-medium text-zinc-300">Estimated Dates</label>
                                <input 
                                    type="text" 
                                    id="dates"
                                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="e.g. Nov 2024"
                                    value={formState.dates}
                                    onChange={(e) => setFormState({...formState, dates: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="details" className="text-sm font-medium text-zinc-300">Project Details</label>
                            <textarea 
                                id="details"
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                placeholder="Tell us about the locations, logistics needed, or any specific requirements..."
                                value={formState.details}
                                onChange={(e) => setFormState({...formState, details: e.target.value})}
                            />
                        </div>

                        <div className="pt-4">
                            <Button type="submit" size="lg" className="w-full bg-white text-black hover:bg-zinc-200">
                                Send Request <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
