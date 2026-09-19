// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import LoadingScreen from "./LoadingScreen";
// import {
//   ArrowDown,
//   ArrowUp,
//   ArrowUpRight,
//   BadgeCheck,
//   BarChart3,
//   Briefcase,
//   Bot,
//   Braces,
//   Check,
//   Copy,
//   Cpu,
//   ExternalLink,
//   FileDown,
//   Folder,
//   GraduationCap,
//   Github,
//   Heart,
//   Database,
//   Home,
//   Linkedin,
//   Layers3,
//   Mail,
//   MessageCircle,
//   Menu,
//   Mic,
//   MicOff,
//   MapPin,
//   Moon,
//   Pause,
//   Phone,
//   Play,
//   Send,
//   Square,
//   Trophy,
//   UserRound,
//   Volume2,
//   VolumeX,
//   Server,
//   Sparkles,
//   Sun,
//   Wrench,
//   X,
//   Monitor,
// } from "lucide-react";

// type Project = {
//   title: string;
//   category: string;
//   desc: string;
//   tags: string[];
//   image: string;
//   outcome: string;
//   date?: string;
//   mini?: boolean;
// };
// type ChatMessage = {
//   id: number;
//   text: string;
//   sender: "bot" | "visitor";
//   time: string;
// };

// interface SpeechRecognitionLike {
//   lang: string;
//   continuous: boolean;
//   interimResults: boolean;
//   onresult: ((event: any) => void) | null;
//   onerror: ((event: any) => void) | null;
//   onend: (() => void) | null;
//   start: () => void;
//   stop: () => void;
// }

// declare global {
//   interface Window {
//     SpeechRecognition?: new () => SpeechRecognitionLike;
//     webkitSpeechRecognition?: new () => SpeechRecognitionLike;
//   }
// }
// const projects: Project[] = [
//   {
//     title: "Sales Performance Analysis Dashboard",
//     category: "Data Analytics",
//     desc: "1. Developed to analyze sales performance and identify key trends across products, customers, and regions for better data-driven decision-making.\n2. Cleaned and analyzed sales data using Excel and MySQL, then built an interactive Power BI dashboard with KPIs and DAX measures to generate actionable business insights.",
//     tags: ["Excel", "MySQL", "Power BI", "DAX"],
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
//     outcome: "Generated actionable business insights through KPI-led analysis.",
//     date: "Sep 2025",
//   },
//   {
//     title: "Trick Bills",
//     category: "Full-Stack",
//     desc: "1. Developed to simplify expense tracking and reduce the effort required to manually categorize bills and monitor spending.\n2. Built a responsive expense management interface that automated bill categorization and generated expense insights, making expense tracking more organized and efficient.",
//     tags: ["Python", "HTML", "CSS", "JavaScript"],
//     image:
//       "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=85",
//     outcome: "Made everyday expense tracking more organized and efficient.",
//     date: "Feb 2026",
//     mini: true,
//   },
//   {
//     title: "Shoe Store Website UI/UX Prototype",
//     category: "UI/UX",
//     desc: "1. Designed a prototype to create a simple, user-friendly, and visually engaging shoe shopping experience.\n2. Created wireframes and an interactive Figma prototype focused on intuitive navigation, usability, and accessibility.",
//     tags: ["Figma"],
//     image:
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
//     outcome: "Created a clear and engaging prototype for online shopping.",
//     date: "Apr 2025",
//     mini: true,
//   },
// ];
// const skillCategories = [
//   {
//     title: "Programming",
//     icon: Braces,
//     skills: ["Python", "Java", "C", "SQL", "Swift", "PHP"],
//   },
//   {
//     title: "Frontend",
//     icon: Monitor,
//     skills: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     title: "Backend",
//     icon: Server,
//     skills: ["Python", "REST APIs", "CRUD Operations"],
//   },
//   {
//     title: "Database",
//     icon: Database,
//     skills: ["MySQL"],
//   },
//   {
//     title: "Data Analytics",
//     icon: BarChart3,
//     skills: [
//       "Power BI",
//       "Excel",
//       "Pandas",
//       "NumPy",
//       "Matplotlib",
//       "Seaborn",
//       "Data Visualization",
//     ],
//   },
//   {
//     title: "Tools & Design",
//     icon: Wrench,
//     skills: ["Git", "GitHub", "VS Code", "Figma", "Canva"],
//   },
// ];
// const coreSkills = new Set([
//   "Python",
//   "SQL",
//   "Microsoft Excel",
//   "Power BI",
//   "MySQL",
//   "Data Analytics",
// ]);
// const filters = ["All", "Data Analytics", "Full-Stack", "UI/UX"];
// const profile = {
//   name: "Hariharan P",
//   firstName: "Hariharan",
//   role: "Data • AI • Code • Design",
//   email: import.meta.env.VITE_CONTACT_EMAIL || "hariharanp3506@gmail.com",
//   phone: "+91 9047733143",
//   address: "Ammapet, Salem, Tamil Nadu-636003",
//   githubUrl:
//     import.meta.env.VITE_GITHUB_URL || "https://github.com/hariharanp35",
//   linkedinUrl:
//     import.meta.env.VITE_LINKEDIN_URL ||
//     "https://www.linkedin.com/in/phariharan",
//   summary:
//     "I’m Hariharan P, an engineering student turning complex systems into useful, thoughtful digital experiences.",
// };
// const contactEmail = profile.email;
// const contactPhone = profile.phone;
// const contactAddress = profile.address;
// const githubUrl = profile.githubUrl;
// const linkedinUrl = profile.linkedinUrl;
// const resumeUrl = new URL(
//   "../Assets/Hariharan.P  Resume  (2).pdf",
//   import.meta.url,
// ).href;
// const portraitUrl = new URL("../Assets/hari-image-1.png", import.meta.url).href;
// const navSectionIds = [
//   "about",
//   "skills",
//   "education",
//   "certifications",
//   "achievements",
//   "projects",
//   "experience",
//   "contact",
// ];
// const chatbotName = "HP AI";
// const chatbotFullName = "HP AI Assistant";
// const initialChatMessage: ChatMessage = {
//   id: 1,
//   sender: "bot",
//   text: "Hi! 👋 I'm HP AI, your personal portfolio assistant. Ask me anything about Hariharan's skills, projects, education, certifications, technologies, or career interests.",
//   time: new Date().toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   }),
// };
// const hpAiSuggestedQuestions = [
//   "👋 Who is Hariharan?",
//   "💻 What are his skills?",
//   "🚀 Tell me about his projects",
//   "📊 What data analytics skills does he have?",
//   "🛠️ What technologies does he use?",
//   "📜 What certifications does he have?",
//   "🎓 What is his education?",
//   "📞 How can I contact him?",
// ];
// const getChatReply = (question: string) => {
//   const normalized = question.toLowerCase();
//   if (
//     normalized.includes("what is data science") ||
//     normalized.includes("define data science")
//   ) {
//     return "Data Science combines statistics, programming, and domain knowledge to collect, clean, analyze, and model data. It helps turn raw information into insights, predictions, and better decisions using tools such as Python, SQL, Pandas, and visualization platforms.";
//   }
//   if (
//     normalized.includes("what is python") ||
//     normalized.includes("define python")
//   ) {
//     return "Python is a general-purpose programming language known for readable syntax and a large ecosystem. It is widely used for automation, web development, data analysis, machine learning, APIs, and scripting.";
//   }
//   if (normalized.includes("what is sql") || normalized.includes("define sql")) {
//     return "SQL, or Structured Query Language, is used to work with relational databases. You can use it to retrieve, filter, join, group, insert, update, and analyze structured data in systems such as MySQL.";
//   }
//   if (
//     normalized.includes("machine learning") ||
//     normalized.includes("what is ml")
//   ) {
//     return "Machine learning is a branch of AI in which algorithms learn patterns from data to make predictions or decisions. A typical workflow includes preparing data, training a model, evaluating it, and improving its performance.";
//   }
//   if (normalized.includes("power bi")) {
//     return "Power BI is Microsoft's business intelligence platform for connecting to data, transforming it, building data models, and creating interactive reports and dashboards. DAX is commonly used for calculated columns and measures.";
//   }
//   if (
//     normalized.includes("sql and excel") ||
//     normalized.includes("excel and sql")
//   ) {
//     return "SQL is best for querying and transforming structured data in a database, especially when datasets are large or shared across systems. Excel is best for quick analysis, formulas, exploration, and presentation. They are often used together: SQL prepares the data and Excel helps communicate or inspect it.";
//   }
//   if (normalized.includes("education") || normalized.includes("study")) {
//     return `${profile.firstName} is pursuing a B.Tech in Artificial Intelligence and Data Science at Annapoorana Engineering College, Salem, from 2023 to 2027. His CGPA is 8.18 as of Semester 6. He completed Higher Secondary with 60% and Secondary School with a Pass result at Municipal Boys Higher Secondary School, Ammapet, Salem.`;
//   }
//   if (
//     normalized.includes("skill") ||
//     normalized.includes("technology") ||
//     normalized.includes("tech")
//   ) {
//     return `${profile.firstName} works across ${skillCategories.map((category) => category.title).join(", ")}. Core skills include Python, SQL, MySQL, Microsoft Excel, Power BI, and Data Analytics.`;
//   }
//   if (
//     normalized.includes("achievement") ||
//     normalized.includes("accomplish") ||
//     normalized.includes("outcome")
//   ) {
//     return `${profile.firstName} received the Visionary Innovators Award at Hack Fest 2K25 for developing an innovative solution with impactful implementation. He also secured Third Prize for developing a Shoe Website Prototype during the Intra-Symposium.`;
//   }
//   if (normalized.includes("certif")) {
//     return `${profile.firstName} has certifications from L&T in Fundamentals of Agile Methodology with DevOps Integration, George Academy in Front-End Web Development, and IBM in C Programming.`;
//   }
//   if (normalized.includes("experience") || normalized.includes("work")) {
//     return `${profile.firstName} completed a Data Science Internship at OdugaaTech Pvt. Ltd., Salem, in Jun–Jul 2026, and a Front-End Web Development Internship at ALGOJAXION Global Soft Pvt. Ltd., Salem, in Jun–Jul 2025.`;
//   }
//   if (normalized.includes("project") || normalized.includes("portfolio")) {
//     return `Featured work includes ${projects.map((project) => project.title).join(", ")}.`;
//   }
//   if (
//     normalized.includes("contact") ||
//     normalized.includes("email") ||
//     normalized.includes("reach")
//   ) {
//     return `You can contact ${profile.firstName} at ${contactEmail} or ${contactPhone}. He is based in ${contactAddress}. The Contact section also includes the resume, GitHub, LinkedIn, and a message form.`;
//   }
//   if (
//     normalized.includes("who") ||
//     normalized.includes("about") ||
//     normalized.includes("personality")
//   ) {
//     return `${profile.firstName} works where data, AI, code, and design overlap, with a focus on turning complex systems into useful, thoughtful digital experiences.`;
//   }
//   const generalTopics: Record<string, string> = {
//     "cloud computing":
//       "Cloud computing delivers computing resources such as servers, storage, databases, and services over the internet. It supports elastic scaling and pay-as-you-go usage through models such as IaaS, PaaS, and SaaS.",
//     "operating system":
//       "An operating system manages hardware and provides services for applications. Its responsibilities include process and memory management, file systems, device control, security, and user interfaces.",
//     oop: "Object-oriented programming organizes software around objects that combine state and behavior. Encapsulation, abstraction, inheritance, and polymorphism are its commonly taught principles.",
//     "rest api":
//       "A REST API exposes resources over HTTP using predictable URLs and methods such as GET, POST, PUT, PATCH, and DELETE. Good APIs use clear representations, status codes, validation, and authentication.",
//     "what is git":
//       "Git is a distributed version-control system. It records changes as commits, supports branches for parallel work, and lets teams review and merge changes safely.",
//     cybersecurity:
//       "Cybersecurity protects systems, networks, applications, and data from unauthorized access or disruption. Core practices include least privilege, strong authentication, patching, backups, encryption, and monitoring.",
//     "neural network":
//       "A neural network is a model made of connected layers that learn weighted patterns from data. During training, it adjusts weights to reduce a loss function and improve predictions.",
//     "computer vision":
//       "Computer vision enables software to interpret images and video. Common tasks include classification, object detection, segmentation, optical character recognition, and image generation.",
//     react:
//       "React is a JavaScript library for building user interfaces from reusable components. State and props describe UI data, while React updates the rendered output when that data changes.",
//     dbms: "A DBMS stores, organizes, secures, and retrieves data. It provides querying, transactions, concurrency control, constraints, backups, and administration for databases.",
//     "tcp and udp":
//       "TCP is connection-oriented and provides reliable, ordered delivery with flow control. UDP is connectionless and lightweight, trading delivery guarantees for lower overhead and latency.",
//     algorithm:
//       "An algorithm is a finite, precise procedure for solving a problem. Good algorithm design considers correctness, time complexity, space complexity, and the constraints of the input.",
//     "generative ai":
//       "Generative AI models learn patterns in data and produce new text, images, audio, code, or other content. Results depend on the model, its training data, the prompt, and evaluation safeguards.",
//     api: "An API is a contract that lets software systems communicate. It defines available operations, inputs, outputs, errors, authentication, and sometimes rate limits.",
//   };
//   const match = Object.entries(generalTopics).find(([topic]) =>
//     normalized.includes(topic),
//   );
//   return (
//     match?.[1] ||
//     "I could not find that detail in the portfolio, but I can still explain general Computer Science, Software Engineering, AI, web, cloud, cybersecurity, and data concepts. Please try asking the question another way."
//   );
// };
// const createTimeStamp = () =>
//   new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
// const askPortfolioAssistant = async (
//   history: ChatMessage[],
//   question: string,
// ): Promise<string> => {
//   const sanitizedQuestion = question.trim();

//   if (!sanitizedQuestion) {
//     return "Please enter a question before sending it.";
//   }

//   try {
//     const response = await fetch("/api/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         messages: history
//           .filter((message) => message.text.trim())
//           .map((message) => ({
//             role: message.sender === "bot" ? "assistant" : "user",
//             content: message.text,
//           })),
//       }),
//     });

//     if (!response.ok) {
//       const errorData = (await response.json().catch(() => null)) as {
//         error?: string;
//       };
//       throw new Error(errorData?.error || "AI service unavailable");
//     }

//     const data = (await response.json()) as { reply?: string };
//     return data.reply?.trim() || getChatReply(sanitizedQuestion);
//   } catch (error) {
//     console.error(`${chatbotName} request failed:`, error);
//     return getChatReply(sanitizedQuestion);
//   }
// };
// const reveal = {
//   hidden: { opacity: 0, y: 24 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.65, ease: "easeOut" as const },
//   },
// };

// function CustomCursor() {
//   const dotRef = useRef<HTMLSpanElement | null>(null);
//   const ringRef = useRef<HTMLSpanElement | null>(null);

//   useEffect(() => {
//     const pointerQuery = window.matchMedia(
//       "(hover: hover) and (pointer: fine)",
//     );
//     if (!pointerQuery.matches) return;

//     let targetX = window.innerWidth / 2;
//     let targetY = window.innerHeight / 2;
//     let ringX = targetX;
//     let ringY = targetY;
//     let frame = 0;

//     const render = () => {
//       ringX += (targetX - ringX) * 0.16;
//       ringY += (targetY - ringY) * 0.16;
//       if (dotRef.current) {
//         dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
//       }
//       if (ringRef.current) {
//         ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
//       }
//       frame = requestAnimationFrame(render);
//     };

//     const onMove = (event: MouseEvent) => {
//       targetX = event.clientX;
//       targetY = event.clientY;
//       const target = event.target as HTMLElement | null;
//       const interactive = target?.closest(
//         "a, button, input, textarea, [role=button], .skill-category-card, .project-card",
//       );
//       const project = target?.closest(".project-card");
//       const image = target?.closest("img, .project-image");
//       const hovering = Boolean(interactive || image);
//       ringRef.current?.classList.remove("cursor-out");
//       dotRef.current?.classList.remove("cursor-out");
//       ringRef.current?.classList.toggle("cursor-hover", hovering);
//       dotRef.current?.classList.toggle("cursor-hover", hovering);
//       ringRef.current?.classList.toggle("cursor-project", Boolean(project));
//     };

//     const onLeave = () => {
//       ringRef.current?.classList.add("cursor-out");
//       dotRef.current?.classList.add("cursor-out");
//     };

//     const onClick = () => {
//       ringRef.current?.classList.remove("cursor-click");
//       void ringRef.current?.offsetWidth;
//       ringRef.current?.classList.add("cursor-click");
//     };

//     document.addEventListener("mousemove", onMove, { passive: true });
//     document.addEventListener("click", onClick, { passive: true });
//     document.documentElement.addEventListener("mouseleave", onLeave);
//     frame = requestAnimationFrame(render);
//     return () => {
//       document.removeEventListener("mousemove", onMove);
//       document.removeEventListener("click", onClick);
//       document.documentElement.removeEventListener("mouseleave", onLeave);
//       cancelAnimationFrame(frame);
//     };
//   }, []);

//   return (
//     <>
//       <span ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
//       <span ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
//     </>
//   );
// }

// function App() {
//   const [theme, setTheme] = useState(
//     () => localStorage.getItem("theme") || "light",
//   );
//   const [filter, setFilter] = useState("All");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navWrapRef = useRef<HTMLElement | null>(null);
//   const [sent, setSent] = useState(false);
//   const [emailCopied, setEmailCopied] = useState(false);
//   const [emailCopyFailed, setEmailCopyFailed] = useState(false);
//   const [scrolled, setScrolled] = useState(0);
//   const [chatOpen, setChatOpen] = useState(false);
//   const [chatInput, setChatInput] = useState("");
//   const [chatTyping, setChatTyping] = useState(false);
//   const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
//     initialChatMessage,
//   ]);
//   const [isListening, setIsListening] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [isSpeechPaused, setIsSpeechPaused] = useState(false);
//   const [speakingMessageId, setSpeakingMessageId] = useState<number | null>(
//     null,
//   );
//   const [voiceEnabled, setVoiceEnabled] = useState(true);
//   const [voiceSupported, setVoiceSupported] = useState(false);
//   const [speechSupported, setSpeechSupported] = useState(false);
//   const [speechError, setSpeechError] = useState("");
//   const recognitionRef = useRef<any>(null);
//   const speechVoicesRef = useRef<SpeechSynthesisVoice[]>([]);
//   const speechRequestRef = useRef(0);
//   const chatBottomRef = useRef<HTMLDivElement | null>(null);
//   const [activeSection, setActiveSection] = useState("top");
//   const [pageLoading, setPageLoading] = useState(true);
//   const [contentRevealed, setContentRevealed] = useState(false);

//   // Keep the loading overlay lifecycle controlled by the page timer.
//   useEffect(() => {
//     const loadingTimer = window.setTimeout(() => {
//       setPageLoading(false);
//       // Small delay before revealing content for smooth transition
//       const revealTimer = window.setTimeout(() => setContentRevealed(true), 50);
//       return () => window.clearTimeout(revealTimer);
//     }, 3000);
//     return () => window.clearTimeout(loadingTimer);
//   }, []);
//   useEffect(() => {
//     if (!("speechSynthesis" in window)) return;

//     const updateSpeechVoices = () => {
//       speechVoicesRef.current = window.speechSynthesis.getVoices();
//       setSpeechSupported(true);
//     };

//     updateSpeechVoices();
//     window.speechSynthesis.addEventListener(
//       "voiceschanged",
//       updateSpeechVoices,
//     );
//     return () =>
//       window.speechSynthesis.removeEventListener(
//         "voiceschanged",
//         updateSpeechVoices,
//       );
//   }, []);
//   useEffect(() => {
//     if (!menuOpen) return;

//     const closeMenuOnEscape = (event: KeyboardEvent) => {
//       if (event.key === "Escape") setMenuOpen(false);
//     };

//     document.addEventListener("keydown", closeMenuOnEscape);
//     return () => document.removeEventListener("keydown", closeMenuOnEscape);
//   }, [menuOpen]);
//   useEffect(() => {
//     if (!menuOpen) return;

//     const closeMenuOnOutsidePointer = (event: PointerEvent) => {
//       const target = event.target as Node | null;
//       if (target && !navWrapRef.current?.contains(target)) setMenuOpen(false);
//     };

//     document.addEventListener("pointerdown", closeMenuOnOutsidePointer);
//     return () =>
//       document.removeEventListener("pointerdown", closeMenuOnOutsidePointer);
//   }, [menuOpen]);
//   useEffect(() => {
//     document.documentElement.dataset.theme = theme;
//     localStorage.setItem("theme", theme);
//   }, [theme]);
//   useEffect(() => {
//     const updateScrollState = () => {
//       setScrolled(
//         Math.min(
//           100,
//           (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
//             100,
//         ),
//       );

//       if (window.scrollY < 120) {
//         setActiveSection("top");
//         return;
//       }

//       const position = window.scrollY + 120;
//       const currentSection = navSectionIds.reduce((current, id) => {
//         const section = document.getElementById(id);
//         if (!section) return current;
//         return section.offsetTop <= position ? id : current;
//       }, "top");
//       setActiveSection(currentSection);
//     };
//     updateScrollState();
//     window.addEventListener("scroll", updateScrollState, { passive: true });
//     return () => window.removeEventListener("scroll", updateScrollState);
//   }, []);
//   useEffect(() => {
//     const SpeechRecognitionClass =
//       window.SpeechRecognition ||
//       (window as any).webkitSpeechRecognition ||
//       null;
//     setVoiceSupported(Boolean(SpeechRecognitionClass));

//     if (!SpeechRecognitionClass) return;

//     const recognition = new SpeechRecognitionClass();
//     recognition.lang = "en-US";
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     recognition.onresult = (event: any) => {
//       const transcript = Array.from(event.results)
//         .map((result: any) => result[0]?.transcript || "")
//         .join(" ")
//         .trim();
//       if (transcript) setChatInput(transcript);
//     };

//     recognition.onerror = () => {
//       setSpeechError("Voice recognition is unavailable right now.");
//       setIsListening(false);
//     };

//     recognition.onend = () => setIsListening(false);
//     recognitionRef.current = recognition;

//     return () => {
//       recognition.stop();
//     };
//   }, []);
//   useEffect(() => {
//     chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [chatMessages, chatTyping]);
//   const shown =
//     filter === "All" ? projects : projects.filter((p) => p.category === filter);
//   const nav = [
//     { label: "Home", id: "top", icon: Home },
//     { label: "About", id: "about", icon: UserRound },
//     { label: "Skills", id: "skills", icon: Layers3 },
//     { label: "Education", id: "education", icon: GraduationCap },
//     { label: "Certifications", id: "certifications", icon: BadgeCheck },
//     { label: "Achievements", id: "achievements", icon: Trophy },
//     { label: "Projects", id: "projects", icon: Folder },
//     { label: "Experience", id: "experience", icon: Briefcase },
//     { label: "Contact", id: "contact", icon: Mail },
//   ];
//   const navigateToSection = (id: string) => {
//     window.history.pushState(null, "", `/#${id}`);
//     document
//       .getElementById(id)
//       ?.scrollIntoView({ behavior: "smooth", block: "start" });
//     setActiveSection(id);
//     setMenuOpen(false);
//   };
//   const startVoiceCapture = () => {
//     if (!voiceSupported || !recognitionRef.current) {
//       setSpeechError("Speech recognition is not supported in this browser.");
//       return;
//     }

//     if (isListening) {
//       recognitionRef.current.stop();
//       setIsListening(false);
//       return;
//     }

//     setSpeechError("");
//     recognitionRef.current.start();
//     setIsListening(true);
//   };
//   const selectSpeechVoice = () => {
//     const voices = speechVoicesRef.current.length
//       ? speechVoicesRef.current
//       : window.speechSynthesis.getVoices();
//     const englishVoices = voices.filter((voice) =>
//       voice.lang.toLowerCase().startsWith("en"),
//     );
//     const candidates = englishVoices.length ? englishVoices : voices;
//     const femaleKeywords = [
//       "female",
//       "samantha",
//       "victoria",
//       "zira",
//       "jenny",
//       "aria",
//       "ava",
//       "karen",
//       "moira",
//       "fiona",
//       "susan",
//       "sonia",
//     ];
//     return [...candidates].sort((first, second) => {
//       const score = (voice: SpeechSynthesisVoice) => {
//         const name = voice.name.toLowerCase();
//         return (
//           femaleKeywords.reduce(
//             (total, keyword) => total + (name.includes(keyword) ? 3 : 0),
//             0,
//           ) +
//           (voice.localService ? 1 : 0) +
//           (name.includes("natural") ? 2 : 0)
//         );
//       };
//       return score(second) - score(first);
//     })[0];
//   };
//   const stopSpeaking = () => {
//     speechRequestRef.current += 1;
//     window.speechSynthesis?.cancel();
//     setIsSpeaking(false);
//     setIsSpeechPaused(false);
//     setSpeakingMessageId(null);
//   };
//   const speakText = (text: string, messageId: number) => {
//     if (!speechSupported || !("speechSynthesis" in window)) {
//       setSpeechError("Voice playback is unavailable on this device.");
//       return;
//     }
//     if (!voiceEnabled) {
//       setSpeechError("Voice playback is disabled. Enable voice in the header.");
//       return;
//     }

//     if (speakingMessageId === messageId && window.speechSynthesis.speaking) {
//       if (window.speechSynthesis.paused) {
//         window.speechSynthesis.resume();
//         setIsSpeechPaused(false);
//       } else {
//         window.speechSynthesis.pause();
//         setIsSpeechPaused(true);
//       }
//       return;
//     }

//     stopSpeaking();
//     setSpeechError("");
//     const requestId = speechRequestRef.current;
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.rate = 0.96;
//     utterance.pitch = 1.04;
//     utterance.volume = 0.95;
//     utterance.voice = selectSpeechVoice() || null;
//     utterance.onstart = () => {
//       if (speechRequestRef.current !== requestId) return;
//       setIsSpeaking(true);
//       setIsSpeechPaused(false);
//       setSpeakingMessageId(messageId);
//     };
//     utterance.onend = () => {
//       if (speechRequestRef.current !== requestId) return;
//       setIsSpeaking(false);
//       setIsSpeechPaused(false);
//       setSpeakingMessageId(null);
//     };
//     utterance.onerror = () => {
//       if (speechRequestRef.current !== requestId) return;
//       setIsSpeaking(false);
//       setIsSpeechPaused(false);
//       setSpeakingMessageId(null);
//       setSpeechError("Voice playback is unavailable on this device.");
//     };
//     window.speechSynthesis.speak(utterance);
//   };
//   const sendChatMessage = async (message: string) => {
//     const trimmed = message.trim();
//     if (!trimmed || chatTyping) return;

//     const userMessage: ChatMessage = {
//       id: Date.now(),
//       sender: "visitor",
//       text: trimmed,
//       time: createTimeStamp(),
//     };
//     const historySnapshot = [...chatMessages, userMessage];

//     setChatMessages(historySnapshot);
//     setChatInput("");
//     setSpeechError("");
//     setChatTyping(true);

//     const reply = await askPortfolioAssistant(historySnapshot, trimmed);

//     setChatMessages((current) => [
//       ...current,
//       {
//         id: Date.now() + 1,
//         sender: "bot",
//         text: reply,
//         time: createTimeStamp(),
//       },
//     ]);
//     setChatTyping(false);
//   };
//   const copyEmail = async () => {
//     try {
//       if (navigator.clipboard?.writeText) {
//         try {
//           await navigator.clipboard.writeText(contactEmail);
//         } catch {
//           const input = document.createElement("textarea");
//           input.value = contactEmail;
//           input.setAttribute("readonly", "true");
//           input.style.position = "fixed";
//           input.style.opacity = "0";
//           document.body.appendChild(input);
//           input.select();
//           if (!document.execCommand("copy"))
//             throw new Error("Copy command rejected");
//           input.remove();
//         }
//       } else {
//         const input = document.createElement("textarea");
//         input.value = contactEmail;
//         input.setAttribute("readonly", "true");
//         input.style.position = "fixed";
//         input.style.opacity = "0";
//         document.body.appendChild(input);
//         input.select();
//         document.execCommand("copy");
//         input.remove();
//       }
//       setEmailCopied(true);
//       setEmailCopyFailed(false);
//       window.setTimeout(() => setEmailCopied(false), 2200);
//     } catch (error) {
//       console.warn("Email copy unavailable:", error);
//       setEmailCopied(false);
//       setEmailCopyFailed(true);
//       window.setTimeout(() => setEmailCopyFailed(false), 2200);
//     }
//   };
//   return (
//     <div className="app">
//       <CustomCursor />
//       <AnimatePresence mode="wait">
//         {pageLoading && (
//           <LoadingScreen onComplete={() => setPageLoading(false)} />
//         )}
//       </AnimatePresence>
//       <motion.div
//         className="content-wrapper"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: contentRevealed ? 1 : 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <div className="scroll-progress" style={{ width: `${scrolled}%` }} />
//         <header ref={navWrapRef} className="nav-wrap">
//           <motion.nav
//             className="nav container"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{
//               opacity: contentRevealed ? 1 : 0,
//               y: contentRevealed ? 0 : -20,
//             }}
//             transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
//           >
//             <motion.a
//               className="brand brand-name"
//               href="#top"
//               initial="hidden"
//               animate="visible"
//               variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
//             >
//               {"Hariharan P".split("").map((character, index) => (
//                 <motion.span
//                   key={`${character}-${index}`}
//                   variants={{
//                     hidden: { opacity: 0, y: 8 },
//                     visible: { opacity: 1, y: 0 },
//                   }}
//                   className={character === "P" ? "brand-accent" : ""}
//                 >
//                   {character === " " ? "\u00a0" : character}
//                 </motion.span>
//               ))}
//             </motion.a>
//             <div
//               id="portfolio-navigation"
//               className={`nav-links ${menuOpen ? "open" : ""}`}
//             >
//               {nav.map((item) => (
//                 <a
//                   key={item.id}
//                   className={activeSection === item.id ? "active" : ""}
//                   href={`#${item.id}`}
//                   aria-current={activeSection === item.id ? "page" : undefined}
//                   onClick={(event) => {
//                     event.preventDefault();
//                     window.history.pushState(null, "", `#${item.id}`);
//                     document
//                       .getElementById(item.id)
//                       ?.scrollIntoView({ behavior: "smooth", block: "start" });
//                     setActiveSection(item.id);
//                     setMenuOpen(false);
//                   }}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//             <div className="nav-tools">
//               <button
//                 className="icon-btn icon-btn-glass theme-btn magnetic-btn"
//                 aria-label="Toggle theme"
//                 onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               >
//                 <motion.span
//                   key={theme}
//                   initial={{ opacity: 0, rotate: -70, scale: 0.65 }}
//                   animate={{ opacity: 1, rotate: 0, scale: 1 }}
//                   transition={{ duration: 0.28, ease: "easeOut" }}
//                   aria-hidden="true"
//                 >
//                   {theme === "dark" ? <Sun /> : <Moon />}
//                 </motion.span>
//               </button>
//               <button
//                 className="icon-btn menu-btn"
//                 aria-label="Toggle menu"
//                 aria-controls="portfolio-navigation"
//                 aria-expanded={menuOpen}
//                 onClick={() => setMenuOpen((open) => !open)}
//               >
//                 {menuOpen ? <X /> : <Menu />}
//               </button>
//               <div className="nav-socials" aria-label="Social links">
//                 <a
//                   className="icon-btn icon-btn-glass social-btn magnetic-btn"
//                   href={githubUrl}
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label="Open GitHub profile"
//                   title="GitHub"
//                 >
//                   <Github size={18} />
//                 </a>
//                 <a
//                   className="icon-btn icon-btn-glass social-btn magnetic-btn"
//                   href={linkedinUrl}
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label="Open LinkedIn profile"
//                   title="LinkedIn"
//                 >
//                   <Linkedin size={18} />
//                 </a>
//               </div>
//               <a
//                 className="nav-cta"
//                 href="#contact"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Let's talk <ArrowUpRight size={13} />
//               </a>
//             </div>
//           </motion.nav>
//         </header>
//         <main id="top">
//           <div className="ai-field" aria-hidden="true">
//             <span className="ai-node node-one" />
//             <span className="ai-node node-two" />
//             <span className="ai-node node-three" />
//             <span className="ai-node node-four" />
//             <span className="ai-connection connection-one" />
//             <span className="ai-connection connection-two" />
//             <span className="ai-connection connection-three" />
//           </div>
//           <motion.section
//             className="hero container"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{
//               opacity: contentRevealed ? 1 : 0,
//               y: contentRevealed ? 0 : 30,
//             }}
//             transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
//           >
//             <div className="hero-copy">
//               <motion.p
//                 className="eyebrow"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 AI &amp; Data Science / Portfolio
//               </motion.p>
//               <motion.h1
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                   visible: { transition: { staggerChildren: 0.08 } },
//                 }}
//               >
//                 {["Hariharan", "P."].map((word) => (
//                   <motion.span
//                     key={word}
//                     variants={{
//                       hidden: { opacity: 0, y: 30 },
//                       visible: {
//                         opacity: 1,
//                         y: 0,
//                         transition: { duration: 0.6 },
//                       },
//                     }}
//                   >
//                     {word}
//                   </motion.span>
//                 ))}
//               </motion.h1>
//               <p className="hero-role">
//                 AI &amp; Data Science Student <span>|</span> Aspiring Data
//                 Analyst
//               </p>
//               <motion.p
//                 className="hero-lede"
//                 variants={reveal}
//                 initial="hidden"
//                 animate="visible"
//                 transition={{ delay: 0.5 }}
//               >
//                 {profile.summary}
//               </motion.p>
//               <motion.div
//                 className="hero-actions"
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8 }}
//               >
//                 <a className="button button-primary" href="#projects">
//                   View Projects <ArrowDown size={17} />
//                 </a>
//                 <a
//                   className="button button-secondary"
//                   href={resumeUrl}
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   View resume <ExternalLink size={17} />
//                 </a>
//                 <a
//                   className="button button-secondary"
//                   href={resumeUrl}
//                   download
//                 >
//                   Download resume <FileDown size={17} />
//                 </a>
//               </motion.div>
//             </div>
//             <div className="hero-visual">
//               <div className="ai-visual-grid" aria-hidden="true" />
//               <motion.div
//                 className="ai-core"
//                 animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <div className="ai-core-halo" aria-hidden="true" />
//                 <div className="ai-bot-icon">
//                   <Bot size={58} strokeWidth={1.1} />
//                 </div>
//                 <span>AI AGENT / ONLINE</span>
//               </motion.div>
//               <motion.div
//                 className="ai-orbit ai-orbit-one"
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
//                 aria-hidden="true"
//               >
//                 <span className="ai-orbit-node ai-orbit-node-one">
//                   <Cpu size={16} />
//                 </span>
//                 <span className="ai-orbit-node ai-orbit-node-two">
//                   <Database size={15} />
//                 </span>
//               </motion.div>
//               <motion.div
//                 className="ai-orbit ai-orbit-two"
//                 animate={{ rotate: -360 }}
//                 transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
//                 aria-hidden="true"
//               >
//                 <span className="ai-orbit-node ai-orbit-node-three">
//                   <Sparkles size={15} />
//                 </span>
//               </motion.div>
//               <span className="ai-data-tag ai-data-tag-one">MODEL</span>
//               <span className="ai-data-tag ai-data-tag-two">DATA</span>
//               <span className="ai-data-tag ai-data-tag-three">IMPACT</span>
//               <div className="visual-caption">
//                 <span>01</span>
//                 <span>Curious by default.</span>
//               </div>
//             </div>
//           </motion.section>
//           <motion.div
//             className="rest-content"
//             initial={{ opacity: 0 }}
//             animate={{
//               opacity: contentRevealed ? 1 : 0,
//             }}
//             transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
//           >
//             <section className="marquee">
//               <div className="marquee-track">
//                 <span>✳</span>
//                 <span>✳</span>
//                 <span>✳</span>FULL-STACK DEVELOPER<span>✳</span> <span>✳</span>{" "}
//                 <span>✳</span> UI&UX DESIGN <span>✳</span> <span>✳</span>
//                 <span>✳</span>DATA ANALYTICS <span>✳</span>
//                 <span>✳</span>
//                 <span>✳</span>
//               </div>
//             </section>
//             <section id="about" className="section container about">
//               <motion.div
//                 className="section-label about-label"
//                 variants={reveal}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 ABOUT / A DEVELOPER IN PROGRESS
//               </motion.div>
//               <div className="about-grid">
//                 <motion.a
//                   href={portraitUrl}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="portrait"
//                   variants={reveal}
//                   initial="hidden"
//                   whileInView="visible"
//                   whileHover={{ y: -8, rotate: -1 }}
//                   viewport={{ once: true }}
//                   aria-label="Open Hariharan P profile photo in a new tab"
//                 >
//                   <div className="portrait-inner">
//                     <img src={portraitUrl} alt="Hariharan P" />
//                   </div>
//                 </motion.a>
//                 <motion.div
//                   className="about-copy"
//                   variants={reveal}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                 >
//                   <p className="about-intro">
//                     I’m a B.Tech AI & Data Science student focused on Full Stack
//                     Development, while exploring Data Analytics and UI/UX
//                     Design. I enjoy building practical, user-focused
//                     applications.
//                   </p>
//                   <p>
//                     I learn by building and experimenting with web, AI, and
//                     data-driven projects. I continuously improve my skills
//                     through hands-on experience. I focus on creating simple,
//                     practical, and intuitive solutions.
//                   </p>
//                   <p>
//                     I’m a curious and fast learner passionate about new
//                     technologies. My goal is to grow as a versatile technology
//                     professional. Eventually, I aim to build innovative products
//                     with real-world impact.
//                   </p>
//                   <div className="about-divider" />
//                   <div className="about-status">
//                     <span className="about-status-label">CURRENTLY</span>
//                     <span className="about-status-value">
//                       Learning • Building • Experimenting
//                     </span>
//                   </div>
//                 </motion.div>
//               </div>
//             </section>
//             <section id="skills" className="section section-tint">
//               <div className="container">
//                 <motion.div
//                   className="section-heading"
//                   variants={reveal}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                 >
//                   <div className="section-label">02 / Toolkit</div>
//                   <h2>
//                     A versatile <em>toolkit</em>
//                     <br />
//                     for real problems.
//                   </h2>
//                 </motion.div>
//                 <div className="skill-categories">
//                   {skillCategories.map((category, categoryIndex) => {
//                     const CategoryIcon = category.icon;
//                     return (
//                       <motion.article
//                         className={`skill-category-card ${category.title === "Data Analytics" ? "core-category" : ""}`}
//                         key={category.title}
//                         initial={{ opacity: 0, y: 22 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: categoryIndex * 0.07 }}
//                         viewport={{ once: true }}
//                       >
//                         <div className="skill-category-header">
//                           <span className="skill-category-icon">
//                             <CategoryIcon size={19} />
//                           </span>
//                           <span className="skill-category-number">
//                             0{categoryIndex + 1}
//                           </span>
//                         </div>
//                         <h3>{category.title}</h3>
//                         <div className="skill-badges">
//                           {category.skills.map((skill) => (
//                             <span
//                               className={
//                                 coreSkills.has(skill) ? "core-skill" : ""
//                               }
//                               key={`${category.title}-${skill}`}
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </motion.article>
//                     );
//                   })}
//                 </div>
//               </div>
//             </section>
//             <section id="education" className="section container education">
//               <motion.div
//                 className="section-heading"
//                 variants={reveal}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 <div>
//                   <div className="section-label">03 / Education</div>
//                   <h2>
//                     Foundations for
//                     <br />
//                     <em>better systems.</em>
//                   </h2>
//                 </div>
//                 <p>
//                   Learning the fundamentals behind useful, intelligent software.
//                 </p>
//               </motion.div>
//               <div className="education-timeline experience-grid">
//                 {[
//                   {
//                     period: "2023 — 2027",
//                     level: "Undergraduate degree",
//                     title: "B.Tech - Artificial Intelligence and Data Science",
//                     institution:
//                       "Annapoorana Engineering College, Salem, Tamil Nadu",
//                     result: "CGPA: 8.18/10 (as of Semester 6)",
//                   },
//                   {
//                     period: "2022 — 2023",
//                     level: "Higher Secondary (12th)",
//                     title: "Municipal Boys Higher Secondary School",
//                     institution: "Ammapet, Salem, Tamil Nadu",
//                     result: "Percentage: 60%",
//                   },
//                   {
//                     period: "2020 — 2021",
//                     level: "Secondary School (10th)",
//                     title: "Municipal Boys Higher Secondary School",
//                     institution: "Ammapet, Salem, Tamil Nadu",
//                     result: "Result: Pass",
//                   },
//                 ].map((education, index) => (
//                   <motion.article
//                     className="education-card internship-item"
//                     key={`${education.period}-${education.title}`}
//                     variants={reveal}
//                     initial="hidden"
//                     whileInView="visible"
//                     transition={{ delay: index * 0.12 }}
//                     viewport={{ once: true }}
//                   >
//                     <div className="education-details internship-content">
//                       <div className="education-topline">
//                         <span className="education-period">
//                           {education.period}
//                         </span>
//                         <span className="education-level">
//                           {education.level}
//                         </span>
//                       </div>
//                       <h3>{education.title}</h3>
//                       <p>{education.institution}</p>
//                       <strong
//                         className={
//                           education.result.startsWith("CGPA")
//                             ? "education-result education-result-cgpa"
//                             : "education-result"
//                         }
//                       >
//                         {education.result}
//                       </strong>
//                     </div>
//                   </motion.article>
//                 ))}
//               </div>
//             </section>
//             <section id="certifications" className="section certifications">
//               <div className="container">
//                 <motion.div
//                   className="section-heading"
//                   variants={reveal}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                 >
//                   <div>
//                     <div className="section-label">04 / Certifications</div>
//                     <h2>
//                       Learning that
//                       <br />
//                       <em>ships.</em>
//                     </h2>
//                   </div>
//                   <p>
//                     Practical credentials across Agile, web development, and
//                     programming.
//                   </p>
//                 </motion.div>
//                 <div className="certification-grid">
//                   {[
//                     {
//                       provider: "L&T",
//                       title:
//                         "Fundamentals of Agile Methodology with DevOps Integration",
//                       detail:
//                         "Learned Agile and DevOps fundamentals with hands-on practice using Git and Git Bash to manage and push projects to GitHub.",
//                     },
//                     {
//                       provider: "George Academy",
//                       title: "Front-End Web Development",
//                       detail:
//                         "Gained practical knowledge of HTML, CSS, JavaScript, and responsive web development.",
//                     },
//                     {
//                       provider: "IBM",
//                       title: "C Programming",
//                       detail:
//                         "Learned C programming fundamentals and applied them by writing code and solving basic programming problems.",
//                     },
//                   ].map((certification, index) => (
//                     <motion.article
//                       className="certification-card"
//                       key={certification.title}
//                       initial={{ opacity: 0, y: 24 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                     >
//                       <div className="certification-number">0{index + 1}</div>
//                       <div className="certification-provider">
//                         {certification.provider}
//                       </div>
//                       <h3>{certification.title}</h3>
//                       <p>{certification.detail}</p>
//                       <span className="certification-mark">
//                         CERTIFIED / PRACTICAL
//                       </span>
//                     </motion.article>
//                   ))}
//                 </div>
//               </div>
//             </section>
//             <section
//               id="achievements"
//               className="section section-tint achievements"
//             >
//               <div className="container">
//                 <motion.div
//                   className="section-heading"
//                   variants={reveal}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                 >
//                   <div>
//                     <div className="section-label">05 / Achievements</div>
//                     <h2>
//                       Curiosity turned
//                       <br />
//                       into <em>outcomes.</em>
//                     </h2>
//                   </div>
//                 </motion.div>
//                 <div className="achievement-list">
//                   {[
//                     {
//                       title: "Visionary Innovators Award",
//                       event: "Hack Fest 2K25",
//                       detail:
//                         "Received the Visionary Innovators Award at Hack Fest 2K25 for developing an innovative solution with impactful implementation.",
//                     },
//                     {
//                       title: "Third Prize",
//                       event: "Intra-Symposium",
//                       detail:
//                         "Secured Third Prize for developing a Shoe Website Prototype during the Intra-Symposium.",
//                     },
//                   ].map((achievement, index) => (
//                     <motion.article
//                       className="achievement-row"
//                       key={achievement.title}
//                       initial={{ opacity: 0, y: 24 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.14 }}
//                       viewport={{ once: true }}
//                     >
//                       <div className="achievement-badge">
//                         <span>0{index + 1}</span>
//                         <i />
//                       </div>
//                       <div className="achievement-content">
//                         <div className="achievement-event">
//                           {achievement.event}
//                         </div>
//                         <h3>{achievement.title}</h3>
//                         <p>{achievement.detail}</p>
//                         <span className="achievement-mark">
//                           RECOGNITION / VERIFIED
//                         </span>
//                       </div>
//                     </motion.article>
//                   ))}
//                 </div>
//               </div>
//             </section>
//             <section id="projects" className="section container projects">
//               <motion.div
//                 className="section-heading projects-head"
//                 variants={reveal}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 <div>
//                   <div className="section-label">06 / Selected work</div>
//                   <h2>
//                     Small steps,
//                     <br />
//                     <em>useful outcomes.</em>
//                   </h2>
//                 </div>
//                 <p>
//                   A growing collection of projects that sit at the intersection
//                   of curiosity and craft.
//                 </p>
//               </motion.div>
//               <div className="filters">
//                 {filters.map((item) => (
//                   <button
//                     key={item}
//                     className={filter === item ? "active" : ""}
//                     onClick={() => setFilter(item)}
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div>
//               <motion.div layout className="project-grid">
//                 {shown.map((project, index) => {
//                   const projectNumber = projects.indexOf(project) + 1;

//                   return (
//                     <motion.article
//                       layout
//                       key={project.title}
//                       className={`project-card ${projectNumber <= 3 ? "featured" : ""} ${project.mini && projectNumber > 3 ? "mini-project" : ""}`}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.06 }}
//                       viewport={{ once: true }}
//                     >
//                       <div className="project-image">
//                         <img src={project.image} alt="" loading="lazy" />
//                         <span className="project-index">
//                           {[
//                             "I",
//                             "II",
//                             "III",
//                             "IV",
//                             "V",
//                             "VI",
//                             "VII",
//                             "VIII",
//                             "IX",
//                             "X",
//                           ][projectNumber - 1] ?? projectNumber}
//                         </span>
//                         <a
//                           href="#contact"
//                           className="project-link"
//                           aria-label={`Open ${project.title}`}
//                         >
//                           <ArrowUpRight />
//                         </a>
//                       </div>
//                       <div className="project-info">
//                         <div className="project-category">
//                           {project.category}
//                           {project.date && (
//                             <span className="project-date">{project.date}</span>
//                           )}
//                         </div>
//                         <h3>{project.title}</h3>
//                         <p>{project.desc}</p>
//                         <div className="project-foot">
//                           <div className="tags">
//                             {project.tags.map((tag) => (
//                               <span key={tag}>{tag}</span>
//                             ))}
//                           </div>
//                           <span className="outcome">{project.outcome}</span>
//                         </div>
//                       </div>
//                     </motion.article>
//                   );
//                 })}
//               </motion.div>
//             </section>
//             <section id="experience" className="section section-dark">
//               <div className="container experience">
//                 <motion.div
//                   className="section-label"
//                   variants={reveal}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                 >
//                   07 / Work experience
//                 </motion.div>
//                 <div className="experience-grid">
//                   <div>
//                     <h2>
//                       Learning by stepping
//                       <br />
//                       <em>into the work.</em>
//                     </h2>
//                     <p className="experience-lede"></p>
//                   </div>
//                   <div className="timeline">
//                     {[
//                       {
//                         period: "Jun 2026 — Jul 2026",
//                         role: "Data Science Intern",
//                         company: "OdugaaTech Pvt. Ltd., Salem",
//                         skills: ["Python", "Data Analysis", "Visualization"],
//                         highlights: [
//                           "Analyzed real-world datasets using Python and data analysis tools to identify meaningful insights.",
//                           "Performed data cleaning, preprocessing, and visualization to support data-driven analysis.",
//                           "Strengthened analytical, problem-solving, and data interpretation skills through structured datasets.",
//                         ],
//                       },
//                       {
//                         period: "Jun 2025 — Jul 2025",
//                         role: "Front-End Web Development Intern",
//                         company: "ALGOJAXION Global Soft Pvt. Ltd., Salem",
//                         skills: [
//                           "HTML",
//                           "CSS",
//                           "JavaScript",
//                           "Responsive Design",
//                         ],
//                         highlights: [
//                           "Developed responsive website interfaces using HTML, CSS, and JavaScript.",
//                           "Improved user experience by implementing responsive design principles.",
//                           "Collaborated with the team to enhance application functionality and performance.",
//                         ],
//                       },
//                     ].map((internship, index) => (
//                       <motion.article
//                         className="timeline-item internship-item"
//                         key={internship.role}
//                         initial={{ opacity: 0, x: 25 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ delay: index * 0.14 }}
//                         viewport={{ once: true }}
//                       >
//                         <div className="internship-marker">0{index + 1}</div>
//                         <div className="internship-content">
//                           <div className="internship-topline">
//                             <span>{internship.period}</span>
//                             <span>INTERNSHIP</span>
//                           </div>
//                           <h3>{internship.role}</h3>
//                           <p className="internship-company">
//                             {internship.company}
//                           </p>
//                           <ul>
//                             {internship.highlights.map((highlight) => (
//                               <li key={highlight}>{highlight}</li>
//                             ))}
//                           </ul>
//                           <div
//                             className="experience-tags"
//                             aria-label="Skills used"
//                           >
//                             {internship.skills.map((skill) => (
//                               <span key={skill}>{skill}</span>
//                             ))}
//                           </div>
//                         </div>
//                       </motion.article>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </section>
//             <section id="contact" className="section contact container">
//               <motion.div
//                 className="contact-copy"
//                 variants={reveal}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 <div className="section-label">08 / Contact</div>
//                 <h2>
//                   Have a good
//                   <br />
//                   <em>question?</em>
//                 </h2>
//                 <p>
//                   I’m always interested in thoughtful problems, new
//                   perspectives, and work that leaves things better than it found
//                   them.
//                 </p>
//                 <div className="contact-links">
//                   <a href={resumeUrl} download>
//                     <FileDown size={17} /> Download resume
//                   </a>
//                   <a href={`tel:${contactPhone.replace(/\s/g, "")}`}>
//                     <Phone size={17} /> {contactPhone}
//                   </a>
//                   <a href={`mailto:${contactEmail}`}>
//                     <Mail size={17} /> {contactEmail}
//                   </a>
//                   <a
//                     href="https://maps.google.com/?q=Ammapet,Salem,Tamil+Nadu+636003"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <MapPin size={17} /> {contactAddress}
//                   </a>
//                   <a href={githubUrl} target="_blank" rel="noreferrer">
//                     <Github size={17} /> GitHub <ExternalLink size={13} />
//                   </a>
//                   <a href={linkedinUrl} target="_blank" rel="noreferrer">
//                     <ExternalLink size={17} /> LinkedIn{" "}
//                     <ExternalLink size={13} />
//                   </a>
//                 </div>
//               </motion.div>
//               <motion.form
//                 className="contact-form"
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   const formData = new FormData(e.currentTarget);
//                   const subject = encodeURIComponent("Portfolio enquiry");
//                   const body = encodeURIComponent(
//                     `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`,
//                   );
//                   window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
//                   setSent(true);
//                 }}
//                 variants={reveal}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 <label>
//                   Name
//                   <input
//                     required
//                     name="name"
//                     autoComplete="name"
//                     placeholder="Your name"
//                   />
//                 </label>
//                 <label>
//                   Email
//                   <input
//                     required
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     placeholder="you@example.com"
//                   />
//                 </label>
//                 <label>
//                   What are you thinking about?
//                   <textarea
//                     required
//                     name="message"
//                     rows={4}
//                     placeholder="A project, a collaboration, a hello..."
//                   />
//                 </label>
//                 <div className="contact-actions">
//                   <button className="button button-primary" type="submit">
//                     {sent ? (
//                       <>
//                         Message sent <Check size={17} />
//                       </>
//                     ) : (
//                       <>
//                         Send message <Send size={16} />
//                       </>
//                     )}
//                   </button>
//                   <a
//                     className="button button-secondary"
//                     href={`mailto:${contactEmail}?subject=${encodeURIComponent("Portfolio Contact")}`}
//                     aria-label={`Send a direct email to ${contactEmail}`}
//                   >
//                     Direct Mail <Mail size={17} />
//                   </a>
//                 </div>
//               </motion.form>
//             </section>
//           </motion.div>
//         </main>
//         <div className="chatbot">
//           <AnimatePresence>
//             {chatOpen && (
//               <motion.section
//                 className="chat-panel"
//                 role="dialog"
//                 aria-modal="false"
//                 initial={{ opacity: 0, y: 18, scale: 0.96 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: 18, scale: 0.96 }}
//                 aria-label={`${chatbotFullName}, Personal Portfolio Assistant`}
//               >
//                 <div className="chat-header">
//                   <div
//                     className="chat-avatar chat-avatar-symbol"
//                     aria-hidden="true"
//                   >
//                     ⌬
//                   </div>
//                   <div className="chat-identity">
//                     <strong>{chatbotName}</strong>
//                     <span>
//                       <i /> Personal Portfolio Assistant
//                     </span>
//                   </div>
//                   <span className="chat-status-badge" title="HP AI online">
//                     <i aria-hidden="true" /> ONLINE
//                   </span>
//                   <div className="chat-header-actions">
//                     <button
//                       className={`voice-settings ${voiceEnabled ? "active" : ""}`}
//                       type="button"
//                       title={
//                         voiceEnabled ? "Disable AI voice" : "Enable AI voice"
//                       }
//                       aria-label={
//                         voiceEnabled ? "Disable AI voice" : "Enable AI voice"
//                       }
//                       disabled={!speechSupported}
//                       onClick={() => {
//                         if (voiceEnabled) stopSpeaking();
//                         setVoiceEnabled((enabled) => !enabled);
//                         setSpeechError("");
//                       }}
//                     >
//                       {voiceEnabled ? (
//                         <Volume2 size={15} />
//                       ) : (
//                         <VolumeX size={15} />
//                       )}
//                     </button>
//                     <button
//                       className="voice-stop"
//                       type="button"
//                       title="Stop AI voice"
//                       aria-label="Stop AI voice"
//                       disabled={!isSpeaking}
//                       onClick={stopSpeaking}
//                     >
//                       <Square size={13} fill="currentColor" />
//                     </button>
//                     <button
//                       className="chat-close"
//                       type="button"
//                       title="Close HP AI"
//                       aria-label="Close HP AI chat"
//                       onClick={() => {
//                         stopSpeaking();
//                         setChatOpen(false);
//                       }}
//                     >
//                       <X size={18} strokeWidth={2.5} />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="chat-messages" aria-live="polite">
//                   {chatMessages.map((message) => (
//                     <motion.div
//                       key={message.id}
//                       className={`chat-message ${message.sender}`}
//                       initial={{ opacity: 0, y: 8 }}
//                       animate={{ opacity: 1, y: 0 }}
//                     >
//                       <div className="chat-bubble-content">{message.text}</div>
//                       <span className="chat-time">{message.time}</span>
//                       {message.sender === "bot" && (
//                         <button
//                           type="button"
//                           className={`chat-speaker ${
//                             speakingMessageId === message.id ? "active" : ""
//                           }`}
//                           aria-label={
//                             speakingMessageId === message.id
//                               ? isSpeechPaused
//                                 ? "Resume AI response"
//                                 : "Pause AI response"
//                               : "Listen to AI response"
//                           }
//                           onClick={() => speakText(message.text, message.id)}
//                         >
//                           {speakingMessageId === message.id ? (
//                             isSpeechPaused ? (
//                               <Play size={12} fill="currentColor" />
//                             ) : (
//                               <Pause size={12} />
//                             )
//                           ) : (
//                             <Volume2 size={12} />
//                           )}
//                         </button>
//                       )}
//                     </motion.div>
//                   ))}
//                   {chatTyping && (
//                     <div className="chat-typing" aria-label="HP AI is thinking">
//                       <span className="chat-typing-label">HP AI thinking</span>
//                       <i />
//                       <i />
//                       <i />
//                     </div>
//                   )}
//                   <div ref={chatBottomRef} />
//                 </div>
//                 <div className="chat-quick-replies">
//                   {hpAiSuggestedQuestions.map((prompt) => (
//                     <button
//                       key={prompt}
//                       type="button"
//                       onClick={() => sendChatMessage(prompt)}
//                     >
//                       {prompt}
//                     </button>
//                   ))}
//                 </div>
//                 <form
//                   className="chat-form"
//                   onSubmit={(event) => {
//                     event.preventDefault();
//                     sendChatMessage(chatInput);
//                   }}
//                 >
//                   <button
//                     type="button"
//                     className={`voice-toggle ${isListening ? "active" : ""}`}
//                     aria-label={
//                       isListening
//                         ? "Stop HP AI voice input"
//                         : "Start HP AI voice input"
//                     }
//                     onClick={startVoiceCapture}
//                     disabled={!voiceSupported}
//                   >
//                     {isListening ? <MicOff size={16} /> : <Mic size={16} />}
//                   </button>
//                   <textarea
//                     value={chatInput}
//                     onChange={(event) => setChatInput(event.target.value)}
//                     placeholder={
//                       voiceSupported
//                         ? "Ask a question..."
//                         : "Voice input unavailable"
//                     }
//                     aria-label="Ask a question"
//                     rows={1}
//                     onKeyDown={(event) => {
//                       if (event.key === "Enter" && !event.shiftKey) {
//                         event.preventDefault();
//                         sendChatMessage(chatInput);
//                       }
//                     }}
//                   />
//                   <button type="submit" aria-label="Send question">
//                     <Send size={16} />
//                   </button>
//                 </form>
//                 {(isListening || isSpeaking || speechError) && (
//                   <div
//                     className={`chat-voice-status ${isListening ? "listening" : ""} ${isSpeaking ? "speaking" : ""}`}
//                     role="status"
//                     aria-live="polite"
//                   >
//                     {isListening ? (
//                       <>
//                         <Mic size={13} /> <strong>HP AI Listening...</strong>
//                         <span className="voice-wave" aria-hidden="true">
//                           <i />
//                           <i />
//                           <i />
//                           <i />
//                         </span>
//                       </>
//                     ) : isSpeaking ? (
//                       <>
//                         <Volume2 size={13} />{" "}
//                         <strong>HP AI is speaking...</strong>
//                         <span className="voice-wave" aria-hidden="true">
//                           <i />
//                           <i />
//                           <i />
//                           <i />
//                         </span>
//                       </>
//                     ) : (
//                       <span>{speechError}</span>
//                     )}
//                   </div>
//                 )}
//                 <button
//                   className="chat-reset"
//                   onClick={() => {
//                     setChatMessages([initialChatMessage]);
//                     stopSpeaking();
//                   }}
//                 >
//                   Reset conversation
//                 </button>
//               </motion.section>
//             )}
//           </AnimatePresence>
//           <button
//             type="button"
//             className="chat-launcher"
//             onClick={() => {
//               if (chatOpen) stopSpeaking();
//               setChatOpen(!chatOpen);
//             }}
//             title={chatOpen ? "Close HP AI" : "Open HP AI"}
//             aria-label={chatOpen ? "Close HP AI chat" : "Open HP AI chat"}
//           >
//             <span className="chat-symbol" aria-hidden="true">
//               ⌬
//             </span>
//             {!chatOpen && <span className="chat-pulse" />}
//           </button>
//         </div>
//         <footer className="site-footer">
//           <div className="footer-watermark" aria-hidden="true">
//             Hariharan P
//           </div>
//           <div className="container footer-shell">
//             <div className="footer-main">
//               <div className="footer-profile">
//                 <h2>Hariharan P</h2>
//                 <p>
//                   Aspiring Fullstack Developer, Data Analyst and UI&UX
//                   Designer{" "}
//                 </p>
//               </div>
//               <nav className="footer-navigation" aria-label="Footer navigation">
//                 <div className="footer-navigation-column">
//                   {nav.slice(0, 5).map((item) => (
//                     <a
//                       key={`footer-${item.id}`}
//                       href={`http://localhost:5173/#${item.id}`}
//                       className={activeSection === item.id ? "active" : ""}
//                       aria-current={
//                         activeSection === item.id ? "page" : undefined
//                       }
//                       onClick={(event) => {
//                         event.preventDefault();
//                         navigateToSection(item.id);
//                       }}
//                     >
//                       <item.icon
//                         size={15}
//                         strokeWidth={1.7}
//                         aria-hidden="true"
//                       />
//                       <span>{item.label}</span>
//                       <ArrowUpRight size={13} aria-hidden="true" />
//                     </a>
//                   ))}
//                 </div>
//                 <div className="footer-navigation-column">
//                   {nav.slice(5).map((item) => (
//                     <a
//                       key={`footer-${item.id}`}
//                       href={`http://localhost:5173/#${item.id}`}
//                       className={activeSection === item.id ? "active" : ""}
//                       aria-current={
//                         activeSection === item.id ? "page" : undefined
//                       }
//                       onClick={(event) => {
//                         event.preventDefault();
//                         navigateToSection(item.id);
//                       }}
//                     >
//                       <item.icon
//                         size={15}
//                         strokeWidth={1.7}
//                         aria-hidden="true"
//                       />
//                       <span>{item.label}</span>
//                       <ArrowUpRight size={13} aria-hidden="true" />
//                     </a>
//                   ))}
//                 </div>
//               </nav>
//               <motion.div
//                 className="footer-connect"
//                 initial={{ opacity: 0, y: 18 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
//               >
//                 <a
//                   className="footer-contact-link"
//                   href={githubUrl}
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <Github size={17} />
//                   <span>GitHub</span>
//                   <ArrowUpRight size={14} />
//                 </a>
//                 <a
//                   className="footer-contact-link"
//                   href={linkedinUrl}
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <Linkedin size={17} />
//                   <span>LinkedIn</span>
//                   <ArrowUpRight size={14} />
//                 </a>
//                 <a
//                   className="footer-contact-link"
//                   href={`mailto:${contactEmail}`}
//                 >
//                   <Mail size={17} />
//                   <span>Email</span>
//                   <ArrowUpRight size={14} />
//                 </a>
//                 <button
//                   className="footer-copy-button"
//                   type="button"
//                   onClick={copyEmail}
//                 >
//                   {emailCopied ? <Check size={16} /> : <Copy size={16} />}
//                   <span>
//                     {emailCopied
//                       ? "Email copied!"
//                       : emailCopyFailed
//                         ? "Copy unavailable"
//                         : "Copy email"}
//                   </span>
//                 </button>
//               </motion.div>
//             </div>
//             <div className="footer-bottom">
//               <div className="footer-quote footer-quote-main">
//                 The journey of a thousand miles begins with a single step
//                 <Heart
//                   className="footer-heart"
//                   size={13}
//                   fill="currentColor"
//                   aria-label="with heart"
//                 />
//               </div>
//             </div>
//           </div>
//         </footer>
//       </motion.div>
//     </div>
//   );
// }
// export default App;
