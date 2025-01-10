export interface Project {
    id: string;
    icon: string;
    name: string;
    completed: boolean;
    previewImg: string;
    tags: string[];
    team: string[] | null;
  description: { key: string; value :  string | string[] }[];
    liveUrl: string;
    repoUrl: string;
    stack: { key: string; value: string }[] | null;
  }
  