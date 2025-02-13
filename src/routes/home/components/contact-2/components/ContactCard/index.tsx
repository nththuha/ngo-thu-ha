import { Flex, Paper } from "@mantine/core";
import ContactForm from "../ContactForm";
import ContactInfo from "../ContactInfo";

const ContactCard = () => {
  return (
    <Paper shadow="lg" radius="md" withBorder p={5}>
      <Flex direction={{ base: "column", sm: "row" }} gap={0}>
        <ContactInfo />
        <ContactForm />
      </Flex>
    </Paper>
  );
};

export default ContactCard;
