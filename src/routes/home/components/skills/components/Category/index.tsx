import { Card, Text, ThemeIcon } from "@mantine/core";
import { SkillCategory } from "../../_configs";
import SkillContainer from "../SkillContainer";

type CategoryProps = {
  skillCategory: SkillCategory;
};

const Category = ({ skillCategory }: CategoryProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <ThemeIcon
        size={48}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        {skillCategory.icon}
      </ThemeIcon>
      <Text fz="24" fw="bold" mt={10}>
        {skillCategory.name}
      </Text>
      <SkillContainer skills={skillCategory.skills} />
    </Card>
  );
};

export default Category;
