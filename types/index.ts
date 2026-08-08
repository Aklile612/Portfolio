export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    image: string;
    lqip?: string;
    alt: string;
  };
  shortBio: string;
  email: string;
  fullBio: string[];
  location: string;
  resumeURL: string;
  phone: string;
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: string;
  endDate: string | null;
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  repository: string;
  logo: string;
  coverImage: {
    image: string;
    alt: string | null;
    lqip?: string;
  };
  description: string[];
  technologies: string[];
};

export type UsageItem = {
  name: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
    "aria-hidden"?: boolean;
  }>;
  color: string;
};

export type UsageCategory = {
  title: string;
  items: UsageItem[];
};
