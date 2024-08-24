import useTranslation from "@/hooks/useTranslation";
import { Flex, Text } from "@mantine/core";
import classes from "./Title.module.scss";

type TitleProps = {
  content: string;
};

const Title = ({ content }: TitleProps) => {
  const t = useTranslation();
  return (
    <Flex justify="center" className={classes.container}>
      <Text fw="bold" fz="30" ta="center" className={classes.text}>
        {t(content).toUpperCase()}
      </Text>
    </Flex>
  );
};

export default Title;
