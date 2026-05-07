type Technology = {
  imageSrc: string;
  tooltip: string;
}[];

type Project = {
  id: number;
  highlight: boolean;
  pastProject: boolean;
  slug: string;
  title: string;
  summary: string;
  date: string;
  images: string[];
  technologies: Technology;
  linkToBuild: string;
  linkToWebsite: string;
  points: string[];
};

type Achievement = {
  imageSrc: string;
  title: string;
  description: string;
  date: string;
  endDate: string;
  highlight: boolean;
};

type Skill = {
  imageSrc: string;
  tooltip: string;
  preferredStack: boolean;
};

type Experience = {
  imageSrc: string;
  company: string;
  title: string;
  dateStarted: string;
  dateEnded: string;
  technologies: string[];
  points: string[];
};

type ResumeData = {
  company: string;
  title: string;
  logo: StaticImageData;
  start: string;
  end: string;
}[];

interface Repo {
  id: string;
  name: string;
  url: string;
  description: string;
  owner: {
    login: string;
  };
}

interface StargazerCount {
  id: string;
  stargazerCount: number;
}

interface RepoResponseData {
  user: {
    pinnedItems: {
      nodes: Repo[];
    };
    starredRepositories: {
      nodes: Repo[];
    };
    repository: StargazerCount;
  };
}

type Headings = {
  title?: string;
  subtitle?: string;
  other?: string;
};

interface TimestampProps {
  date: Date;
  endDate?: Date;
  className?: string;
}

type Company = {
  endDate?: string;
  location: string;
  startDate: string;
  title: string;
  website: string;
  src: string;
  alt: string;
};

type Post = {
  id: number;
  created_at: string;
  body: string;
  username: string;
};

type Vote = {
  created_at: string;
  id: number;
  post_id: number;
  upvote: boolean;
  username: string;
};

type Comments = {
  created_at: string;
  id: number;
  post_id: number;
  text: string;
  username: string;
};
