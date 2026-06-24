export type CompanyData = {
  end: string;
  name: string;
  place: string;
  role: string;
  start: string;
  technologies: string;
};

export type ExperienceFaceProps = {
  onExpandChange?: (isOpen: boolean) => void;
};
