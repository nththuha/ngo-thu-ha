import useTranslation from "@/hooks/useTranslation";
import { Image, Text } from "@mantine/core";
import classes from "./Footer.module.scss";

const Footer = () => {
  const t = useTranslation();

  return (
    <div className={classes.container}>
      <Image src="/img/nth/logo.png" w={40} h={40} />
      <div className={classes.info}>
        <Text c="white" fw="bold">
          {`${t("Built and designed by")} Ngo Thu Ha`}
        </Text>
        <Text c="white" fw="bold">
          {`${t("Copyright ©")} ${new Date().getFullYear()} ${t("All Rights Reserved")}`}
        </Text>
      </div>
    </div>
  );
};

export default Footer;
