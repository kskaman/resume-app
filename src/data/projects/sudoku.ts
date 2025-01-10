import sudokuIcon from "../../assets/images/sudoku-icon.png";
import sudokuPreviewImg from "../../assets/images/sudokuPreviewImg.png";
import { Project } from "../../types/project";

export const sudokuProject: Project = {
  id: "sudoku-web-game",
  icon: sudokuIcon,
  name: "Sudoku Web Game",
  completed: true,
  previewImg: sudokuPreviewImg,
  tags: ["Frontend"],
  team: null,
  description: [
    {
      key: "Overview",
      value: `A fully responsive Sudoku puzzle game that allows users to
        generate new puzzles at various difficulties or solve custom
        inputs. Each move is checked in real time for conflicts.`,
    },
    {
      key: "Features",
      value:[ "Generate a complete solution from a custom Sudoku board",
      "Create random puzzles at Easy, Medium, or Hard difficulty",
      "Real-time conflict detection for rows, columns, and 3x3 boxes",
      "Responsive design with modular, reusable modals and alerts"
      ],
    },
    {
      key: "What I Learned",
      value: `Deepened my understanding of React state management, especially
        for interactive board games, and improved handling of real-time
        validation logic.`,
    },
  ],
  liveUrl: "https://sudoku-react-app-alpha.vercel.app",
  repoUrl: "https://github.com/kskaman/sudoku-web-game",
  stack: [
    { key: "React", value: "UI Library" },
    { key: "CSS Modules", value: "Styling" },
    { key: "React Router", value: "Routing Library" },
    { key: "JavaScript", value: "Programming Language" },
    { key: "Vite", value: "Build Tool" },
    { key: "Vercel", value: "Deployment" }
  ]
}