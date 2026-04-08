export interface SubProgram {
  title: string;
  slug: string;
  category: string;
}

export interface ProgramCategory {
  title: string;
  icon: string;
  image: string;
  subs: SubProgram[];
}

export const generateSlug = (str: string) => str.toLowerCase().replace(/ & | /g, "-").replace(/[^a-z0-9-]/g, "");

// Raw data array updated exactly to client specifications with premium images
const rawData = [
  { title: "Business & Management", icon: "💼", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", subs: ["MBA Essentials", "Corporate Strategy & Leadership", "Business Ethics", "Organizational Behavior", "Entrepreneurship Fundamentals"] },
  { title: "Technology & Data Skills", icon: "💻", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", subs: ["Full-Stack Software Development", "Cybersecurity Protocols", "Cloud Architecture AWS/Azure", "Data Engineering", "AI & Machine Learning"] },
  { title: "Education & Training", icon: "🎓", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop", subs: ["Train the Trainer", "Digital & Distance Learning", "Special Education Needs", "Curriculum Development"] },
  { title: "Leadership & Professional Development", icon: "🚀", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop", subs: ["Executive Leadership", "Change Management", "Effective Communication", "Strategic Decision Making"] },
  { title: "Health & Safety Compliance", icon: "🏥", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop", subs: ["Occupational Health & Safety", "Fire Prevention Systems", "Emergency Response Tactics", "Risk Management & Compliance"] },
  { title: "Specialist Professional Skills", icon: "🎯", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop", subs: ["Project Management Professional", "Design Thinking", "Cross-Cultural Communication", "Financial Accounting Principles"] },
];

export const programData: ProgramCategory[] = rawData.map(cat => ({
  title: cat.title,
  icon: cat.icon,
  image: cat.image,
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
