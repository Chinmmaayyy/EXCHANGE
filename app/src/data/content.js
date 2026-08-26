export const WHATSAPP_NUMBER = "919892865594";
export const PHONE_DISPLAY = "+91 98928 65594";
export const GPAY_DISPLAY = "+91 98928 65594";

export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Pricing: ₹1,200/hour is the coach's confirmed rate and is the ONLY figure shown.
// Small-group pricing has not been supplied, so it is listed as "on request"
// rather than inventing an amount the coach has not agreed to.
export const pricingPlans = [
  {
    name: "Home Coaching",
    icon: "home",
    price: "₹1,200",
    unit: "/ hour",
    desc: "The coach travels to your home, anywhere in Mumbai.",
    features: [
      "1-to-1 personal attention",
      "At your own home, no travel",
      "Flexible weekday or weekend slots",
      "All levels — beginner to tournament",
    ],
    featured: true,
    waText: "Hi, I'd like to book home chess coaching (₹1,200/hour).",
    cta: "Book Home Coaching",
  },
  {
    name: "Online Coaching",
    icon: "monitor",
    price: "₹1,200",
    unit: "/ hour",
    desc: "Live 1-to-1 online sessions, from anywhere.",
    features: [
      "Live one-to-one instruction",
      "Game analysis and review",
      "Focused tactical training",
      "Flexible scheduling",
    ],
    featured: false,
    waText: "Hi, I'd like to book online chess coaching (₹1,200/hour).",
    cta: "Book Online Coaching",
  },
  {
    name: "Small Group",
    icon: "users",
    price: "On request",
    unit: "2–3 students",
    desc: "Siblings, classmates or neighbours learning together.",
    features: [
      "Small groups of 2–3 students",
      "Same structured curriculum",
      "Individual correction retained",
      "Available at home or online",
    ],
    featured: false,
    waText: "Hi, I'd like to know the rate for small group chess coaching (2-3 students).",
    cta: "Ask for Group Rate",
  },
];

export const keyStats = [
  { num: "25+", label: "Years of dedicated chess teaching experience", sub: "Schools · Home · Online" },
  { num: "1,500+", label: "Students taught over 25+ years of coaching", sub: "Schools · Home · Online" },
];

// Verified facts only — used to populate the "Know Your Coach" credentials panel.
export const coachCredentials = [
  { label: "FIDE ID", value: "46637966" },
  { label: "Standard Rating", value: "1603" },
  { label: "Federation", value: "India" },
  { label: "Birth Year", value: "1967" },
  { label: "Teaching Experience", value: "25+ years" },
  { label: "Students Taught", value: "1,500+" },
];

export const schoolsTaught = [
  "Sharda Mandir School, Gamdevi",
  "Arya Vidya Mandir School, Bandra Kurla Complex",
  "Euro School, Airoli",
  "Universal School, Tardeo",
];

export const programs = [
  {
    slug: "chess-fundamentals",
    tag: "Programme A",
    title: "Chess Fundamentals",
    desc: "For absolute beginners — learning the rules, board understanding, piece movement, basic tactics and checkmate patterns.",
    level: "Best for: New learners & young beginners",
    icon: "board",
    details: [
      "How each piece moves and captures, and core rules like castling, en passant and promotion",
      "Reading and understanding the chessboard — ranks, files, diagonals and square colour",
      "Basic tactical ideas: forks, pins and simple combinations",
      "Common one- and two-move checkmate patterns",
      "Good habits from the very first lesson: safe piece development and board awareness",
    ],
  },
  {
    slug: "intermediate-chess-development",
    tag: "Programme B",
    title: "Intermediate Chess Development",
    desc: "Tactics, strategy and calculation, along with openings, middlegame understanding and endgame technique.",
    level: "Best for: Students building beyond the basics",
    icon: "trending",
    details: [
      "Opening principles — sound development, king safety and central control",
      "Deeper tactical training: skewers, discovered attacks and combinations",
      "Middlegame planning and evaluating a position beyond the next move",
      "Basic and practical endgame technique",
      "Calculation exercises to build the habit of thinking a few moves ahead",
    ],
  },
  {
    slug: "advanced-tournament-training",
    tag: "Programme C",
    title: "Advanced & Tournament Training",
    desc: "Advanced calculation, strategic planning, tournament preparation, game analysis and practical play.",
    level: "Best for: Serious & tournament-bound players",
    icon: "award",
    details: [
      "Deeper strategic planning and long-term positional understanding",
      "Advanced calculation and candidate-move evaluation",
      "Practical tournament preparation — time management and match temperament",
      "Post-game analysis to identify and correct recurring mistakes",
      "Structured practice games under realistic conditions",
    ],
  },
  {
    slug: "personal-1-to-1-coaching",
    tag: "Programme D",
    title: "Personal 1-to-1 Coaching",
    desc: "Fully customized coaching based on the student's current level, learning goals and pace of progress.",
    level: "Best for: Focused, individual attention",
    icon: "user",
    details: [
      "A coaching plan built around the student's current level, not a fixed batch syllabus",
      "Full attention for the entire session, with pacing adjusted in real time",
      "Available at home, anywhere in Mumbai, or online",
      "Suitable for any level — from a first lesson to tournament preparation",
    ],
  },
  {
    slug: "small-group-coaching",
    tag: "Programme E",
    title: "Small Group Coaching",
    desc: "Guided coaching for small groups of 2–3 students, combining focused attention with peer learning.",
    level: "Best for: Siblings & friends learning together",
    icon: "users",
    details: [
      "Groups of 2–3 students, kept small enough for individual correction",
      "Well suited to siblings, classmates or neighbours learning together",
      "The same structured curriculum as 1-to-1 coaching, adapted for a small group",
      "Available at home or online",
    ],
  },
];

export const whyUs = [
  { icon: "clock", title: "25+ Years of Teaching", desc: "Decades of hands-on chess teaching experience — 1,500+ students taught, of all ages." },
  { icon: "award", title: "FIDE-Rated Coach", desc: "FIDE ID 46637966 with a Standard rating of 1603." },
  { icon: "user", title: "Personalized 1-to-1 Coaching", desc: "Coaching tailored to each student, not a generic fixed curriculum." },
  { icon: "home", title: "Home Coaching Across Mumbai", desc: "The coach travels to your home, anywhere in Mumbai." },
  { icon: "monitor", title: "Online Coaching Available", desc: "Live 1-to-1 online sessions for students learning from home." },
  { icon: "users", title: "Small Group Coaching", desc: "Coaching available for small groups of 2–3 students." },
  { icon: "graduation", title: "School Teaching Experience", desc: "Taught at Sharda Mandir School, Arya Vidya Mandir School, Euro School and Universal School." },
  { icon: "trending", title: "Training Tailored to Level", desc: "From first moves to tournament preparation, at the student's pace." },
];

export const achievements = [
  { icon: "award", title: "3rd Prize — Entrants Chess Tournament", desc: "Awarded in 2008, presented by Suresh Kadam Sir." },
  { icon: "award", title: "4th Prize — Anand Chess Festival 2025", desc: "Awarded 13 April 2025 by Dahisar Sports Foundation & Chanakya Chess Academy, presented by Nitin Warde Sir." },
  { icon: "star", title: "Teacher Award — Pravinya Chess Academy", desc: "Awarded 23 June 2024, at Dr. Babasaheb Ambedkar Bhavan, Dadar (East), Mumbai." },
  { icon: "award", title: "Team Captain, B.H. Somani College", desc: "Chess team captain, 1987–88." },
  ...schoolsTaught.map((school) => ({ icon: "graduation", title: school, desc: "Chess teaching experience." })),
];

// Gallery is organized into grouped sections (not filter buttons) — each group
// renders as its own labelled block on the /gallery page.
export const galleryGroups = [
  {
    key: "coaching",
    title: "Coaching Moments",
    desc: "Home coaching sessions and lessons with students across Mumbai.",
    items: [
      {
        caption: "Amar Ravindra More coaching two students at a home chess session in Mumbai.",
        image: "/assets/home-coaching.jpg",
        label: "Home Coaching Session",
        isPhoto: true,
      },
      {
        caption: "Teaching chess at Euro School, Airoli.",
        image: "/gallery/coaching/coaching-02.jpg",
        label: "Euro School, Airoli",
        isPhoto: true,
      },
      {
        caption: "A chess class at Euro School, Airoli.",
        image: "/gallery/coaching/coaching-03.jpg",
        label: "Euro School, Airoli",
        isPhoto: true,
      },
      {
        caption: "Giving student Nirali Kothari a small treat during a session at Universal School, Tardeo.",
        image: "/gallery/coaching/coaching-04.jpg",
        label: "Universal School, Tardeo",
        isPhoto: true,
      },
    ],
  },
  {
    key: "equipments",
    title: "Chess Sets & Equipment",
    desc: "The boards, pieces and coaching materials used in sessions.",
    items: [
      {
        caption: "An old antique chess board.",
        image: "/gallery/equipments/equipments-01.jpg",
        label: "Antique Board",
        isPhoto: true,
      },
      {
        caption: "A demonstration board used for teaching.",
        image: "/gallery/equipments/equipments-02.jpg",
        label: "Demonstration Board",
        isPhoto: true,
      },
      {
        caption: "Magnetic demonstration chessmen used alongside the demonstration board.",
        image: "/gallery/equipments/equipments-03.jpg",
        label: "Demonstration Chessmen",
        isPhoto: true,
      },
    ],
  },
  {
    key: "history",
    title: "From the Archives",
    desc: "Photographs from earlier years of Amar Ravindra More's chess journey.",
    items: [
      {
        caption: "Amar More (Captain), B.H. Somani College chess team, 1987–88.",
        image: "/gallery/history/history-01.jpg",
        label: "B.H. Somani College, 1987–88",
        isPhoto: true,
      },
      {
        caption: "An older photograph, taken by Anaisha Badani, Prabhadevi.",
        image: "/gallery/history/history-02.jpg",
        label: "From the Archives",
        isPhoto: true,
      },
      {
        caption: "An older photograph from the mobile gallery.",
        image: "/gallery/history/history-03.jpg",
        label: "From the Archives",
        isPhoto: true,
      },
    ],
  },
];

// Achievement-specific photos live on the dedicated /achievements page.
export const achievementPhotos = [
  {
    caption: "Receiving 4th Prize at the Anand Chess Festival 2025, organized by Dahisar Sports Foundation & Chanakya Chess Academy, 13 April 2025.",
    image: "/gallery/achievements/achievements-01.jpg",
    label: "4th Prize, 2025",
    isPhoto: true,
  },
  {
    caption: "With the 4th Prize trophy, Anand Chess Festival 2025, Dahisar Sports Foundation.",
    image: "/gallery/achievements/achievements-02.jpg",
    label: "4th Prize, 2025",
    isPhoto: true,
  },
  {
    caption: "Receiving 3rd Prize in the Entrants Chess Tournament, 2008, from Suresh Kadam Sir.",
    image: "/gallery/achievements/achievements-03.jpg",
    label: "3rd Prize, 2008",
    isPhoto: true,
  },
  {
    caption: "Teacher Award from Pravinya Chess Academy, 23 June 2024, Dr. Babasaheb Ambedkar Bhavan, Dadar (East), Mumbai.",
    image: "/gallery/achievements/achievements-04.jpg",
    label: "Teacher Award, 2024",
    isPhoto: true,
  },
];

export const faqs = [
  { q: "Who can learn chess?", a: "Chess coaching at Exchange Chess Academy is open to children and adults of all skill levels, from complete beginners to intermediate and advanced players." },
  { q: "Do you provide home chess coaching?", a: "Yes. Amar Ravindra More travels to your home for 1-to-1 chess coaching sessions across Mumbai." },
  { q: "Which areas of Mumbai are covered?", a: "Home coaching is available across Mumbai. Share your location on WhatsApp to confirm availability for your specific area." },
  { q: "Is online coaching available?", a: "Yes, 1-to-1 online chess coaching is available for students who prefer to learn from home." },
  { q: "Is coaching one-to-one?", a: "Coaching is offered as personal 1-to-1 sessions, as well as small groups of 2–3 students on request." },
  { q: "Do you teach beginners?", a: "Yes. The Chess Fundamentals program is designed specifically for beginners learning the rules, board understanding and basic tactics." },
  { q: "Do you provide tournament preparation?", a: "Yes, advanced students preparing for tournaments can take up the Advanced & Tournament Training program, which covers calculation, strategy and game analysis." },
  { q: "How much does a session cost?", a: "Coaching is priced at ₹1,200 per hour. Plans can be tailored to the student's level, goals and schedule." },
  { q: "How can I contact the coach?", a: "You can call or message Amar Ravindra More directly on WhatsApp at +91 98928 65594, or use the enquiry form below." },
];

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export const mobileNavLinks = [
  { href: "/about", label: "About the Coach" },
  { href: "/programs", label: "Coaching Programs" },
  { href: "/#home-coaching", label: "Home Coaching" },
  { href: "/#online-coaching", label: "Online Coaching" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#why-us", label: "Why Choose Us" },
  { href: "/achievements", label: "Achievements" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Chess Coaching Across Mumbai" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export const footerLinks = [
  { href: "/about", label: "About the Coach" },
  { href: "/programs", label: "Coaching Programs" },
  { href: "/#home-coaching", label: "Home Coaching" },
  { href: "/#online-coaching", label: "Online Coaching" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/achievements", label: "Achievements" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];
