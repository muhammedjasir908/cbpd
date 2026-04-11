export interface SubProgram {
  title: string;
  slug: string;
  category: string;
}

export interface ProgramCategory {
  title: string;
  slug: string;
  icon: string;
  image: string;
  subs: SubProgram[];
}

export const generateSlug = (str: string) => str.toLowerCase().replace(/ & | /g, "-").replace(/[^a-z0-9-]/g, "");

// Raw data array updated exactly to client specifications with premium images
const rawData = [
  { title: "Business Programmes", slug: "business", icon: "💼", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", subs: ["MBA Essentials", "Corporate Strategy & Leadership", "Business Ethics", "Organizational Behavior", "Entrepreneurship Fundamentals"] },
  { title: "Technical Programmes", slug: "technology-data-skills", icon: "💻", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", subs: ["Full-Stack Software Development", "Cybersecurity Protocols", "Cloud Architecture AWS/Azure", "Data Engineering", "AI & Machine Learning"] },
  { title: "Beauty & Wellness Programmes", slug: "beauty-wellness", icon: "✨", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop", subs: ["Beauty Therapy", "Advanced Beauty Therapy & Aesthetics", "Makeup Artistry & Special Effects", "Hairdressing & Barbering Techniques", "Spa & Wellness Therapy"] },
  { title: "Property Programmes", slug: "property-real-estate", icon: "🏢", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop", subs: ["Property Management", "Real Estate Valuation", "Agency & Sales", "Investment & Finance", "Facilities Management"] },
  { title: "Transport Programmes", slug: "transport-logistics", icon: "🚛", image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=800&auto=format&fit=crop", subs: ["Transport Management", "Airline Management", "Aviation Management", "Logistics & Supply Chain", "Road Transport & Fleet"] },
  { title: "Tourism Programmes", slug: "travel-tourism", icon: "✈️", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop", subs: ["Tourism Management", "Travel Agency Operations", "Tour Operations & Guiding", "Destination Management", "Sustainable Tourism Practices"] },
  { title: "Telecommunications Programmes", slug: "telecommunications", icon: "📡", image: "https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=800&auto=format&fit=crop", subs: ["Telecommunications Fundamentals", "5G & Next-Generation Networks", "Fibre Optic Technology", "Wireless Communications", "Network Management"] },
];

export const programData: ProgramCategory[] = rawData.map(cat => ({
  title: cat.title,
  slug: cat.slug,
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
