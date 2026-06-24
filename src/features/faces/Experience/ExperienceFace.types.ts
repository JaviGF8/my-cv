export interface CompanyData {
  end: string;
  name: string;
  place: string;
  role: string;
  start: string;
  technologies: string;
}

export interface ExperienceFaceProps {
  onExpandChange?: (isOpen: boolean) => void;
}
