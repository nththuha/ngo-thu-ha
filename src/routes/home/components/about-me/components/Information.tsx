import { Flex } from "@mantine/core";
import Actions from "./Actions";
import Description from "./Description";
import Education from "./Educations";
import Name from "./Name";

const Information = () => {
  return (
    <Flex direction="column" gap={20} w="100%">
      <Name />
      <Description />
      <Education />
      <Actions />
    </Flex>
  );
};

export default Information;
