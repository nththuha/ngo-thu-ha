import Title from "@/components/nththuha/Title";
import { Stack } from "@mantine/core";
import ContactCard from "./components/ContactCard";

const Contact = () => {
  return (
    <Stack id="contact" gap={10}>
      <Title content="Contact" />
      <ContactCard />
    </Stack>
  );
};

export default Contact;
