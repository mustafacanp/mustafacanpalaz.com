import { scroller } from "react-scroll";
const scrollNext = (elementName, offsetNum) => {
  scroller.scrollTo(elementName, {
    duration: 3000,
    smooth: "easeInOutQuint",
    offset: offsetNum ? offsetNum : null,
  });
};

export default scrollNext;
