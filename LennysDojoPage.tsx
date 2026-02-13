import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface LennysDojoPageProps {
    onBack: () => void;
}

const LennysDojoPage: React.FC<LennysDojoPageProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-white text-text-primary p-8 md:p-16">
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-12 group"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-bold uppercase tracking-widest text-xs">Back to Portfolio</span>
            </button>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Lenny's Dojo</h1>
                <p className="text-xl text-text-secondary leading-relaxed mb-12">
                    Master the PM Interview with Real-World Intelligence.
                </p>

                <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100 text-center">
                    <p className="text-lg text-slate-400 italic">
                        Detailed case study content coming soon...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LennysDojoPage;
