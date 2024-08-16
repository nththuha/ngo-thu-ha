import { Flex } from "@mantine/core";
import { Skill } from "../../_configs";

type SkillItemProps = {
  skill: Skill;
};

const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <Flex>
      {skill.icon}
      {skill.name}
    </Flex>
  );
};

export default SkillItem;
