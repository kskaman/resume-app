import markdownIcon from "../../assets/images/markdown-icon.png";
import inBrowserMarkdownEditorPreview from "../../assets/images/inBrowserMarkdownEditorPreview.jpg";

import { Project } from "../../types/project";

export const markdownEditorProject: Project = {
  id: "in-browser-markdown-editor",
  icon: markdownIcon,
  name: "In-Browser Markdown Editor",
  completed: true,
  previewImg: inBrowserMarkdownEditorPreview,
  tags: ["Frontend"],
  team: null,
  description: [
    {
      key: "Overview",
      value: `An in-browser Markdown editor built with React and TypeScript, enabling users to create, edit, and manage Markdown documents with ease. The editor features a live preview powered by ReactMarkdown for accurate formatted output and supports robust file operations, including uploading existing .md files and downloading documents as both Markdown and high-quality PDFs using pdfMake.`,
    },
    {
      key: "Features",
      value: [
        "Real-time Markdown preview with synchronized editing using ReactMarkdown",
        "Comprehensive file management: create, rename, and delete Markdown files",
        "Automatic data persistence via local storage with default content for new users",
        "Responsive, minimalistic UI optimized for desktop and mobile, with dark mode support",
        "Robust error handling for file operations and user interactions",
        "Download documents as raw Markdown (.md) or as high-quality PDFs",
        "Upload existing Markdown (.md) files for editing within the application",
      ],
    },
    {
      key: "What I Learned",
      value: [
        "Enhanced state management in React using the Context API for efficient file handling.",
        "Gained expertise in parsing and rendering Markdown in real-time with ReactMarkdown.",
        "Implemented robust file upload and download functionalities, including PDF conversion with pdfMake.",
        "Improved UI/UX by integrating dynamic theming and responsive design using Tailwind CSS.",
        "Deepened my understanding of local storage for persistent data management in web applications.",
      ],
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
    { key: "Vercel", value: "Deployment" },
  ],
};
