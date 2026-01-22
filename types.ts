
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: 'green' | 'purple';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
