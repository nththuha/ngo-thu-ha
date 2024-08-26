import { useWindowResize } from "@/hooks/useWindowResize";
import { Center, Flex } from "@mantine/core";
import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import Skills from "./components/skills";

const Home = () => {
  const isMobile = useWindowResize();
  return (
    <Center>
      <Flex
        gap={isMobile ? 20 : 44}
        direction="column"
        w={isMobile ? "100vw" : "50rem"}
        px="10"
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
