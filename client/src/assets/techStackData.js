import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiAxios,
  SiNodedotjs,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  // SiBcrypt,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiCanva,
  SiEslint,
  SiPrettier,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
} from "react-icons/si";

const techStackData = [
  {
    category: "Languages",
    techs: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    category: "Frameworks",
    techs: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    category: "Libraries",
    techs: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Redux", icon: SiRedux },
    ],
  },
  {
    category: "Runtime Environment",
    techs: [{ name: "Node.js", icon: SiNodedotjs }],
  },
  {
    category: "Database",
    techs: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
    ],
  },
  {
    category: "Authentication & Security",
    techs: [
      { name: "JWT", icon: SiJsonwebtokens },
      // { name: "Bcrypt", icon: SiBcrypt },
    ],
  },
  {
    category: "Machine Learning",
    techs: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Scikit-Learn", icon: SiScikitlearn },
    ],
  },
  {
    category: "Tools & Deployment",
    techs: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Netlify", icon: SiNetlify },
    ],
  },
];

export default techStackData;
