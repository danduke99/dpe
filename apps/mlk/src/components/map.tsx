import { Project, TeamMember } from "../types/page";
import { ActPro } from "../interfaces/page";

// Features data
export const features = [
  {
    title: "Dedicated Educators",
    description: "Our dedicated educators are committed to providing a high-quality education.",
    gradientId: "gradient",
    gradient: [
      { offset: "0%", color: "#888888" },
      { offset: "100%", color: "#6c3c8a" },
    ],
    path: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5", // truncated for brevity
    extraClasses: "",
  },
  {
    title: "Culturally Inclusive Learning",
    description: "We celebrate our island’s diversity through inclusive education and heritage.",
    gradientId: "gradientStroke",
    gradient: [
      { offset: "0%", color: "#15763f" },
      { offset: "100%", color: "#ebdd00" },
    ],
    path: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
    extraClasses: "",
  },
  {
    title: "Family Support",
    description: "We work with families to meet every child's needs.",
    gradientId: "gradient1",
    gradient: [
      { offset: "0%", color: "#06b6d4" },
      { offset: "100%", color: "#3b82f6" },
    ],
    path: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
    extraClasses: "",
  },
  {
    title: "Hands-On Learning",
    description: "Students engage in real-world projects and activities that connect learning to island life.",
    gradientId: "gradient2",
    gradient: [
      { offset: "0%", color: "#f59e0b" },
      { offset: "100%", color: "#ef4444" },
    ],
    path: "M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002",
    extraClasses: "rotate-45",
  },
];

export const galleryImages = [
  { src: "/grad.jpg", alt: "grad2025" },
  { src: "/mlkstu.jpg", alt: "student" },
  { src: "/logo.png", alt: "logo" },
  { src: "/grad.jpg", alt: "grad2025" },
  { src: "/mlkstu.jpg", alt: "student" },
  { src: "/logo.png", alt: "logo" },
  { src: "/grad.jpg", alt: "grad2025" },
  { src: "/mlkstu.jpg", alt: "student" },
  { src: "/logo.png", alt: "logo" },
  { src: "/grad.jpg", alt: "grad2025" },
  { src: "/mlkstu.jpg", alt: "student" },
  { src: "/logo.png", alt: "logo" },
];

export const projects: Project[] = [
  {
    imgSrc: "/aopel1.jpg",
    alt: "aopleSxm",
    icons: "🏠/🌎",
    durationLabel: "Duration:",
    duration: "17/09/2019 - 21/07/2024",
    description:
      "This is also a description of the project above. It will be pulled in from the database at some point but right now it si statically coded.",
  },
  {
    imgSrc: "/aopel1.jpg",
    alt: "aopleSxm",
    icons: "🏠/🌎",
    durationLabel: "Duration:",
    duration: "17/09/2025 - 21/07/2027",
    description:
      "This is also a description of the project above. It will be pulled in from the database at some point but right now it si statically coded.",
  },
  // Add more projects here
];

export const managementTeam: TeamMember[] = [
  {
    name: "Hubert Duffis",
    role: "Manager",
    imgSrc: "/duffis.jpg",
    alt: "principal",
  },
  {
    name: "Jennifer Oduber",
    role: "Adjunct Manager",
    imgSrc: "/oduber.jpg",
    alt: "viceprincipal",
  },
  {
    name: "Jane Doe",
    role: "Student Care",
    imgSrc: "/placeholder.jpeg",
    alt: "scc",
  },
  {
    name: "Amanda Prevot",
    role: "Admnin Assistant",
    imgSrc: "/amanda.jpg",
    alt: "secretary",
  },
];

export const fullStaff: TeamMember[] = [
  {
    name: "Hubert Duffis",
    role: "Manager",
    imgSrc: "/duffis.jpg",
    alt: "principal",
  },
  {
    name: "Jennifer Oduber",
    role: "Adjunct Manager",
    imgSrc: "/oduber.jpg",
    alt: "viceprincipal",
  },
  {
    name: "Jane Doe",
    role: "Student Care",
    imgSrc: "/placeholder.jpeg",
    alt: "scc",
  },
  {
    name: "Amanda Prevot",
    role: "Administrative Assistant",
    imgSrc: "/amanda.jpg",
    alt: "secretary",
  },
  {
    name: "Jane Duffis",
    role: "Group 3",
    imgSrc: "/placeholder.jpeg",
    alt: "principal",
  },
  {
    name: "Jane Doe",
    role: "Group 8",
    imgSrc: "/placeholder.jpeg",
    alt: "viceprincipal",
  },
  {
    name: "Jane Doe",
    role: "Group 1",
    imgSrc: "/placeholder.jpeg",
    alt: "scc",
  },
  {
    name: "John Doe",
    role: "Group 5",
    imgSrc: "/placeholder.jpeg",
    alt: "secretary",
  },
  {
    name: "John Doe",
    role: "Physical Education",
    imgSrc: "/placeholder.jpeg",
    alt: "secretary",
  },
];

// Data separated into Projects and Activities
export const activities: ActPro[] = [
  {
    id: 1,
    coverImg: "/coverH.jpg",
    title: "Visit to the Port of St. Maarten",
    duration: "14 February 2024",
    participants: ["Group 6"],
    price: 45,
    longDesc: "Students take a field trip to the Port of St. Maarten to boost their understanding of the island.",
    images: ["/placeholder.jpeg", "/placeholder.jpeg"],
    socialLink: "https://www.facebook.com/media/set/?set=a.869327291661287&type=3",
    scope: "Local"
  },
  {
    id: 2,
    coverImg: "/parliament.jpg" ,
    title: "Opening of Parliament - 2025",
    duration: "September 2025",
    participants: ["Amanda Kern", "Jane Doe", "Phillip John"],
    price: 67,
    longDesc: "Engaging activities to explore natural sciences and strengthen mathematics knowledge.",
    images: ["/placeholder.jpeg", "/placeholder.jpeg"],
    socialLink: "https://www.facebook.com/media/set/?set=a.1266270601966952&type=3",
    scope: "Local"
  },
  // Add more activities here
];

export const projectsPage: ActPro[] = [
  {
    id: 5,
    coverImg: "/aopelC.png",
    title: "AOPEL",
    duration: "Sat-Sun 2 PM - 5 PM",
    participants: ["Amanda Kern", "Jane Doe", "Phillip John"],
    price: 120,
    longDesc: "Students learn advanced web development concepts, building full-stack applications with React and Node.js.",
    images: ["/placeholder.jpeg", "/placeholder.jpeg"],
    socialLink: "https://www.facebook.com/YourSchoolAlbum3",
    scope: "International"
  },
  {
    id: 6,
    coverImg: "/parliament.jpg",
    title: "Digital Marketing Strategy",
    duration: "Mon-Wed 6 PM - 8 PM",
    participants: ["Amanda Kern", "Jane Doe", "Phillip John"],
    price: 95,
    longDesc: "Hands-on workshops on digital marketing, social media campaigns, and analytics.",
    images: ["/placeholder.jpeg", "/placeholder.jpeg"],
    socialLink: "https://www.facebook.com/YourSchoolAlbum4",
    scope: "International"
  },
  // Add more projects here
];