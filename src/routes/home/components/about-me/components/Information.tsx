import { Flex } from "@mantine/core";
import Actions from "./Actions";
import Contact from "./Contact";
import Description from "./Description";
import Education from "./Educations";
import Title from "./Name";

const Information = () => {
  return (
    <Flex direction="column" gap={10} w="100%">
      <Title />
      <Description />
      <Education />
      <Contact />
      <Actions />
    </Flex>
  );
};

export default Information;
