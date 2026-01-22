
import React from 'react';
import { useTheme } from './ThemeContext';

const SlimeBackground: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[var(--bg-primary)] transition-colors duration-500">
      {/* Bio-Organic Blobs */}
      <div className={`gooey absolute inset-0 ${isLight ? 'opacity-20' : 'opacity-30'}`}>
        <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px] bg-[#39FF14]/15 rounded-full animate-blob blur-3xl"></div>
        <div className="absolute top-[45%] right-[5%] w-[700px] h-[700px] bg-[#BF00FF]/10 rounded-full animate-blob blur-3xl animation-delay-2000"></div>
        <div className="absolute bottom-[0%] left-[15%] w-[500px] h-[500px] bg-[#39FF14]/10 rounded-full animate-blob blur-3xl animation-delay-4000"></div>
        <div className="absolute top-[20%] left-[50%] w-[400px] h-[400px] bg-[#BF00FF]/5 rounded-full animate-blob blur-3xl animation-delay-6000"></div>
      </div>

      {/* Futuristic Grid Layer */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,${isLight ? '#00000008' : '#39FF1408'}_1px,transparent_1px),linear-gradient(to_bottom,${isLight ? '#00000008' : '#39FF1408'}_1px,transparent_1px)] bg-[size:60px_60px]`}></div>
      
      {/* Noise / Grain Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")'}}></div>

      {/* Radial Vignette */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,${isLight ? 'rgba(248,248,248,0.7)' : 'rgba(5,5,5,0.9)'}_100%)]`}></div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          33% { transform: translate(40px, -70px) scale(1.1) rotate(10deg); }
          66% { transform: translate(-30px, 40px) scale(0.9) rotate(-10deg); }
          100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
        }
        .animate-blob {
          animation: blob 20s infinite alternate ease-in-out;
        }
        .animation-delay-2000 { animation-delay: 4s; }
        .animation-delay-4000 { animation-delay: 8s; }
        .animation-delay-6000 { animation-delay: 12s; }
      `}</style>
    </div>
  );
};

export default SlimeBackground;
