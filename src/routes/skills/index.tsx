import { Grid } from "@mantine/core";
import { useState } from "react";
import { Skill, skillCategories, SkillCategory } from "./_configs";
import Category from "./components/Category";
import SkillItem from "./components/SkillItem";

const Skills = () => {
  const [skillCategory, setSkillCategory] = useState<SkillCategory>(
    skillCategories[0],
  );
  const handleSkillCategoryClick = (skillCategory: SkillCategory) => {
    setSkillCategory(skillCategory);
  };

  return (
    <Grid gutter="xl" p="xl">
      <Grid.Col span={4}>
        {skillCategories.map(
          (skillCategory: SkillCategory, index: number) => (
            <Category
              key={index}
              skillCategory={skillCategory}
              onClick={handleSkillCategoryClick}
            />
          ),
        )}
      </Grid.Col>
      <Grid.Col span={8}>
        {skillCategory.skills.map((skill: Skill, index: number) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </Grid.Col>
    </Grid>
  );
};

export default Skills;
