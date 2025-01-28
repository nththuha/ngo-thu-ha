import {
  Anchor,
  BackgroundImage,
  Box,
  rem,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconAt,
  IconBrandLinkedin,
  IconPhone,
  IconSun,
} from "@tabler/icons-react";
import classes from "./CardIcon.module.scss";

const contactData = [
  {
    title: "Email",
    description: "thuhango0204@gmail.com",
    icon: IconAt,
  },
  {
    title: "Phone",
    description: "(+84) 386-409-124",
    icon: IconPhone,
  },
  {
    title: "LinkedIn",
    description: (
      <Anchor
        href="https://www.linkedin.com/in/ngothuha"
        target="_blank"
      >
        <Text c="white">https://www.linkedin.com/in/ngothuha</Text>
      </Anchor>
    ),
    icon: IconBrandLinkedin,
  },
];

const CardIcon = () => {
  return (
    <BackgroundImage
      src="/img/bg.svg"
      radius="md"
      p="xl"
      w={{ base: "100%", md: "400px" }}
    >
      <Stack>
        {contactData.map((item) => (
          <ContactIcon key={item.title} {...item} />
        ))}
      </Stack>
    </BackgroundImage>
  );
};

export default CardIcon;

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
}: ContactIconProps) {
  return (
    <div className={classes.wrapper}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text fz="14" c="white">
          {title}
        </Text>
        <Text c="white">{description}</Text>
      </div>
    </div>
  );
}
