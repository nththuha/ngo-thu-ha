import useTranslation from "@/hooks/useTranslation";

const Home = () => {
  const t = useTranslation();
  return <>{t("Hello")}</>;
};

export default Home;
