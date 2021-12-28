import {atom, selector} from "recoil";
import {getWidth} from "../components/utils/ScreenWidth";

export const windowSize = atom({
  key: "windowSize",
  default: getWidth()
});

export const siteHeader = selector({
  key: "siteHeader",
  get: ({get}) => get(windowSize) < 480 ? "Joshua Loran's Portfolio" : "Welcome to Joshua Loran's Personal Website"
});
