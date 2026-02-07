import React from 'react';
import { BookOpen, FileText, Lightbulb } from 'lucide-react';

const Research = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Research Portfolio</h1>
      
      {/* Thesis */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-royal-600 h-6 w-6" />
            <h2 className="text-2xl font-bold text-slate-800">Master's Thesis</h2>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-royal-700 mb-3">Design of Dual Stator Brushless Hybrid Rotor Machine</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
                Investigating a novel machine topology that combines the advantages of PM machines and reluctance machines. 
                The design features a unique rotor structure with both PM and reluctance segments, interacting with dual stators 
                to enhance torque density and efficiency.
            </p>
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">Finite Element Analysis</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">Electromagnetic Design</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">ANSYS Maxwell</span>
            </div>
        </div>
      </section>

      {/* Publications */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
            <FileText className="text-royal-600 h-6 w-6" />
            <h2 className="text-2xl font-bold text-slate-800">Key Publications</h2>
        </div>
        <div className="grid gap-6">
            <div className="glass-card p-6 border-l-4 border-l-royal-600">
                <span className="text-xs font-bold text-royal-600 uppercase tracking-wider">Upcoming | IEEE ELMA 2025</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">Mitigating Fault Currents in Dual Stator Machines</h3>
                <p className="text-slate-600 text-sm">
                    Proposed a winding reconfiguration strategy to limit short-circuit currents without compromising nominal performance.
                </p>
            </div>
             <div className="glass-card p-6 border-l-4 border-l-slate-400">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Published | ICPEE 2023 (TBC)</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">Power Quality Enhancement in Grid-Tied PV Systems</h3>
                <p className="text-slate-600 text-sm">
                    Analysis of harmonic distortion in large-scale PV plants and mitigation using active filters.
                </p>
            </div>
        </div>
      </section>
      
       {/* Interdisciplinary */}
      <section>
        <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="text-royal-600 h-6 w-6" />
            <h2 className="text-2xl font-bold text-slate-800">Interdisciplinary Edge</h2>
        </div>
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900">Optimization of Biogas Production</h3>
            <p className="text-slate-600 mt-2 text-sm">
                B.E. Final Year Project. Designed an automated temperature control system for anaerobic digesters to maximize methane yield.
                Awarded at <strong>IEEE SCONEST 2022</strong>.
            </p>
        </div>
      </section>
    </div>
  );
};

export default Research;
