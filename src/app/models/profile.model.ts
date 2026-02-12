export interface Profile {
  name: string;
  title: string;
  location: string;
  maritalStatus: string;
  age: number;
  email: string;
  phone: string;
  github: string;
  portfolio: string;
  bio: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  technologies: string[];
  description: string[];
}

export interface Education {
  institution: string;
  course: string;
  period: string;
  status: string;
}

export interface Course {
  institution: string;
  title: string;
  period: string;
  hours: string;
  topics: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Extracurricular {
  title: string;
  description: string;
  period?: string;
  achievement?: string;
  link?: string;
}
