export interface SubProgram {
  title: string;
  slug: string;
  category: string;
}

export interface ProgramCategory {
  title: string;
  icon: string;
  subs: SubProgram[];
}

export const generateSlug = (str: string) => str.toLowerCase().replace(/ & | /g, "-").replace(/[^a-z0-9-]/g, "");

// Raw data array exactly matching prior definitions
const rawData = [
  { title: "Business", icon: "💼", subs: ["MBA Essentials", "Corporate Strategy & Leadership", "Business Ethics", "Organizational Behavior", "Entrepreneurship Fundamentals"] },
  { title: "Construction", icon: "🏗️", subs: ["Project Management for Construction", "Site Safety Fundamentals", "Structural Planning", "Sustainable Building Methods"] },
  { title: "Design", icon: "🎨", subs: ["UI/UX Masterclass", "Graphic & Layout Design", "Interior Space Planning", "Product Prototype Design", "Design Thinking"] },
  { title: "Education", icon: "🎓", subs: ["Train the Trainer", "Digital & Distance Learning", "Special Education Needs", "Curriculum Development"] },
  { title: "Energy", icon: "⚡", subs: ["Renewable Energy Sources", "Oil & Gas Management", "Solar Technology Fundamentals", "Energy Trading Policies"] },
  { title: "Engineering", icon: "⚙️", subs: ["Mechanical Systems", "Electrical Engineering Basics", "Civil Planning & Infrastructure", "Mechatronics"] },
  { title: "Finance", icon: "📈", subs: ["Accounting Principles", "Investment Strategies", "Risk Management & Compliance", "Corporate Finance"] },
  { title: "Fire & Safety", icon: "🔥", subs: ["Fire Prevention Systems", "Emergency Response Tactics", "Occupational Hazard Control", "Safety Regulation Auditing"] },
  { title: "Healthcare & Medical", icon: "🏥", subs: ["Nursing Administration", "Medical Billing & Coding", "Clinical Care Leadership", "Healthcare Operations"] },
  { title: "Hospitality", icon: "🏨", subs: ["Hotel & Resort Management", "Culinary Arts & Services", "Guest Experience Optimization", "Event Coordination"] },
  { title: "Human Resources", icon: "👥", subs: ["Talent Acquisition", "Payroll & Compliance Systems", "Employee Relations", "Performance Management"] },
  { title: "Information Technology", icon: "💻", subs: ["Full-Stack Software Development", "Cybersecurity Protocols", "Cloud Architecture AWS/Azure", "Data Engineering"] },
  { title: "International Studies", icon: "🌍", subs: ["Global Political Economics", "Cross-Cultural Communication", "International Trade Laws", "Diplomatic Relations"] },
  { title: "Marine", icon: "⚓", subs: ["Oceanography & Marine Biology", "Maritime Logistics & Law", "Naval Architecture basics", "Offshore Operations"] },
  { title: "Media", icon: "🎥", subs: ["Digital Journalism", "Broadcasting Techniques", "Video Production & Editing", "Mass Communication Strategies"] },
  { title: "Science", icon: "🔬", subs: ["Biotechnology Fundamentals", "Applied Chemistry", "Environmental Tech Solutions", "Laboratory Data Analysis"] },
  { title: "Security", icon: "🛡️", subs: ["Cyber Defense Strategies", "Physical Facility Security", "Intelligence & Threat Analysis", "CCTV & Surveillance Ops"] },
  { title: "Social Care", icon: "🤝", subs: ["Youth Counseling & Development", "Elderly Care Administration", "Community Outreach & Support", "Child Welfare Programs"] },
  { title: "Sport", icon: "⚽", subs: ["Sports Management & Economics", "Athletic Training Principles", "Coaching Methodologies", "Sport Psychology"] },
  { title: "Telecommunications", icon: "📡", subs: ["Network Topologies", "5G Infrastructure Planning", "Satellite Communications", "Fiber Optics Deployment"] },
  { title: "Tourism", icon: "✈️", subs: ["Travel Agency Operations", "Ecotourism Development", "Destination Management", "Cultural Heritage Travel"] },
  { title: "Transport", icon: "🚆", subs: ["Logistics & Fleet Ops", "Supply Chain Management", "Aviation Basics & Guidelines", "Railway Network Operations"] },
];

export const programData: ProgramCategory[] = rawData.map(cat => ({
  title: cat.title,
  icon: cat.icon,
  subs: cat.subs.map(sub => ({
    title: sub,
    slug: generateSlug(sub),
    category: cat.title
  }))
}));

// Helper to find a specific program strictly by slug
export function getSubProgramBySlug(slug: string): SubProgram | undefined {
  for (const cat of programData) {
    const found = cat.subs.find(s => s.slug === slug);
    if (found) return found;
  }
  return undefined;
}

// Generate dynamic detailed content based on category and title (Mocking our missing CMS)
export function getProgramContent(program: SubProgram) {
  return {
    overview: `Our rigorous ${program.title} curriculum provides a definitive path to commanding ${program.category.toLowerCase()} principles in the modern industry landscape. You will gain profound insights designed and validated by senior experts.`,
    curriculum: [
      "Foundational Principles & Core Concepts",
      "Advanced Strategies & Applied Methodologies",
      "Industry Case Studies & Scenario Planning",
      "Final Practicum Project & Assessment",
    ],
    jobMarket: {
      salaryRange: "$65,000 - $130,000+",
      growthRate: "+14% (Faster than average)",
      topEmployers: ["Fortune 500 Companies", "Global Agencies", "Leading Startups"],
      description: `The demand for specialized expertise in ${program.title} is reaching an all-time high as the ${program.category} sector rapidly transforms. Securing certification in this sub-discipline marks a competitive edge that talent recruiters actively prioritize.`
    }
  };
}
