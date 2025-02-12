import markdownIcon from "../../assets/images/markdown-icon.png";
import inBrowserMarkdownEditorPreview from "../../assets/images/inBrowserMarkdownEditorPreview.jpg";

import { Project } from "../../types/project";

export const markdownEditorProject: Project = {
  id: "in-browser-markdown-editor",
  icon: markdownIcon,
  name: "In-Browser Markdown Editor",
  completed: false,
  previewImg: inBrowserMarkdownEditorPreview,
  tags: ["Frontend"],
  team: null,
  description: [
    {
      key: "Overview",
      value: `An in-browser Markdown editor built with React and TypeScript, 
        allowing users to create, edit, and manage Markdown documents efficiently. 
        The editor provides a clean interface with real-time preview functionality 
        powered by ReactMarkdown, ensuring an accurate representation of the 
        formatted output.`,
    },
    {
      key: "Features",
      value: [
        "Real-time Markdown preview with synchronized editing using ReactMarkdown",
          "File management: Create, rename, and delete Markdown files",
        "Automatic data persistence using local storage",
        "Default content is loaded into local storage for first-time users",
        "Dark mode and customizable themes for better readability",
        "Responsive and minimalistic UI optimized for desktop and mobile",
        "Error handling for file operations and user interactions"
      ],
    }, 
    {
      key: "Upcoming Features",
      value: [
        "Download Markdown files as `.md` or `.pdf`",
        "Upload existing `.md` files for editing",
      ],
    },
    {
     key: "What I Learned",
        value: `Deepened my understanding of state management in React, 
          optimized file handling using the context API, and improved 
          UI/UX with dynamic theming. Explored Markdown parsing with 
          ReactMarkdown to render formatted text seamlessly in real-time.`,
      },
    ],
    liveUrl: "https://in-browser-markdown-editor-beryl.vercel.app/",
    repoUrl: "https://github.com/kskaman/In-Browser-Markdown-Editor",
    stack: [
      { key: "React", value: "UI Library" },
      { key: "TypeScript", value: "Programming Language" },
      { key: "Tailwind CSS", value: "Styling" },
      { key: "ReactMarkdown", value: "Markdown Rendering" },
      { key: "Vite", value: "Build Tool" },
      { key: "Vercel", value: "Deployment" }
    ]
};
