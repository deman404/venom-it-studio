
import React from 'react';
import { NavItem, Service } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Bio-Sync', href: '#hero' },
  { label: 'Toxins', href: '#services' },
  { label: 'Gaming Lab', href: '#games' },
  { label: 'The Lab', href: '#about' },
  { label: 'Inject', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'games',
    title: 'Predatory Game Engines',
    description: 'Immersive, bio-organic gaming ecosystems. We build interactive nightmares that adapt to player synapses in real-time.',
    icon: 'Gamepad2',
    color: 'green',
  },
  {
    id: 'logic',
    title: 'Prological Synthesis',
    description: 'Advanced logical frameworks that mimic biological reasoning. High-potency decision engines for autonomous systems.',
    icon: 'BrainCircuit',
    color: 'purple',
  },
  {
    id: 'web',
    title: 'Neuro-Web Architecture',
    description: 'High-performance web ecosystems designed to infect the user memory and leave a permanent mark.',
    icon: 'Terminal',
    color: 'green',
  },
  {
    id: 'ai',
    title: 'Synthetic Intelligence',
    description: 'Self-evolving algorithms trained to hunt data and synthesize insights from toxic markets.',
    icon: 'Cpu',
    color: 'purple',
  },
];
