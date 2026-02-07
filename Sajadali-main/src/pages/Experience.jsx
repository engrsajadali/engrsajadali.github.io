import React from 'react';
import { Briefcase, Wrench } from 'lucide-react';

const Experience = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Experience & Skills</h1>

        <div className="grid lg:grid-cols-2 gap-12">
            {/* Timeline */}
            <div>
                 <div className="flex items-center gap-3 mb-6">
                    <Briefcase className="text-royal-600 h-6 w-6" />
                    <h2 className="text-2xl font-bold text-slate-800">Professional Journey</h2>
                </div>
                <div className="space-y-8 pl-4 border-l-2 border-slate-200 ml-2">
                    <div className="relative pl-8">
                        <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-royal-600 border-4 border-white shadow-sm" />
                        <h3 className="text-lg font-bold text-slate-900">Visiting Faculty</h3>
                        <p className="text-royal-600 font-medium text-sm">Sukkur IBA University | 2024 - Present</p>
                        <p className="text-slate-600 mt-2 text-sm">
                            Conducting lab sessions for Applied Physics. Guiding undergraduates in experimental setups and data analysis.
                        </p>
                    </div>
                     <div className="relative pl-8">
                        <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-slate-400 border-4 border-white shadow-sm" />
                        <h3 className="text-lg font-bold text-slate-900">Network Engineer</h3>
                        <p className="text-slate-500 font-medium text-sm">NETS International | 2023 - 2024</p>
                        <p className="text-slate-600 mt-2 text-sm">
                            Managed power infrastructure for telecom towers. Oversaw PV system maintenance and battery bank optimization.
                        </p>
                    </div>
                     <div className="relative pl-8">
                        <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-slate-300 border-4 border-white shadow-sm" />
                        <h3 className="text-lg font-bold text-slate-900">Engineering Intern</h3>
                        <p className="text-slate-500 font-medium text-sm">SEPCO | 2022</p>
                        <p className="text-slate-600 mt-2 text-sm">
                            Gained hands-on experience in grid station operations and distribution transformer maintenance.
                        </p>
                    </div>
                </div>
            </div>

            {/* Skills Bento */}
            <div>
                 <div className="flex items-center gap-3 mb-6">
                    <Wrench className="text-royal-600 h-6 w-6" />
                    <h2 className="text-2xl font-bold text-slate-800">Technical Arsenal</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <h4 className="font-bold text-slate-900 text-sm mb-2">Simulation (FEA)</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                            <li>ANSYS Maxwell</li>
                            <li>JMAG</li>
                            <li>Motor-CAD</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-royal-50 border border-royal-100 rounded-xl shadow-sm">
                        <h4 className="font-bold text-royal-800 text-sm mb-2">Power Systems</h4>
                        <ul className="text-sm text-royal-700 space-y-1">
                            <li>PSSE (Siemens)</li>
                            <li>ETAP</li>
                            <li>Grid Protection</li>
                        </ul>
                    </div>
                     <div className="col-span-2 p-4 bg-slate-800 text-white rounded-xl shadow-sm">
                        <h4 className="font-bold text-white text-sm mb-2">Automation & Control</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-slate-700 rounded text-xs">PLC Programming</span>
                            <span className="px-2 py-1 bg-slate-700 rounded text-xs">SCADA Basics</span>
                            <span className="px-2 py-1 bg-slate-700 rounded text-xs">MATLAB/Simulink</span>
                            <span className="px-2 py-1 bg-slate-700 rounded text-xs">Python</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Experience;
