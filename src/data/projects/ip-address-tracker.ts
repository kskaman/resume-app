import ipTrackerIcon from "../../assets/images/ip-address-tracker-logo.png";
import ipTrackerPreview from "../../assets/images/ipAddressTrackerPreview.jpg"
import { Project } from "../../types/project";

export const ipAddressTrackerProject: Project = {
  id: "ip-address-tracker",
  icon: ipTrackerIcon,
  name: "IP Address Tracker",
  completed: true,
  previewImg: ipTrackerPreview,
  tags: ["Frontend", "API"],
  team: null,
  description: [
    {
      key: "Overview",
      value: `A responsive IP Address Tracker built with React and TypeScript. This app allows users to search for any IP address or domain, fetching geolocation data from ipinfo.io and displaying it on an interactive map using React-Leaflet. It delivers a seamless experience across mobile, tablet, and desktop devices.`,
    },
    {
      key: "Features",
      value: [
        "Search for IP addresses and domain names with real-time results.",
        "Integration with ipinfo.io API for geolocation data.",
        "Interactive map display using React-Leaflet with dynamic zoom adjustments.",
        "Responsive design optimized for various screen sizes.",
        "Robust error handling that retains the last valid location on failed searches.",
      ],
    },
    {
      key: "What I Learned",
      value: [
        "Integrating third-party APIs with Axios.",
        "Building responsive layouts using Tailwind CSS.",
        "Implementing interactive maps with React-Leaflet and Leaflet.",
        "Managing asynchronous state and side effects in React.",
        "Enhancing user experience through thoughtful error handling.",
      ],
    },
  ],
  liveUrl: "https://ip-address-tracker-nu-weld.vercel.app/",
  repoUrl: "https://github.com/kskaman/ip-address-tracker",
  stack: [
    { key: "React", value: "UI Library" },
    { key: "TypeScript", value: "Programming Language" },
    { key: "Tailwind CSS", value: "Styling" },
    { key: "React-Leaflet", value: "Interactive Maps" },
    { key: "Axios", value: "HTTP Client" },
    { key: "ipinfo.io", value: "Geolocation API" },
  ],
};
