
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Terminal, Shield } from 'lucide-react';
import { askToxicConsultant } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useTheme } from './ThemeContext';

const ToxicAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Neural link established. Ready for bio-sync. What project are we infecting today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    
    setIsTyping(true);
    const aiResponse = await askToxicConsultant(userMsg);
    setIsTyping(false);
    
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      {isOpen ? (
        <div className={`w-[90vw] md:w-96 h-[600px] border flex flex-col shadow-[0_0_50px_rgba(57,255,20,0.15)] overflow-hidden transition-colors duration-500 ${isLight ? 'bg-white border-neutral-200' : 'bg-[#050505] border-[#39FF14]'}`}>
          {/* Header */}
          <div className={`p-4 border-b flex justify-between items-center transition-colors duration-500 ${isLight ? 'bg-neutral-50 border-neutral-200' : 'bg-neutral-950 border-[#39FF14]/20'}`}>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Terminal size={18} className={isLight ? 'text-black' : 'text-[#39FF14]'} />
                <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping ${isLight ? 'bg-[#BF00FF]' : 'bg-[#BF00FF]'}`}></div>
              </div>
              <div className="flex flex-col">
                <span className={`font-orbitron font-black text-[10px] tracking-widest ${isLight ? 'text-black' : 'text-[#39FF14]'}`}>CONSULTANT_v4.2</span>
                <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest">Status: Predatory</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-[var(--text-primary)] transition-colors p-2">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className={`flex-1 overflow-y-auto p-6 space-y-6 font-mono text-[11px] bg-[size:100%_4px] transition-colors duration-500 ${isLight ? 'bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px)]' : 'bg-[linear-gradient(rgba(57,255,20,0.02)_1px,transparent_1px)]'}`}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 relative border transition-all duration-300 ${
                  m.role === 'user' 
                  ? 'bg-neutral-800 text-white border-[#BF00FF]' 
                  : (isLight ? 'bg-white text-black border-neutral-200 shadow-sm' : 'bg-neutral-900/80 text-[#39FF14] border-[#39FF14] backdrop-blur-sm')
                }`}>
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10"></div>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className={`p-4 italic animate-pulse border-l-2 transition-colors duration-500 ${isLight ? 'bg-neutral-100 text-black border-neutral-400' : 'bg-neutral-900/50 text-[#39FF14] border-[#39FF14]'}`}>
                  SYNTHESIZING_RESPONSE...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className={`p-4 border-t flex gap-3 transition-colors duration-500 ${isLight ? 'bg-white border-neutral-200' : 'bg-black border-[#39FF14]/20'}`}>
            <div className="relative flex-1">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="COMMAND INPUT..."
                className={`w-full p-3 outline-none transition-colors font-mono text-[11px] uppercase tracking-wider border ${isLight ? 'bg-neutral-50 border-neutral-200 text-black focus:border-black' : 'bg-neutral-950 border-neutral-800 text-[#39FF14] focus:border-[#39FF14]'}`}
              />
              <div className={`absolute bottom-0 right-0 w-4 h-4 border-b border-r pointer-events-none ${isLight ? 'border-neutral-300' : 'border-[#39FF14]/30'}`}></div>
            </div>
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className={`px-5 transition-all duration-300 disabled:opacity-50 flex items-center justify-center ${isLight ? 'bg-black text-white hover:bg-[#BF00FF]' : 'bg-[#39FF14] text-black hover:bg-[#BF00FF] hover:text-white'}`}
            >
              <Send size={16} />
            </button>
          </div>
          
          {/* Security Banner */}
          <div className="bg-[#BF00FF] px-4 py-1 flex items-center gap-2">
             <Shield size={10} className="text-white" />
             <span className="text-[8px] font-black text-white tracking-[0.3em] uppercase">ENCRYPTED_BIO_LINK_ACTIVE</span>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className={`relative w-16 h-16 border flex items-center justify-center transition-all duration-500 shadow-[0_0_30px_rgba(57,255,20,0.3)] overflow-hidden ${isLight ? 'bg-white border-neutral-200 text-black hover:bg-black hover:text-white' : 'bg-black border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#BF00FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Bot size={28} className="relative z-10" />
          <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 blur-sm animate-pulse ${isLight ? 'bg-black' : 'bg-[#39FF14]'}`}></div>
        </button>
      )}
    </div>
  );
};

export default ToxicAssistant;
