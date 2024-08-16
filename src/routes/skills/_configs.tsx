import {
  IconClipboardText,
  IconDeviceMobile,
  IconSettings,
  IconTools,
  IconUsers,
} from "@tabler/icons-react";

export type Skill = {
  category: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    icon: React.ReactNode;
  }[];
};
export const skills: Skill[] = [
  {
    category: "Frontend",
    icon: <IconClipboardText />,
    skills: [
      {
        name: "ReactJS",
        icon: <></>,
      },
      {
        name: "NextJS",
        icon: <></>,
      },
      {
        name: "Vite",
        icon: <></>,
      },
      {
        name: "TypeScript",
        icon: <></>,
      },
      {
        name: "Mantine",
        icon: <></>,
      },
    ],
  },
  {
    category: "Backend",
    icon: <IconSettings />,
    skills: [
      {
        name: "Node.js",
        icon: <></>,
      },
      {
        name: "Express",
        icon: <></>,
      },
      {
        name: "Prisma",
        icon: <></>,
      },
      {
        name: "RESTful APIs",
        icon: <></>,
      },
      {
        name: "PostgreSQL",
        icon: <></>,
      },
    ],
  },
  {
    category: "Mobile",
    icon: <IconDeviceMobile />,
    skills: [
      {
        name: "Kotlin",
        icon: <></>,
      },
      {
        name: "Flutter",
        icon: <></>,
      },
      {
        name: "React Native",
        icon: <></>,
      },
    ],
  },
  {
    category: "Tools",
    icon: <IconTools />,
    skills: [
      {
        name: "Git",
        icon: <></>,
      },
      {
        name: "Scrum",
        icon: <></>,
      },
      {
        name: "Docker",
        icon: <></>,
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
        icon: <></>,
      },
      {
        name: "Postman",
        icon: <></>,
      },
    ],
  },
  {
    category: "Soft skills",
    icon: <IconUsers />,
    skills: [
      {
        name: "Learning new technologies",
        icon: <></>,
      },
      {
        name: "Adaptability",
        icon: <></>,
      },
      {
        name: "Problem-solving",
        icon: <></>,
      },
      {
        name: "Teamwork",
        icon: <></>,
      },
    ],
  },
];
