export interface Project {
    id: string;
    icon: string;
    name: string;
    completed: boolean;
    previewImg: string;
    tags: string[];
  team: { person: string; role: string;  link?: string}[] | null;
  description: { key: string; value :  string | string[] }[];
    liveUrl: string | null;
    repoUrl: string | null;
    stack: { key: string; value: string }[] | null;
  }
  