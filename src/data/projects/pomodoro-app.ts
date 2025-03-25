import pomodoroIcon from "../../assets/images/pomodoroIcon.svg";
import pomodoroPreview from "../../assets/images/pomodoroPreview.png";

import { Project } from "../../types/project";

export const pomodoroProject: Project = {
  id: "pomodoro-app",
  icon: pomodoroIcon,
  name: "Pomodoro App",
  completed: true,
  previewImg: pomodoroPreview,
  tags: ["Frontend", "Productivity"],
  team: null,
  description: [
    {
      key: "Overview",
      value: `A sleek, responsive Pomodoro timer built with React and TypeScript that helps users manage their work sessions using the Pomodoro Technique. The app allows customization of session lengths, alarm sound selection, and features a dynamic progress ring that visually tracks your progress in real time.`,
    },
    {
      key: "Features",
      value: [
        "Customizable sessions for Pomodoro, short breaks, and long breaks",
        "Responsive progress ring with dynamic SVG calculations",
        "Multiple selectable alarm sounds with looping notifications",
        "Intuitive start, pause, and reset controls",
        "Dynamic theming with customizable fonts and colors",
        "Optimized for both desktop and mobile devices",
      ],
    },
    {
      key: "What I Learned",
      value: [
        "Enhanced React state management using Context API",
        "Built dynamic SVG components for responsive design",
        "Implemented audio playback and control for alarms",
        "Integrated custom theming and responsive UI using Tailwind CSS",
        "Optimized the user experience across various screen sizes",
      ],
    },
  ],
  liveUrl: "https://pomodoro-app-rsvj-kskaman-gmailcoms-projects.vercel.app/",
  repoUrl: "https://github.com/kskaman/pomodoro-app",
  stack: [
    { key: "React", value: "UI Library" },
    { key: "TypeScript", value: "Programming Language" },
    { key: "Tailwind CSS", value: "Styling" },
    { key: "Vite", value: "Build Tool" },
    { key: "Vercel", value: "Deployment" },
  ],
};
