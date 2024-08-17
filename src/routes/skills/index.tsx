import { SimpleGrid } from "@mantine/core";
import { skillCategories, SkillCategory } from "./_configs";
import Category from "./components/Category";

const Skills = () => {
  return (
    <SimpleGrid
      cols={{ base: 1, md: 3 }}
      spacing={24}
      px={36}
      my={30}
    >
      {skillCategories.map(
        (skillCategory: SkillCategory, index: number) => (
          <Category key={index} skillCategory={skillCategory} />
        ),
      )}
    </SimpleGrid>
  );
};

export default Skills;
