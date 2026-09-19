// Single source of truth for the entire portfolio
export interface ProfileData {
  basics: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
    picture?: string;
    links: Array<{
      label: string;
      url: string;
      icon?: string;
    }>;
    heroTagline?: string;
    heroRoles?: string[];
    heroCredentials?: string;
  };
  skills: Array<{
    name: string;
    level: number;
  }>;
  experience: Array<{
    role: string;
    company: string;
    location?: string;
    start: string;
    end: string;
    bullets: string[];
  }>;
  education: Array<{
    institution: string;
    degree: string;
    field: string;
    start: string;
    end: string;
    location?: string;
    gpa?: string;
    achievements?: string[];
  }>;
  achievements: Array<{
    title: string;
    date: string;
    issuer?: string;
    description?: string;
  }>;
  extracurricular: Array<{
    organization: string;
    role: string;
    start: string;
    end: string;
    description: string;
  }>;
  contact: {
    email: string;
    phone: string;
    location: string;
    availability: string;
    message?: string;
    heading?: string;
    subheading?: string;
    quote?: string;
    quoteAuthor?: string;
  };
}

const profile: ProfileData = {
  basics: {
    name: "Anubhi Choudhary",
    title: "Marketing Communication Manager",
    email: "anubhi.choudhary.25i@gmail.com",
    phone: "+91-96699-71857",
    location: "Pune, India",
    summary: "I have always been fascinated by how brands earn trust before they earn revenue, and what started as curiosity gradually evolved into a deeper interest in how marketing shapes demand, influences decisions, and drives growth.Over time, I have worked on building brands from the ground up by developing identity systems and executing technology-led campaigns. Currently, I lead integrated marketing, client strategy, and brand positioning at MM Activ Sci-Tech Communications, where my focus is on turning market insights into strategies that create real impact and deliver measurable results.With a PGDM in Marketing with Business Analytics, I approach marketing as a balance of sharp thinking and strong execution, building strategies that strengthen brand equity, improve visibility, and contribute directly to business outcomes.",
    picture: "/anubhi.jpeg",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/anubhi-choudhary-0bb680188/" },
    ],
    heroTagline: "Curious • Creative • Driven",
    heroRoles: [
      "Marketing Communication Manager @MM Activ Sci-Tech Communications",
      "Marketing Strategist | Brand Communication | Digital Storyteller"
    ],
    heroCredentials: "PGDM'25 | Ex-Nestlé | Ex-STPL"
  },
  skills: [
    { name: "Brand Communication", level: 90 },
    { name: "Digital Marketing", level: 85 },
    { name: "Social Media Marketing", level: 85 },
    { name: "Content Creation", level: 90 },
    { name: "Storytelling", level: 85 },
    { name: "Content Writing", level: 88 },
    { name: "Power BI", level: 75 },
    { name: "Tableau", level: 75 },
    { name: "MS Excel", level: 80 },
    { name: "Data Visualization", level: 78 },
    { name: "Market Research", level: 80 },
    { name: "PowerPoint", level: 85 },
    { name: "Canva", level: 85 },
    { name: "Leadership", level: 88 },
    { name: "Problem-Solving", level: 85 },
    { name: "Strategic Planning", level: 87 },
    { name: "Team Collaboration", level: 90 },
    { name: "Project Management", level: 85 },
    { name: "Presentation", level: 88 },
  ],
  experience: [
    {
      role: "Marketing Communication Manager",
      company: "MM Activ Sci-Tech Communications Private Limited",
      location: "Pune, India",
      start: "Nov 2025",
      end: "Present",
      bullets: [
        "Managing client servicing and digital communication strategy for Reliance Animation Academy, including social media planning and brand positioning",
        "Led end-to-end website content development and brand messaging for Caneus",
        "Driving integrated marketing communications (IMC) and promotional campaigns for Prawaaas 5.0",
        "Overseeing content strategy for Exhibition Excellence Awards 2026 (EEA 2026)",
        "Managing key clients: Caneus mnt, Swiss Expo Logistics, Reliance Animation",
        "Coordinating major events including Prawaaas 5.0, EEA Summit 2026, 15th IEIA Open Seminar, Bengaluru India Nano 2026, BTS 2026, SuschemE 3.0"
      ]
    },
    {
      role: "Marketing & Brand Communication Intern",
      company: "STPL",
      location: "Surat, India",
      start: "May 2024",
      end: "Jul 2024",
      bullets: [
        "Achieved a 15% increase in social media engagement for the 'Additive Insights by STPL 3D' campaign",
        "Boosted attendance at the JCK event in Las Vegas through targeted social media and email marketing strategies",
        "Improved lead conversion rates by 25% by optimizing lead generation processes on India Mart",
        "Executed targeted social media campaigns for the new Magik Cut product launch",
        "Created 4 audio branding caller tunes and 4 email signatures to unify STPL's brand identity across all business verticals",
        "Managed AR/VR integration by shortlisting 10 VR developers and finalizing a partner to enhance expo marketing experiences"
      ]
    }
  ],
  education: [
    {
      institution: "Jaipuria Institute of Management",
      degree: "PGDM",
      field: "Marketing",
      start: "2023",
      end: "2025",
      location: "Indore, India",
      gpa: "83%",
      
    },
    {
      institution: "Chameli Devi Group of Institutions",
      degree: "B.Com",
      field: "Commerce (Hons)",
      start: "2019",
      end: "2022",
      location: "Indore, India",
      gpa: "79.2%"
    },
    {
      institution: "Vindhyachal Academy",
      degree: "Class XII",
      field: "CBSE",
      start: "2018",
      end: "2019",
      location: "Dewas, India",
      gpa: "72.4%"
    },
    {
      institution: "Vindhyachal Academy",
      degree: "Class X",
      field: "CBSE",
      start: "2016",
      end: "2017",
      location: "Dewas, India",
      gpa: "77.9%"
    }
  ],
  achievements: [
    {
      title: "Research Publication",
      date: "2024",
      issuer: "Bloomsbury Publishing",
      description: "Published a research chapter on AI in CRM, featured in Sustainable Business Practices book"
    },
    {
      title: "100Rs Venture Activity Winner",
      date: "2023",
      issuer: "Jaipuria Institute of Management",
      description: "Led a team of 9 to secure 1st place out of 18 teams in this entrepreneurial competition"
    },
    {
      title: "Business Orientation Project - 2nd Place",
      date: "2023",
      issuer: "Jaipuria Institute of Management",
      description: "Achieved 2nd place out of 180 students in the Business Orientation Project"
    },
    {
      title: "Published Articles",
      date: "2022-2024",
      description: "Published 10+ articles in the 'Letter to the Editor' section of esteemed newspapers including The Economic Times"
    }
  ],
  extracurricular: [
    {
      organization: "Jaipuria Institute of Management",
      role: "President - Entrepreneurship Committee",
      start: "2023",
      end: "2025",
      description: "Led a team of 18 members, driving strategic planning and execution of 15+ high-impact events, workshops, and entrepreneurial initiatives"
    },
    {
      organization: "Business Standard",
      role: "Campus Reporter",
      start: "2023",
      end: "2025",
      description: "Represented Jaipuria Institute of Management as Campus Reporter in collaboration with Business Standard"
    }
  ],
  contact: {
    email: "anubhi.choudhary.25i@gmail.com",
    phone: "+91-96699-71857",
    location: "Pune, India",
    availability: "Open to marketing leadership opportunities",
    message: "Passionate marketing professional with expertise in brand communication, digital marketing, and content strategy. Let's connect to create impactful brand stories together!",
    heading: "Let's Connect",
    subheading: "Let's Build Something Worth Talking About",
    quote: "Behind every strong brand is a story that doesn't try too hard, it just connects.",
    quoteAuthor: "Anubhi Choudhary"
  }
};

export default profile;
