import tipIcon from "../../assets/images/tip-icon.png";
import tipCalculatorPreviewImg from "../../assets/images/tipCalculatorPreviewImg.jpg";
import { Project } from "../../types/project";

export const tipCalculatorProject: Project = {
  id: "tip-calculator",
  icon: tipIcon,
  name: "Tip Calculator",
  completed: true,
  previewImg: tipCalculatorPreviewImg,
  tags: ["Frontend"],
  team: null,
  description: [
    {
      key: "Overview",
      value: `A level-2 challenge from Frontend Mentor to calculate
          tip amounts and total bills per person. It emphasizes
          React state management and TypeScript usage while
          maintaining a responsive design.`,
    },
    {
      key: "Features",
      value: [
        "Custom or predefined tip percentages",
        "Real-time calculation of tip and total cost per person",
        "Hover effects and interactive states for buttons/inputs",
        "Optimized for desktop, tablet, and mobile screens"
      ],
    },
    {
      key: "What I Learned",
      value: `Practiced typed state management in React, handling user 
          input carefully, and refined my skills in responsive UI using CSS Modules.`,
    },
  ],
  liveUrl: "https://tip-calculator-ivory-theta.vercel.app",
  repoUrl: "https://github.com/kskaman/tip-calculator",
  stack: [
    { key: "React", value: "UI Library" },
    { key: "TypeScript", value: "Programming Language" },
    { key: "CSS Modules", value: "Styling" },
    { key: "Vite", value: "Build Tool" },
    { key: "Vercel", value: "Deployment" }
  ]
}