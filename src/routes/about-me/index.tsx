import useTranslation from "@/hooks/useTranslation";
import { Flex, Group } from "@mantine/core";
import { useEffect, useRef } from "react";
import classes from "./AboutMe.module.scss";

const AboutMe = () => {
  const t = useTranslation();

  const homepageLogoMainContent = useRef<SVGPathElement | null>(null);

  function animateSvgOnScroll(value: number) {
    if (homepageLogoMainContent.current) {
      const totalLength =
        homepageLogoMainContent.current.getTotalLength();
      homepageLogoMainContent.current.style.strokeDasharray = `${totalLength}`;
      homepageLogoMainContent.current.style.strokeDashoffset = `${totalLength}`;
      const draw = totalLength * value;
      homepageLogoMainContent.current.style.strokeDashoffset = `${totalLength - draw}`;
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY / 1069;
      animateSvgOnScroll(value);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Flex h={3000} direction="column">
        <Group visibleFrom="lg" pos="absolute" display="">
          <div style={{ position: "absolute", top: "100px" }}>
            Website
          </div>
          <svg
            width="100vw"
            height="2000"
            viewBox="0 0 1000 2200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classes.svg}
          >
            <path
              d="M498.5 0.5C493.167 32.3333 499.4 107.5 567 153.5C634.6 199.5 642.5 235 638 247C635.167 252.5 625.6 263.1 610 261.5C594.4 259.9 535.167 237.5 507.5 226.5C366.167 196.833 86.7 172.4 99.5 312C85.3334 312.833 57 322.6 57 355C57 387.4 85.3334 398.5 99.5 400C114 399.333 142.7 389.4 141.5 355C141.667 345.833 137.9 325.7 121.5 318.5C105.1 311.3 71.6667 369.833 57 400C51.8333 413.5 62.1 439.4 144.5 435C160.5 433.333 186.6 439.7 163 478.5C133.5 527 37 495.5 33 478.5C26.8334 466.927 20.2001 442.026 43 435C71.5 426.218 45 768 144.5 746C155 743.667 175.5 734 173.5 714C171.5 694 204 674.333 220.5 667C237.333 664.667 269.6 666.2 264 691C258.4 715.8 288.667 733.333 304.5 739C326.833 749 372.9 748.6 378.5 667C385.5 565 475 782.5 493.5 674C508.3 587.2 571 731.833 600.5 815C605 826.667 618.8 848.6 638 843C657.2 837.4 733.667 739.333 769.5 691C807.667 653.333 875.1 615.3 839.5 764.5C835.333 775.167 823.9 800.2 811.5 815L717.5 861L746.5 882.5V945L811.5 980L876 945V882.5L811.5 915.5L756.5 887C779.333 863.667 831.8 820.8 859 836C886.2 851.2 909.333 865.333 917.5 870.5V945C918 1035.33 879.1 1215.3 719.5 1212.5C710.833 1211.67 693.5 1205.1 693.5 1185.5C693.5 1165.9 710.833 1160 719.5 1159.5C726.167 1162 739.6 1170.7 740 1185.5C740.5 1204 661.5 1276 631 1236.5C606.6 1204.9 538.833 1172 508 1159.5C436.333 1142.33 294.1 1130.7 298.5 1221.5C298.167 1230.67 301.6 1249.8 318 1253C334.4 1256.2 335.833 1233.33 334.5 1221.5C327.167 1197.5 305.1 1156.7 275.5 1185.5C217.333 1225.33 101.2 1316.2 102 1361H2V1513.5H195.5V1484L157.5 1452.5L122.5 1478.5L51.5 1413L139.5 1401.5C139.833 1406.67 143 1417 153 1417C163 1417 167.5 1409 168.5 1405C168.833 1399.67 166.2 1389.1 153 1389.5C150.167 1389.5 144 1390.7 142 1395.5C140 1400.3 125.833 1374.5 119 1361H195.5V1469.5C269.167 1564.33 394.4 1754.9 306 1758.5C297 1757.33 279.4 1751.7 281 1738.5C282.6 1725.3 298.333 1720 306 1719C324.833 1718.33 359.8 1727 349 1767C338.2 1807 278.833 1878 250.5 1908.5C233.833 1927.17 212.4 1965.6 260 1970C307.6 1974.4 320.167 1985.83 320.5 1991C347.167 2024.83 412.2 2068 459 1970M459 1970C470.5 1964.83 493.7 1949.9 494.5 1931.5C495.3 1913.1 484.167 1909.83 478.5 1910.5C473 1910.67 461.7 1913.6 460.5 1924C458.667 1918.83 452.3 1908.9 441.5 1910.5C430.7 1912.1 426.667 1923.5 426 1929C425.833 1936.17 432.2 1954.4 459 1970Z"
              stroke="black"
              strokeWidth="2"
              ref={homepageLogoMainContent}
            />
          </svg>
        </Group>
        <Flex hiddenFrom="lg">Mobile</Flex>
      </Flex>
    </div>
  );
};

export default AboutMe;
