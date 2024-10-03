import Title from "@/components/nththuha/Title";
import { Flex, Stack } from "@mantine/core";
import Avatar from "./components/Avatar";
import Information from "./components/Information";

const AboutMe = () => {
  return (
    <Stack id="about-me" gap={10}>
      <Title content="About me" />
      <Flex direction={{ base: "column", sm: "row" }} gap={20}>
        <Avatar />
        <Information />
      </Flex>
    </Stack>
  );
};

export default AboutMe;
