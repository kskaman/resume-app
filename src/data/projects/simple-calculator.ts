import calculatorIcon from "../../assets/images/calculator-icon.png";
import calculatorPreviewImg from "../../assets/images/calculatorPreviewImg.jpg";
import { Project } from "../../types/project";

export const simpleCalculatorProject: Project = {
  id: "simple-arithmetic-calculator",
  icon: calculatorIcon,
  name: "Simple Arithmetic Calculator",
  completed: true,
  previewImg: calculatorPreviewImg,
  tags: ["Frontend"],
  team: null,
  description: [
    {
      key: "Overview",
      value: `A personal practice project focusing on React with TypeScript.
           Users can perform addition, subtraction, multiplication, and
           division, and toggle between three distinct themes.`,
    },
    {
      key: "Features",
      value: [
        "Performs basic arithmetic operations",
        "Three toggleable themes for the interface",
        "Fully responsive layout for desktop and mobile",
        "Clear separation of logic with typed props and state"
      ],
    },
    {
      key: "What I Learned",
      value:
        `Strengthened React's state management with TypeScript
        and explored multiple theme toggles using context and CSS custom properties.`,
     
      },
  ],
  liveUrl: "https://simple-calculator-one-tawny.vercel.app",
  repoUrl: "https://github.com/kskaman/simple-calculator",
  stack: [
      { key: "React", value: "UI Library" },
      { key: "TypeScript", value: "Programming Language" },
      { key: "CSS Modules", value: "Styling" },
      { key: "Vite", value: "Build Tool" },
      { key: "Vercel", value: "Deployment" }
  ]
}