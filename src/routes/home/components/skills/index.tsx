import useTranslation from "@/hooks/useTranslation";
import { SimpleGrid, Stack, Text } from "@mantine/core";
import { skillCategories, SkillCategory } from "./_configs";
import Category from "./components/Category";

const Skills = () => {
  const t = useTranslation();
  return (
    <Stack id="skills" gap={10}>
      <Text fw="bold" fz={28}>
        {t("Skills")}
      </Text>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing={24}>
        {skillCategories.map(
          (skillCategory: SkillCategory, index: number) => (
            <Category key={index} skillCategory={skillCategory} />
          ),
        )}
      </SimpleGrid>
    </Stack>
  );
};

export default Skills;
