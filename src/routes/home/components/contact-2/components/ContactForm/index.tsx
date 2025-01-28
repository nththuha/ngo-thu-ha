import {
  Button,
  Group,
  SimpleGrid,
  TextInput,
  Textarea,
} from "@mantine/core";
import classes from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <form
      className={classes.form}
      onSubmit={(event) => event.preventDefault()}
    >
      <div className={classes.fields}>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput label="Your name" placeholder="Your name" />
          <TextInput
            label="Your email"
            placeholder="hello@mantine.dev"
            required
          />
        </SimpleGrid>

        <TextInput
          mt="md"
          label="Subject"
          placeholder="Subject"
          required
        />

        <Textarea
          mt="md"
          label="Your message"
          placeholder="Please include all relevant information"
          minRows={3}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit" className={classes.control}>
            Send message
          </Button>
        </Group>
      </div>
    </form>
  );
};

export default ContactForm;
