
import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface DialogueProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const ToxicDialogue: React.FC<DialogueProps> = ({ isOpen, onClose, title, subtitle, children }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Dialogue Box */}
      <div className={`relative w-full max-w-4xl max-h-[90vh] flex flex-col border-2 transition-all duration-500 overflow-hidden ${
        isLight ? 'bg-white border-neutral-200' : 'bg-[#050505] border-[#39FF14] shadow-[0_0_80px_rgba(57,255,20,0.2)]'
      }`}>
        {/* Header Decor */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#39FF14] via-[#BF00FF] to-[#39FF14] bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]"></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className={`absolute top-6 right-6 p-2 transition-all hover:rotate-90 hover:scale-125 z-10 ${
            isLight ? 'text-black' : 'text-[#39FF14]'
          }`}
        >
          <X size={24} />
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-16 custom-scrollbar">
          <div className="space-y-8">
            <div className="space-y-2">
              {subtitle && (
                <span className="font-orbitron text-[10px] tracking-[0.6em] text-[#BF00FF] font-black uppercase">
                  {subtitle}
                </span>
              )}
              <h2 className={`font-orbitron text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none ${
                isLight ? 'text-black' : 'text-white'
              }`}>
                {title}
              </h2>
            </div>

            <div className="relative">
              {children}
            </div>
          </div>
        </div>

        {/* Footer Banner */}
        <div className={`py-3 px-8 flex items-center justify-between border-t ${
          isLight ? 'bg-neutral-50 border-neutral-200' : 'bg-black border-[#39FF14]/20'
        }`}>
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#39FF14]" />
            <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
              Protocol: Authorized_Access
            </span>
          </div>
          <span className="font-orbitron text-[9px] text-[#BF00FF] font-bold tracking-widest uppercase">
            Venom_Studio_v4
          </span>
        </div>
      </div>
    </div>
  );
};

export default ToxicDialogue;
