export const navLinks = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
]

import { RiLinkedinFill, RiGithubFill, RiFacebookFill } from "react-icons/ri"

export const icons = [
  {
    path: "https://www.linkedin.com/in/tuan-nguyen0915/",
    icon: RiLinkedinFill,
  },
  {
    path: "https://github.com/TuanNguyen0915 ",
    icon: RiGithubFill,
  },
  {
    path: "https://facebook.com",
    icon: RiFacebookFill,
  },
]

import {
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  User2,
} from "lucide-react"

export const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Tuan Nguyen",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "617 448 6306",
  },
  {
    icon: <MailIcon size={20} />,
    text: "tuan.nat915@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "09-15-1990",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Quincy, Massachusetts, USA",
  },
]

export const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Umass Boston",
        qualification: "Bachelor of Computer Science",
        years: "2022 - Present",
      },
      {
        university: "General Assembly",
        qualification: "Certificate",
        years: "9/2023 - 12/2023",
      },
      {
        university: "The Complete Python Programming",
        qualification: "Certificate",
        years: "2/2023 - 5/2023",
      },
      {
        university: "Quincy College",
        qualification: "Certificate",
        years: "2015 - 2018",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "General Assembly",
        exp: "Full-stack software engineering 420+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies.",
        years: "9/2023 - 12/2023",
      },
      {
        company: "Target",
        exp: "Dedicate over 65% of daily tasks to inspecting in-store merchandise, ensuring optimal presentation and customer satisfaction.Efficiently organize back-room inventory for streamlined accessibility, assisting team members in efficient product retrieval.",
        years: "2021 - 2023",
      },
      {
        company: "ACB Bank",
        exp: "As a bank teller, I would be responsible for assisting customers with various transactions and providing customer service. My duties would include cashing checks, canceling checks, processing wire transfers, handling loan payments, and assisting with loan applications.",
        years: "2012 - 2014",
      },
    ],
  },
]
import {
  TbBrandVscode,
  TbBrandNotion,
  TbBrandSlack,
  TbBrandDocker,
} from "react-icons/tb"

export const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end development",
      },
      {
        name: "Javascript, TypeScript, Python",
      },
      {
        name: "Back-end development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        icon: TbBrandVscode,
      },
      {
        icon: TbBrandNotion,
      },
      {
        icon: TbBrandSlack,
      },
      {
        icon: TbBrandDocker,
      },
    ],
  },
]

import { GanttChartSquare, Blocks, Gem } from "lucide-react"

export const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Technologies",
    description: [
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Nextjs",
      "Python",
    ],
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Methodologies",
    description: [
      "Agile development",
      "RESTful Routing",
      "QA Testing",
      "Problem Solving",
      "Debugging",
    ],
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "frameworks & tools",
    description: ["Vscode", "Notion", "Slack", "Docker"],
  },
]

export const projectsData = [
  {
    image: "/work/1.png",
    category: "Fullstack",
    name: "Moviehub",
    description:
      "Moviehub is a modern website where you can track popular movies and TV shows based on information from TMDB.com. You can create an account and save your favorite TV shows or movies to a watchlist.",
    link: "https://moviehub-wine.vercel.app/",
    github: "https://github.com/TuanNguyen0915/MovieHub",
  },
  {
    image: "/work/8.png",
    category: "React",
    name: "TN coffee",
    description:
      "This project involved the development of a front-end website dedicated to coffee shop. The design was meticulously crafted, incorporating modern aesthetics and ensuring an exceptional user experience.",
    link: "https://tn-coffee-shop.netlify.app/",
    github: "https://github.com/TuanNguyen0915/coffee_shop_fe",
  },
  {
    image: "/work/3.png",
    category: "Fullstack",
    name: "Memorify",
    description:
      "The platform is a social media website designed specifically for image storage and sharing. Users can securely upload and shared their pictures.",
    link: "https://memorifies.netlify.app",
    github: "https://github.com/TuanNguyen0915/memorifies",
  },
  {
    image: "/work/4.png",
    category: "Next js",
    name: "BurgerBite",
    description:
      "The front-end burger store with a modern design, fast loading, and smooth animations. With a focus on accessibility and user experience.",
    link: "https://burgerbite.vercel.app",
    github: "https://github.com/TuanNguyen0915/burgerbite",
  },
  {
    image: "/work/5.png",
    category: "Fullstack",
    name: "DailyBlog",
    description:
      "Our platform is designed to empower users by sharing valuable tips, meaningful experiences, and daily insights. Whether you’re seeking productivity hacks, or simply a dose of inspiration, we’ve got you covered.",
    link: "https://dailyblog-beta.vercel.app/",
    github: "https://github.com/TuanNguyen0915/dailyBlog",
  },
  {
    image: "/work/6.png",
    category: "React",
    name: "TnYoga",
    description:
      "This project involved the development of a front-end website dedicated to yoga. The design was meticulously crafted, incorporating modern aesthetics and ensuring an exceptional user experience.",
    link: "https://tuannguyen-yoga.netlify.app/",
    github: "https://github.com/TuanNguyen0915/yoga-fe",
  },
  {
    image: "/work/7.png",
    category: "JavaScript",
    name: "Simon Game",
    description:
      "Simon is the game can help people Train Eyes & Brain. Looking at the quick flash color will train your eye focus, and remember the sequence to train brain memory.",
    link: "https://tuanng-simon.netlify.app/",
    github: "https://github.com/TuanNguyen0915/simon_game",
  },

  {
    image: "/work/2.png",
    category: "React",
    name: "TnBank",
    description:
      "Our front-end development project aims to design and build a sophisticated, visually appealing website for a financial institution. The website will seamlessly blend modern aesthetics with user-friendly functionality, providing an exceptional online banking experience.",
    link: "https://tn-bank.netlify.app",
    github: "https://github.com/TuanNguyen0915/bank_app",
  },
]
