import { Flex, Paper } from "@mantine/core";
import CardIcon from "../CardIcon";
import ContactForm from "../ContactForm";

const ContactCard = () => {
  return (
    <Paper shadow="lg" radius="md" withBorder>
      <Flex direction={{ base: "column", sm: "row" }} gap={0}>
        <CardIcon />
        <ContactForm />
      </Flex>
    </Paper>
  );
};

export default ContactCard;
