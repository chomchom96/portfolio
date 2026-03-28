export interface Skill {
  name: string;
  claim: string;
  category: "frontend" | "state" | "styling" | "tools";
  relatedProject?: string; // project id to scroll to
}

export interface Project {
  id: string;
  title: string;
  period: string;
  award?: string;
  summary: string;
  bullets: string[];
  tags: string[];
  links?: {
    github?: string;
    demo?: string;
  };
  imageSrc?: string;
}

export interface StatCard {
  value: number;
  suffix?: string;
  label: string;
}
