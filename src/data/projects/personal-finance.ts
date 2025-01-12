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
        { 
            key: `Overview`, 
            value: `The application is a budget management tool that 
              allows users to handle budgets, saving pots, recurring 
              bills, and transactions in a user-friendly interface.
              It offers a clean and intuitive experience across devices 
              with responsive design.` 
        },
        { 
            key: `Features`, 
            value: [
                `Overview Dashboard: Displays total budgets, saving pots,
                and the latest three transactions for each category while
                showing progress toward saving goals.`,
                `Transactions Page: Lists all transactions with pagination 
                (10 per page) and includes search, sort, and filter options.`,
                `Budget & Saving Pots Management: Supports Create, Read, 
                Update, and Delete (CRUD) operations with real-time savings progress tracking.`,
                `Recurring Bills: Shows a list of recurring bills with their 
                current month's status and provides search and sort functionality.`,
                `Form Validation & Accessibility: Implements form validation, 
                keyboard navigation, and clear hover and focus states.`,
                `Responsive Design: Adapts layouts for mobile, tablet, 
                and desktop, maintaining usability across devices.`
            ]
        }
    ],
    
    liveUrl: null,
    repoUrl: null,
    stack: null,
}