import { Flex, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { Skill } from "../_configs";

type SkillItemProps = {
  skill: Skill;
};

const SkillItem = ({ skill }: SkillItemProps) => {
  const { hovered, ref } = useHover();

  return (
    <Flex
      ref={ref}
      gap={10}
      align="center"
      py={5}
      px={10}
      style={{
        background: hovered
          ? "linear-gradient(to bottom right, #09b8ff, #9ae2ff)"
          : "transparent",
        borderRadius: 10,
      }}
    >
      <skill.icon stroke={1} />
      <Text>{skill.name}</Text>
    </Flex>
  );
};

export default SkillItem;
