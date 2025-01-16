import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    // typescript,
    html,
    python,
    css,
    reactjs,
    // redux,
    tailwind,
    nodejs,
    // mongodb,
    git,
    figma,
    // docker,
    cpp,
    meta,
    starbucks,
    tesla,
    shopify,
    // carrent,
    // jobit,
    // tripguide,
    threejs,
    mickey,
    myntraShe,
    bubble,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "DSA Practitioner",
      icon: backend,
    },
    {
      title: "C++ developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "cpp",
      icon: cpp,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make websites this beautiful , but Reva proved me wrong.",
      name: "Tanisha Gupta",
      designation: "Cse Student",
      company: "NSUT",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Reva does.",
      name: "Revati Kaushal",
      designation: "IT Student",
      company: "USICT",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "She is a very hardworking and focused girl .When she makes up her mind of doing something ,she completes it flawlessly!",
      name: "Arjun Gupa",
      designation: "Cse student",
      company: "USICT",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      testimonial:
        "During Hackathon projects ,she leads and keeps all the work together very efficiently. She is fun to work with.",
      name: "Ravi Pandey",
      designation: "Cse student",
      company: "NSUT",
    },
  ];
  
  const projects = [
    {
      name: "Myntra SHE",
      description:
        "streamline a section where users can easily submit their unique style ideas and innovative concepts for unique clothing drapes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: myntraShe,
      source_code_link: "https://github.com/RevaKaushal/myntra_project.git",
      deploy_link: "https://myntra-project-six.vercel.app/",
    },
    {
      name: "web Scrapping",
      description:
        "stunning website clone inspired by award-winning designs with captivating animations to grab their attention and create a memorable first impression.",
      tags: [
        {
          name: "GSAP",
          color: "blue-text-gradient",
        },
        {
          name: "Locomotive scroll",
          color: "green-text-gradient",
        },
        {
          name: "Swipper js",
          color: "pink-text-gradient",
        },
      ],
      image: mickey,
      source_code_link: "https://github.com/RevaKaushal/MickeyWeb.git",
      deploy_link: "https://revakaushal.github.io/MickeyWeb/",
    },
    {
      name: "Bubble Game",
      description:
        "This project focuses on developing a straightforward yet engaging bubble game primarily using JavaScript. The game's is complemented by the visual enhancements ",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "vailla-tilt",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: bubble,
      source_code_link: "https://github.com/RevaKaushal/Bubble_Game.git",
      deploy_link :"https://bubble-game-jet-alpha.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };