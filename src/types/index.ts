export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  blueprintImg: string;
  photoImg: string;
  features: string[];
  specs: { label: string; value: string }[];
}

export interface MaterialItem {
  id: string;
  name: string;
  category: 'superficies' | 'maderas' | 'herrajes' | 'vidrios';
  colorHex?: string;
  description: string;
  highlights: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  year: string;
  details: string;
  materials: string[];
}

export interface QuoteCalculation {
  serviceId: string;
  projectType: string;
  finishTier: string;
  approxDimensions: number; // in meters
  estimatedMin: number;
  estimatedMax: number;
}
