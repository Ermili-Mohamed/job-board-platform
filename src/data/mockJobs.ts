export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  category: string;
  location: string;
  employmentType: "Full-time" | "Part-time" | "Contract" | "Remote";
  experienceLevel: "Entry" | "Mid-Level" | "Senior" | "Lead";
  salaryRange: string;
  postedDate: string;
  description: string;
  skills: string[];
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    companyLogo: "/tech-company-logo.jpg",
    category: "Engineering",
    location: "San Francisco, CA",
    employmentType: "Full-time",
    experienceLevel: "Senior",
    salaryRange: "$120k - $160k",
    postedDate: "2 days ago",
    description:
      "We are looking for a Senior Frontend Developer to join our growing team. You will be responsible for building user-friendly interfaces and implementing responsive designs.",
    skills: [
      "5+ years React experience",
      "TypeScript proficiency",
      "UI/UX design",
    ],
  },
  {
    id: "2",
    title: "Product Manager",
    company: "StartupXYZ",
    companyLogo: "/abstract-startup-logo.png",
    category: "Product",
    location: "New York, NY",
    employmentType: "Full-time",
    experienceLevel: "Mid-Level",
    salaryRange: "$100k - $130k",
    postedDate: "1 week ago",
    description:
      "Join our product team to drive the roadmap and strategy for our core platform. Work closely with engineering and design teams.",
    skills: [
      "3+ years product management",
      "Agile methodology",
      "Data analysis",
    ],
  },
  {
    id: "3",
    title: "UX Designer",
    company: "Design Studio",
    companyLogo: "/design-studio-logo.png",
    category: "Design",
    location: "Remote",
    employmentType: "Contract",
    experienceLevel: "Mid-Level",
    salaryRange: "$80k - $100k",
    postedDate: "3 days ago",
    description:
      "Create beautiful and intuitive user experiences for our clients. Work on diverse projects across different industries.",
    skills: ["Figma expertise", "User research experience", "Prototyping"],
  },
  {
    id: "4",
    title: "Junior Software Engineer",
    company: "GrowthCo",
    companyLogo: "/growth-company-logo.png",
    category: "Engineering",
    location: "Austin, TX",
    employmentType: "Full-time",
    experienceLevel: "Entry",
    salaryRange: "$70k - $90k",
    postedDate: "5 days ago",
    description:
      "Perfect opportunity for new graduates to start their career in software development. Work on exciting projects with mentorship.",
    skills: ["JavaScript/TypeScript", "React/Vue.js", "Git version control"],
  },
  {
    id: "5",
    title: "Marketing Manager",
    company: "BrandBuilder",
    companyLogo: "/marketing-agency-logo.png",
    category: "Marketing",
    location: "Chicago, IL",
    employmentType: "Full-time",
    experienceLevel: "Mid-Level",
    salaryRange: "$85k - $110k",
    postedDate: "1 day ago",
    description:
      "Lead and execute marketing initiatives to drive brand awareness and customer acquisition. Manage digital marketing campaigns.",
    skills: ["Digital marketing", "Content strategy", "Analytics"],
  },
  {
    id: "6",
    title: "Data Scientist",
    company: "DataDriven LLC",
    companyLogo: "/data-science-company-logo.jpg",
    category: "Data",
    location: "Seattle, WA",
    employmentType: "Full-time",
    experienceLevel: "Senior",
    salaryRange: "$130k - $170k",
    postedDate: "4 days ago",
    description:
      "Applying advanced statistical analysis and machine learning to solve complex business problems. Work with large datasets.",
    skills: ["Python/R", "Machine Learning", "SQL"],
  },
];

export const categories = [
  "All",
  "Engineering",
  "Product",
  "Design",
  "Marketing",
  "Data",
  "Sales",
  "Operations",
];
export const locations = [
  "All",
  "San Francisco, CA",
  "New York, NY",
  "Remote",
  "Austin, TX",
  "Chicago, IL",
  "Seattle, WA",
];
export const experienceLevels = ["All", "Entry", "Mid-Level", "Senior", "Lead"];
export const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Remote"];
export const sortOptions = [
  "Most Relevant",
  "Newest",
  "Oldest",
  "Salary: High to Low",
  "Salary: Low to High",
];
