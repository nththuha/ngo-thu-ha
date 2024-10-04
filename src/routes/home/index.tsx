import { Center, Flex } from "@mantine/core";
import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import Skills from "./components/skills";

const Home = () => {
  return (
    <Center>
      <Flex
        gap={{ base: 20, sm: 44 }}
        direction="column"
        w={{ base: "100vw", sm: "55rem" }}
        px="10"
        mb={{ base: 20, sm: 44 }}
      >
        <AboutMe />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
      </Flex>
    </Center>
  );
};

export default Home;
