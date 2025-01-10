import financeIcon from "../../assets/images/finance-icon.png";
import financePreviewImg from "../../assets/images/financePreviewImg.jpg";
import { Project } from "../../types/project";

export const financeProject: Project = {
    id: "personal-finance-app",
    icon: financeIcon,
    name: "Personal Finance App",
    completed: false,
    previewImg: financePreviewImg,
    tags: ["Full Stack"],
    team: null,
    description: [
        { key: "Overview", value: "Coming soon...", },
        { key: "features", value: [], },
        { key: "What I Learned", value: "" },
    ],
    liveUrl: "",
    repoUrl: "",
    stack: null,
}