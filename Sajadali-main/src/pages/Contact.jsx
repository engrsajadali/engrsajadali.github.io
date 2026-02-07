import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Get in Touch</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                 <p className="text-slate-600 mb-8 text-lg">
                    I am always open to discussing research collaborations, industrial consultancy, 
                    or opportunities in power systems and machine design.
                </p>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-royal-50 rounded-lg text-royal-600">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">Email</h3>
                            <p className="text-slate-600">Sajadali.meees24@iba-Suk.edu.pk</p>
                            <p className="text-slate-600">sajad.ali.engr@gmail.com</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-royal-50 rounded-lg text-royal-600">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">Research Lab</h3>
                            <p className="text-slate-600">
                                Department of Electrical Engineering,<br />
                                Sukkur IBA University,<br />
                                Sindh, Pakistan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-royal-500 outline-none transition-all" placeholder="Dr. John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-royal-500 outline-none transition-all" placeholder="john@university.edu" />
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                        <textarea rows="4" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-royal-500 outline-none transition-all" placeholder="Inquiring about your thesis work..." />
                    </div>
                    <button type="button" className="w-full py-3 bg-royal-600 text-white rounded-lg font-medium hover:bg-royal-700 transition-colors flex items-center justify-center gap-2">
                        Send Message <Send className="h-4 w-4" />
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact;
