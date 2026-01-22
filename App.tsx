
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import SlimeBackground from './components/SlimeBackground';
import ServiceCard from './components/ServiceCard';
import ToxicAssistant from './components/ToxicAssistant';
import ToxicDialogue from './components/ToxicDialogue';
import { SERVICES } from './constants';
import { useTheme } from './components/ThemeContext';
import { 
  ChevronRight, 
  Activity, 
  Gamepad2, 
  BrainCircuit, 
  Box, 
  Share2, 
  Dna, 
  Zap, 
  Microscope, 
  ShieldAlert, 
  Cpu, 
  FlaskConical,
  Filter,
  Terminal,
  Code2,
  HardDrive,
  Rocket,
  Layers,
  ZapOff
} from 'lucide-react';

const GAMES_DATA = [
  { 
    title: "Neuro-Strike", 
    type: "Hyper-Reactive FPS", 
    stat: "98% Neural Link",
    description: "A high-octane FPS where your reaction time is physically synced with the game engine. Every frame is a decision made by your subconscious.",
    features: ["Sub-5ms Latency", "Neural Feedback Integration", "Adaptive AI Opponents"],
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Bio-Construct", 
    type: "Organic Sandbox", 
    stat: "Real-time Mutation",
    description: "Build living ecosystems that evolve based on genetic algorithms. Watch as your creations adapt, hunt, and restructure the environment.",
    features: ["Procedural Life Synthesis", "Genetic Logic Gates", "Dynamic Weather Mutation"],
    img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Prological Engine", 
    type: "Autonomous Logic", 
    stat: "Self-Evolving Code",
    description: "An experimental platform where logic is fluid. Solve complex architectural puzzles by injecting prological toxins into the core.",
    features: ["Recursive Problem Solving", "Non-Binary Logic Flow", "System-Wide Infection Simulation"],
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Void-Crawler", 
    type: "Hyper-Reactive FPS", 
    stat: "Latency Zero",
    description: "Traverse the digital abyss in this rhythmic combat experience. Use sound-based echolocation to track and eliminate hidden threats.",
    features: ["Sonic Visualization", "Hyper-Responsive Dash", "Spatial Audio Combat"],
    img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Synth-Oasis", 
    type: "Organic Sandbox", 
    stat: "Infinite Growth",
    description: "A zen-like simulation of digital flora and fauna. Cultivate neon forests that hum with the energy of the prological core.",
    features: ["Atmospheric Bloom Synthesis", "Neuro-Sync Soundscapes", "Evolutionary Cross-Breeding"],
    img: "https://images.unsplash.com/photo-1614728263952-84ea206f2c41?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Logic-Breach", 
    type: "Autonomous Logic", 
    stat: "Turing Overload",
    description: "A competitive hacking simulation where strategy is key. Bypass security layers by outsmarting self-correcting AI scripts.",
    features: ["Deep Packet Injection", "Behavioral Heuristics", "Dynamic Firewall Mutation"],
    img: "https://images.unsplash.com/photo-1558494949-ef010911182e?auto=format&fit=crop&q=80&w=800"
  }
];

type Page = 'HOME' | 'MANIFESTO' | 'LAB_SPECS';

const App: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  // State for Routing
  const [currentPage, setCurrentPage] = useState<Page>('HOME');
  
  // State for Dialogues
  const [activeDialog, setActiveDialog] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<typeof GAMES_DATA[0] | null>(null);
  
  // State for Gaming Filter
  const [activeFilter, setActiveFilter] = useState('ALL');

  const gameTypes = useMemo(() => {
    const types = Array.from(new Set(GAMES_DATA.map(game => game.type)));
    return ['ALL', ...types];
  }, []);

  const filteredGames = useMemo(() => {
    if (activeFilter === 'ALL') return GAMES_DATA;
    return GAMES_DATA.filter(game => game.type === activeFilter);
  }, [activeFilter]);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openGameDetails = (game: typeof GAMES_DATA[0]) => {
    setSelectedGame(game);
    setActiveDialog('GAME_DETAIL');
  };

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] opacity-20 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-[#39FF14] to-[#BF00FF] morph-shape blur-[80px] animate-pulse"></div>
        </div>

        <div className="z-10 max-w-5xl space-y-8 text-center">
          <div className={`inline-flex items-center gap-3 px-6 py-2 border border-[#39FF14]/40 bg-[var(--bg-secondary)]/50 backdrop-blur-md rounded-none skew-x-[-12deg]`}>
            <Activity size={14} className="text-[#39FF14] animate-pulse" />
            <span className="font-orbitron text-[11px] tracking-[0.4em] font-black text-[#39FF14]">BIO_CORE_ONLINE: PROLOGICAL_STABLE</span>
          </div>

          <h1 className="font-orbitron text-6xl md:text-8xl lg:text-[10rem] font-black text-[var(--text-primary)] tracking-tighter leading-[0.75] relative">
            VENOM<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-[#BF00FF] glow-green drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">LABS</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-4">
            <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-xl font-light leading-relaxed border-l-2 border-[#BF00FF] pl-8 text-left italic">
              "Architecting predatory gaming engines and prological reasoning systems. We inject lethal logic into the digital substrate."
            </p>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <button 
                onClick={() => setActiveDialog('INJECT')}
                className="group relative px-12 py-5 bg-[#39FF14] text-black font-orbitron font-black tracking-widest transition-all duration-300 hover:bg-[#BF00FF] hover:text-white shadow-[0_0_20px_rgba(57,255,20,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  INJECT PROJECT <ChevronRight size={18} />
                </span>
              </button>
              <button 
                onClick={() => navigateTo('LAB_SPECS')}
                className="px-12 py-5 border border-[var(--border-color)] text-[var(--text-primary)] font-orbitron font-bold tracking-widest hover:border-[#39FF14] transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Gamepad2 size={16} className="text-neutral-500 group-hover:text-[#39FF14]" /> ENTER_GAMING_LAB
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-40 px-6 relative bg-[var(--bg-primary)]/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-baseline mb-24 gap-12">
            <div className="relative">
              <span className="font-orbitron text-[#BF00FF] text-xs font-black tracking-[0.5em] mb-4 block uppercase">LEVEL_01_SYNTHESIS</span>
              <h2 className="font-orbitron text-5xl md:text-7xl font-black tracking-tighter text-[var(--text-primary)] uppercase leading-none">
                LETHAL<br /><span className="text-[#39FF14]">LOGIC</span>
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] max-w-md text-lg leading-relaxed border-r-2 border-[#39FF14] pr-12 text-right">
              Prological architectures and interactive game mutations. We build systems that don't just work—they hunt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-color)] border border-[var(--border-color)]">
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Mutation Pipeline Section (Summary) */}
      <section id="mutation-summary" className="py-40 px-6 relative overflow-hidden border-y border-[var(--border-color)] bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h3 className="font-orbitron text-4xl font-black text-[var(--text-primary)] uppercase">The_Prological_Pipeline</h3>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto font-mono text-sm leading-relaxed">
              Experience the transition from raw data infection to absolute digital dominance. Our synthesis process is biologically recursive.
            </p>
            <button 
              onClick={() => navigateTo('LAB_SPECS')}
              className="px-10 py-4 border border-[#39FF14] text-[#39FF14] font-orbitron font-black text-[10px] tracking-[0.3em] hover:bg-[#39FF14] hover:text-black transition-all"
            >
              VIEW_SYSTEM_SPECS
            </button>
          </div>
        </div>
      </section>

      {/* Gaming Lab Preview */}
      <section id="games" className="py-40 px-6 relative overflow-hidden bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center">
            <h3 className="font-orbitron text-4xl md:text-6xl font-black text-[var(--text-primary)] tracking-[0.1em] uppercase">
              PREDATORY<span className="text-[#39FF14]">_GAMES</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {gameTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`px-6 py-2 font-orbitron text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 border-b-2 ${
                    activeFilter === type ? 'text-[#39FF14] border-[#39FF14]' : 'text-neutral-500 border-transparent hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredGames.slice(0, 3).map((game, i) => (
              <div 
                key={game.title} 
                onClick={() => openGameDetails(game)}
                className="group relative aspect-[3/4] overflow-hidden border border-[var(--border-color)] bg-black cursor-pointer transform transition-transform hover:-translate-y-2"
              >
                <img src={game.img} alt={game.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-10 flex flex-col justify-end text-white">
                  <div className="flex justify-between items-center mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <span className="text-[10px] font-mono border border-[#39FF14] text-[#39FF14] px-2 py-0.5">SYNTH_ID_{i}</span>
                    <Box size={16} />
                  </div>
                  <h4 className="font-orbitron text-2xl font-black">{game.title}</h4>
                  <p className="font-mono text-[10px] text-[#39FF14] uppercase tracking-widest">{game.type}</p>
                </div>
                <div className="absolute inset-0 border-2 border-[#39FF14] opacity-0 group-hover:opacity-30 transition-opacity animate-[glow_2s_infinite]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 px-6 relative bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="w-full lg:w-1/2 relative">
             <div className="aspect-square bg-neutral-900 overflow-hidden relative border border-[var(--border-color)] shadow-[0_0_40px_rgba(191,0,255,0.1)]">
               <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-50" alt="Bio lab" />
             </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-12 text-center lg:text-left">
            <h2 className="font-orbitron text-5xl md:text-7xl font-black text-[var(--text-primary)] uppercase">Redefining<br /><span className="text-[#BF00FF]">Biology</span></h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed italic border-l-2 border-[#39FF14] pl-8">
              "We are not developers. We are bio-architects building the digital apex predators of tomorrow."
            </p>
            <button 
              onClick={() => navigateTo('MANIFESTO')}
              className="font-orbitron text-sm font-black tracking-[0.3em] text-[#39FF14] flex items-center gap-4 hover:gap-8 transition-all group mx-auto lg:mx-0"
            >
              READ THE MANIFESTO <span className="h-[1px] w-20 bg-[#39FF14] group-hover:w-40 transition-all"></span>
            </button>
          </div>
        </div>
      </section>
    </>
  );

  const renderManifesto = () => (
    <section className="pt-40 pb-60 px-6 relative min-h-screen">
      <div className="max-w-4xl mx-auto space-y-24">
        <div className="space-y-6">
          <button 
            onClick={() => navigateTo('HOME')}
            className="flex items-center gap-2 text-neutral-500 hover:text-[#39FF14] transition-colors font-orbitron text-[10px] tracking-widest font-black uppercase mb-12"
          >
            <ChevronRight size={14} className="rotate-180" /> Back_To_Network
          </button>
          <span className="font-orbitron text-[#BF00FF] text-xs tracking-[0.8em] block uppercase">SYNTHETIC_BORN</span>
          <h1 className="font-orbitron text-6xl md:text-9xl font-black text-[var(--text-primary)] tracking-tighter leading-none">
            THE<br /><span className="text-[#39FF14] italic">MANIFESTO.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-8">
            <div className="p-8 bg-[#39FF14]/5 border-l-4 border-[#39FF14]">
               <h4 className="font-orbitron text-xs font-black text-[#39FF14] tracking-widest uppercase mb-4">RULE_01</h4>
               <p className="text-white text-sm font-mono leading-relaxed">Adaptation is the only absolute. Stagnation is death.</p>
            </div>
            <div className="p-8 bg-[#BF00FF]/5 border-l-4 border-[#BF00FF]">
               <h4 className="font-orbitron text-xs font-black text-[#BF00FF] tracking-widest uppercase mb-4">RULE_02</h4>
               <p className="text-white text-sm font-mono leading-relaxed">Code must feel like a heartbeat. Interfaces must breath.</p>
            </div>
          </div>
          <div className="md:col-span-8 space-y-12 text-[var(--text-secondary)] text-xl leading-relaxed font-light">
             <p>
               In the modern network, users are overloaded with static noise. Traditional software is a relic of a dying binary age. At Venom IT, we recognize that digital interaction has evolved into a biological necessity.
             </p>
             <p>
               Our <span className="text-white font-bold">Prological Philosophy</span> dictates that every logic gate should mimic a neural synapse. We don't build "products"; we synthesize "organisms" that live, grow, and dominate within the digital substrate.
             </p>
             <div className="w-full h-[1px] bg-neutral-900 my-12"></div>
             <p className="font-orbitron text-[#39FF14] text-3xl font-black uppercase tracking-tighter">
               We build for the predators. We build for the architects. We build for the future.
             </p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderLabSpecs = () => (
    <section className="pt-40 pb-60 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-8">
           <div className="space-y-4">
             <button 
              onClick={() => navigateTo('HOME')}
              className="flex items-center gap-2 text-neutral-500 hover:text-[#39FF14] transition-colors font-orbitron text-[10px] tracking-widest font-black uppercase"
             >
              <ChevronRight size={14} className="rotate-180" /> Global_Link
             </button>
             <h1 className="font-orbitron text-6xl md:text-8xl font-black text-[var(--text-primary)] uppercase">Lab_<span className="text-[#39FF14]">Specs.</span></h1>
           </div>
           <div className="flex gap-4">
             <div className="px-6 py-2 bg-neutral-950 border border-neutral-800 flex items-center gap-3">
               <Activity size={12} className="text-[#39FF14]" />
               <span className="font-mono text-[10px] text-white">SYSTEM_LOAD: 2.4%</span>
             </div>
             <div className="px-6 py-2 bg-neutral-950 border border-neutral-800 flex items-center gap-3">
               <ShieldAlert size={12} className="text-[#BF00FF]" />
               <span className="font-mono text-[10px] text-white">LATENCY: ZERO</span>
             </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           <div className="lg:col-span-4 space-y-8">
              <div className="p-10 border border-[#39FF14]/30 bg-[#39FF14]/5 space-y-6">
                <Terminal size={32} className="text-[#39FF14]" />
                <h3 className="font-orbitron text-2xl font-black text-white uppercase">Neural_Processor</h3>
                <p className="text-neutral-500 text-sm font-mono">Custom silicon architecture optimized for predatory logic and real-time biological synthesis.</p>
                <div className="space-y-2">
                   {['8000 TH/s', 'Sub-ms Sync', 'Encrypted Bio-Bus'].map(it => (
                     <div key={it} className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
                       <span>{it}</span>
                       <div className="w-12 h-1 bg-neutral-800"></div>
                     </div>
                   ))}
                </div>
              </div>
              <div className="p-10 border border-[#BF00FF]/30 bg-[#BF00FF]/5 space-y-6">
                <Code2 size={32} className="text-[#BF00FF]" />
                <h3 className="font-orbitron text-2xl font-black text-white uppercase">Pro-Logic_API</h3>
                <p className="text-neutral-500 text-sm font-mono">Deep-link integration for games and autonomous systems. Adaptive weights ensure cross-platform infection.</p>
              </div>
           </div>
           <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {GAMES_DATA.map((game, i) => (
                  <div 
                    key={game.title} 
                    onClick={() => openGameDetails(game)}
                    className="group relative border border-neutral-900 p-8 hover:bg-[#39FF14]/5 transition-all cursor-pointer overflow-hidden"
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-16 h-1 bg-[#39FF14] group-hover:w-full transition-all duration-500"></div>
                      <span className="font-orbitron text-[9px] text-neutral-600">ID_{i+1000}</span>
                    </div>
                    <h4 className="font-orbitron text-2xl font-black text-white mb-2">{game.title}</h4>
                    <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-6">{game.type}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-[1px] bg-neutral-900"></div>
                      <button className="font-orbitron text-[9px] font-black text-[#39FF14] tracking-widest hover:text-white uppercase">ACCESS_DATA_SYNC</button>
                    </div>
                    <div className="absolute inset-0 border border-[#39FF14] opacity-0 group-hover:opacity-20 transition-opacity animate-pulse pointer-events-none"></div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="relative min-h-screen transition-colors duration-500">
      <Navbar onNavigateHome={() => navigateTo('HOME')} />
      <SlimeBackground />
      
      {/* Page Content */}
      <main className="animate-fade-in">
        {currentPage === 'HOME' && renderHome()}
        {currentPage === 'MANIFESTO' && renderManifesto()}
        {currentPage === 'LAB_SPECS' && renderLabSpecs()}
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-[var(--border-color)] px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 text-center lg:text-left">
          <div className="space-y-4">
             <div className="flex items-center gap-4 justify-center lg:justify-start">
               <div className="w-12 h-12 bg-[#39FF14] clip-path-polygon-[0%_0%,100%_0%,100%_75%,75%_100%,0%_100%] shadow-[0_0_10px_#39FF14]"></div>
               <span className="font-orbitron font-black text-2xl tracking-tighter text-[var(--text-primary)]">VENOM<span className="text-[#39FF14]">IT</span></span>
             </div>
             <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-[0.2em] max-w-xs">Engineered for Games & Prological Dominance.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            {['RESOURCES', 'LICENSE', 'GAMING_CORE', 'SECURITY'].map(l => (
              <a key={l} href="#" className="font-orbitron text-[10px] font-bold text-neutral-500 hover:text-[#39FF14] transition-colors tracking-widest">{l}</a>
            ))}
          </div>
          <div className="flex flex-col items-center lg:items-end gap-2 text-neutral-500 font-mono text-[10px] tracking-[0.2em]">
            <span className="text-[#BF00FF]">VERSION_4.2.0_BETA</span>
            <span>©2024_VENOM_IT</span>
          </div>
        </div>
      </footer>

      {/* Dialogues */}
      <ToxicDialogue 
        isOpen={activeDialog === 'INJECT'} 
        onClose={() => setActiveDialog(null)}
        title="Project_Injection"
        subtitle="Protocol: INIT_SEQUENCE"
      >
        <div className="space-y-10">
          <p className="text-[var(--text-secondary)] font-mono text-sm leading-relaxed">
            Provide the environmental parameters for your project. Our synthesis engine will evaluate the viability of a prological mutation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="font-orbitron text-[10px] font-black text-neutral-500 tracking-widest uppercase">Target_Entity</label>
              <input type="text" placeholder="Project_Name..." className="w-full bg-transparent border-b border-neutral-800 p-4 text-white outline-none focus:border-[#39FF14] transition-colors font-mono" />
            </div>
            <div className="space-y-3">
              <label className="font-orbitron text-[10px] font-black text-neutral-500 tracking-widest uppercase">Injection_Type</label>
              <select className="w-full bg-transparent border-b border-neutral-800 p-4 text-white outline-none focus:border-[#BF00FF] transition-colors font-mono appearance-none cursor-pointer">
                <option>Predatory_Game</option>
                <option>Logic_Synthesis</option>
                <option>Bio_Sync_UI</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-3">
              <label className="font-orbitron text-[10px] font-black text-neutral-500 tracking-widest uppercase">System_Parameters</label>
              <textarea placeholder="Describe the desired behavioral traits..." className="w-full bg-transparent border-b border-neutral-800 p-4 text-white outline-none focus:border-[#39FF14] transition-colors font-mono min-h-[120px]" />
            </div>
          </div>

          <button className="w-full py-6 bg-[#39FF14] text-black font-orbitron font-black tracking-[0.5em] transition-all hover:bg-[#BF00FF] hover:text-white shadow-[0_0_30px_rgba(57,255,20,0.3)] hover:shadow-[0_0_50px_rgba(191,0,255,0.4)]">
            AUTHORIZE_INJECTION
          </button>
        </div>
      </ToxicDialogue>

      {/* Game Details Modal */}
      <ToxicDialogue
        isOpen={activeDialog === 'GAME_DETAIL' && selectedGame !== null}
        onClose={() => { setActiveDialog(null); setSelectedGame(null); }}
        title={selectedGame?.title || ''}
        subtitle={`Type: ${selectedGame?.type || ''}`}
      >
        {selectedGame && (
          <div className="space-y-12 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="relative aspect-video overflow-hidden border border-[#39FF14]/30 shadow-[0_0_30px_rgba(57,255,20,0.2)]">
                  <img src={selectedGame.img} alt={selectedGame.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <Activity size={14} className="text-[#39FF14] animate-pulse" />
                    <span className="font-mono text-[10px] text-[#39FF14] uppercase tracking-widest">REAL_TIME_MUTATION_ACTIVE</span>
                  </div>
                </div>
                
                <div className="p-6 border-l-2 border-[#BF00FF] bg-[var(--bg-secondary)]/30 italic text-[var(--text-secondary)] leading-relaxed">
                  "{selectedGame.description}"
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="font-orbitron text-xs font-black text-[#39FF14] tracking-widest uppercase border-b border-neutral-800 pb-2">PREDATORY_FEATURES</h4>
                  <ul className="space-y-4">
                    {selectedGame.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4 group">
                        <div className="w-1.5 h-1.5 bg-[#BF00FF] group-hover:scale-150 transition-transform"></div>
                        <span className="font-mono text-sm text-[var(--text-primary)] group-hover:text-[#39FF14] transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                   <h4 className="font-orbitron text-xs font-black text-[#BF00FF] tracking-widest uppercase border-b border-neutral-800 pb-2">SYSTEM_REQUIREMENTS</h4>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="text-[8px] font-mono text-neutral-500 uppercase">Core</span>
                        <p className="text-[10px] font-black text-white">PROLOG_v4.2</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[8px] font-mono text-neutral-500 uppercase">Neural</span>
                        <p className="text-[10px] font-black text-white">MIN_80_PERCENT</p>
                      </div>
                   </div>
                </div>

                <button className="w-full py-4 bg-transparent border border-[#39FF14] text-[#39FF14] font-orbitron font-black text-[10px] tracking-[0.4em] hover:bg-[#39FF14] hover:text-black transition-all flex items-center justify-center gap-3 uppercase">
                  <Rocket size={14} /> INITIALIZE_SYNC_SEQUENCE
                </button>
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-900 flex justify-between items-center text-[8px] font-mono text-neutral-600 uppercase tracking-widest">
              <span>Host_Network: {selectedGame.stat}</span>
              <span>Encrypted_Session: AES-256-SYN</span>
            </div>
          </div>
        )}
      </ToxicDialogue>

      <ToxicAssistant />

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.2; box-shadow: 0 0 10px #39FF14; }
          50% { opacity: 0.5; box-shadow: 0 0 25px #39FF14; }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #39FF14; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #000; }
      `}</style>
    </div>
  );
};

export default App;
