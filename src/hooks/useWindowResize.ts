import { useMediaQuery } from "@mantine/hooks";

export const useWindowResize = (width = "768px") => {
  const matches = useMediaQuery(`(max-width: ${width})`, true, {
    getInitialValueInEffect: false,
  });
  return matches;
};
