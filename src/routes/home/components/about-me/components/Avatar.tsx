import { Image } from "@mantine/core";

const Avatar = () => {
  return (
    <Image
      radius={10}
      h={400}
      w={{ base: "100%", sm: "300px" }}
      src={"/img/nth/avatar.jpg"}
    />
  );
};

export default Avatar;
