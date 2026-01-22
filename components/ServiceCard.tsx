
import React from 'react';
import { Service } from '../types';
import * as LucideIcons from 'lucide-react';
import { useTheme } from './ThemeContext';

interface Props {
  service: Service;
}

const ServiceCard: React.FC<Props> = ({ service }) => {
  const IconComponent = (LucideIcons as any)[service.icon];
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const isGreen = service.color === 'green';
  const colorHex = isGreen ? '#39FF14' : '#BF00FF';

  return (
    <div className={`group relative bg-[var(--bg-secondary)] border border-[var(--border-color)] p-8 hover:border-transparent transition-all duration-500 overflow-hidden`}>
      {/* Hover Background Accent */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        style={{ backgroundColor: colorHex }}
      ></div>

      {/* Glow Corner */}
      <div 
        className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
        style={{ backgroundColor: colorHex }}
      ></div>

      <div className={`mb-6 inline-block p-3 border-2 border-[var(--border-color)] group-hover:border-[${colorHex}] transition-colors duration-300`}>
        {IconComponent && <IconComponent className={`w-8 h-8 transition-colors duration-300 ${isGreen ? 'group-hover:text-[#39FF14]' : 'group-hover:text-[#BF00FF]'}`} style={{ color: isLight ? 'var(--text-primary)' : 'inherit' }} />}
      </div>

      <h3 className="font-orbitron text-xl font-bold mb-4 tracking-wider group-hover:translate-x-2 transition-transform duration-300 text-[var(--text-primary)]">
        {service.title}
      </h3>
      
      <p className="text-[var(--text-secondary)] text-sm leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-300">
        {service.description}
      </p>

      {/* Decorative Line */}
      <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700`} style={{ backgroundColor: colorHex }}></div>
    </div>
  );
};

export default ServiceCard;
