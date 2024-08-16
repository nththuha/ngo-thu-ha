import {
  IconAccessible,
  IconAffiliate,
  IconApi,
  IconBrandDocker,
  IconBrandFlutter,
  IconBrandKotlin,
  IconBrandMantine,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTypescript,
  IconBrandVisualStudio,
  IconBrandVite,
  IconClipboardText,
  IconDatabase,
  IconDeviceMobile,
  IconEye,
  IconGitMerge,
  IconSend,
  IconSettings,
  IconTools,
  IconUsers,
  IconZoomQuestion,
} from "@tabler/icons-react";

export type Skill = {
  name: string;
  icon: React.ReactNode;
};

export type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <IconClipboardText />,
    skills: [
      {
        name: "ReactJS",
        icon: <IconBrandReact />,
      },
      {
        name: "NextJS",
        icon: <IconBrandNextjs />,
      },
      {
        name: "Vite",
        icon: <IconBrandVite />,
      },
      {
        name: "TypeScript",
        icon: <IconBrandTypescript />,
      },
      {
        name: "Mantine",
        icon: <IconBrandMantine />,
      },
    ],
  },
  {
    name: "Backend",
    icon: <IconSettings />,
    skills: [
      {
        name: "Node.js",
        icon: <IconBrandNodejs />,
      },
      {
        name: "Express",
        icon: <></>,
      },
      {
        name: "Prisma",
        icon: <IconBrandPrisma />,
      },
      {
        name: "RESTful APIs",
        icon: <IconApi />,
      },
      {
        name: "PostgreSQL",
        icon: <IconDatabase />,
      },
    ],
  },
  {
    name: "Mobile",
    icon: <IconDeviceMobile />,
    skills: [
      {
        name: "Kotlin",
        icon: <IconBrandKotlin />,
      },
      {
        name: "Flutter",
        icon: <IconBrandFlutter />,
      },
      {
        name: "React Native",
        icon: <IconBrandReactNative />,
      },
    ],
  },
  {
    name: "Tools",
    icon: <IconTools />,
    skills: [
      {
        name: "Git",
        icon: <IconGitMerge />,
      },
      {
        name: "Scrum",
        icon: <></>,
      },
      {
        name: "Docker",
        icon: <IconBrandDocker />,
      },
      {
        name: "ESLint",
        icon: <></>,
      },
      {
        name: "Prettier",
        icon: <></>,
      },
      {
        name: "Visual Studio Code",
        icon: <IconBrandVisualStudio />,
      },
      {
        name: "Postman",
        icon: <IconSend />,
      },
    ],
  },
  {
    name: "Soft skills",
    icon: <IconUsers />,
    skills: [
      {
        name: "Learning new technologies",
        icon: <IconEye />,
      },
      {
        name: "Adaptability",
        icon: <IconAccessible />,
      },
      {
        name: "Problem-solving",
        icon: <IconZoomQuestion />,
      },
      {
        name: "Teamwork",
        icon: <IconAffiliate />,
      },
    ],
  },
];
