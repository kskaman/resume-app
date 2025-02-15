import workoutLoggerIcon from "../../assets/images/workout-logger.png";
import workoutLoggerPreviewImg from "../../assets/images/workoutLoggerPreviewImg.png";
import { Project } from "../../types/project";

export const workoutLoggerProject: Project = {
    id: "workout-logger",
    icon: workoutLoggerIcon,
    name: "Workout Logger",
    completed: true,
    previewImg: workoutLoggerPreviewImg,
    tags: ["Frontend"],
    description: [
      {
        key: "Overview",
        value: `Developed under mentorship of "Evan Watton" while enrolled in
        Get Building mentorship course, this Workout Logger tracks
        bodyweight, resistance band, and weighted exercises. Users
        can dynamically add or remove exercises and sets, all while
        having their data stored in local storage.`,
      },
      {
        key: "Features",
        value: [
          "Secure registration and login functionality",
          "Local storage for user workout data",
          "Dynamic forms for adding/removing exercises and sets",
          "Light/Dark theme toggle and ChartJS integration"
        ],
      },
      {
        key: "What I Learned",
        value: `Implemented form validation, local storage persistence,
        and dynamic UI updates using vanilla JavaScript, improving
        my fundamental frontend skills.`,
      },
    ],
    liveUrl: "https://kskaman.github.io/workout-logger/",
    repoUrl: "https://github.com/kskaman/workout-logger",
    stack: [
      { key: "HTML", value: "Markup Language" },
      { key: "CSS", value: "Styling" },
      { key: "JavaScript", value: "Programming Language" },
      { key: "Chart.js", value: "Data Visualization" },
      { key: "GitHub Pages", value: "Deployment" }
    ],
    team: [
      {
        person: "Evan Watton",
        role: "Mentor - Project Lead",
        link: "https://github.com/evnwttn",
      },
    ],
}