export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  type: 'design' | 'branding' | 'prototype' | 'photography';
  embedUrl?: string;
  canvaUrl?: string;
  pdfUrl?: string;
  figmaUrl?: string;
}


export interface NavItem {
  label: string;
  path: string;
}