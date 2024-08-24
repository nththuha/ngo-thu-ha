import Title from "@/components/nththuha/Title";
import { SimpleGrid, Stack } from "@mantine/core";
import { skillCategories, SkillCategory } from "./_configs";
import Category from "./components/Category";

const Skills = () => {
  return (
    <Stack id="skills" gap={10}>
      <Title content="Skills" />
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
