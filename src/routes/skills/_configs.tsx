import {
  Icon,
  IconAccessible,
  IconAffiliate,
  IconApi,
  IconBaseline,
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
  IconCode,
  IconDatabase,
  IconDeviceMobile,
  IconExplicit,
  IconEye,
  IconGitMerge,
  IconProps,
  IconRecycle,
  IconSend,
  IconSettings,
  IconTools,
  IconUsers,
  IconZoomQuestion,
} from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type Skill = {
  name: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
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
        icon: IconBrandReact,
      },
      {
        name: "NextJS",
        icon: IconBrandNextjs,
      },
      {
        name: "Vite",
        icon: IconBrandVite,
      },
      {
        name: "TypeScript",
        icon: IconBrandTypescript,
      },
      {
        name: "Mantine",
        icon: IconBrandMantine,
      },
    ],
  },
  {
    name: "Backend",
    icon: <IconSettings />,
    skills: [
      {
        name: "Node.js",
        icon: IconBrandNodejs,
      },
      {
        name: "Express",
        icon: IconExplicit,
      },
      {
        name: "Prisma",
        icon: IconBrandPrisma,
      },
      {
        name: "RESTful APIs",
        icon: IconApi,
      },
      {
        name: "PostgreSQL",
        icon: IconDatabase,
      },
    ],
  },
  {
    name: "Mobile",
    icon: <IconDeviceMobile />,
    skills: [
      {
        name: "Kotlin",
        icon: IconBrandKotlin,
      },
      {
        name: "Flutter",
        icon: IconBrandFlutter,
      },
      {
        name: "React Native",
        icon: IconBrandReactNative,
      },
    ],
  },
  {
    name: "Tools",
    icon: <IconTools />,
    skills: [
      {
        name: "Git",
        icon: IconGitMerge,
      },
      {
        name: "Scrum",
        icon: IconRecycle,
      },
      {
        name: "Docker",
        icon: IconBrandDocker,
      },
      {
        name: "ESLint",
        icon: IconCode,
      },
      {
        name: "Prettier",
        icon: IconBaseline,
      },
      {
        name: "Visual Studio Code",
        icon: IconBrandVisualStudio,
      },
      {
        name: "Postman",
        icon: IconSend,
      },
    ],
  },
  {
    name: "Soft skills",
    icon: <IconUsers />,
    skills: [
      {
        name: "Learning new technologies",
        icon: IconEye,
      },
      {
        name: "Adaptability",
        icon: IconAccessible,
      },
      {
        name: "Problem-solving",
        icon: IconZoomQuestion,
      },
      {
        name: "Teamwork",
        icon: IconAffiliate,
      },
    ],
  },
];
