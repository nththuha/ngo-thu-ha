import { Flex, Text } from "@mantine/core";
import { SkillCategory } from "../../_configs";

type CategoryProps = {
  skillCategory: SkillCategory;
  onClick: (skillCategory: SkillCategory) => void;
};

const Category = ({ skillCategory, onClick }: CategoryProps) => {
  return (
    <Flex
      bd="2px solid var(--mantine-primary-color-8)"
      p="1rem"
      mb="1rem"
      bgr="100"
      onClick={() => onClick(skillCategory)}
    >
      {skillCategory.icon}
      <Text>{skillCategory.name}</Text>
    </Flex>
  );
};

export default Category;
