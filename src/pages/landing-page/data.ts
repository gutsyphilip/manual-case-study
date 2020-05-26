import HairLossImg from "../../assets/images/hair-photo.png";
import HairLossImg2x from "../../assets/images/hair-photo@2x.png";
import HairLossImg3x from "../../assets/images/hair-photo@3x.png";

import ErectileDysImg from "../../assets/images/sex-photo.png";
import ErectileDysImg2x from "../../assets/images/sex-photo@2x.png";
import ErectileDysImg3x from "../../assets/images/sex-photo@3x.png";

export const SERVICES_LIST: {
  tagLine: string;
  title: string;
  description: string;
  src: string;
  srcSet: string[];
}[] = [
  {
    tagLine: "HAIR LOSS",
    title: "Hair loss needn’t be irreversible. We can help!",
    description:
      "Hair loss needn’t be irreversible. There’s a scientifically proven way that’s most effective in keeping and regrowing your hair. It’s all to do with blocking a pesky hormone called DHT. That’s the bad guy behind hair loss. And you can keep him at bay. The choice is yours.",
    src: HairLossImg,
    srcSet: [HairLossImg2x, HairLossImg3x],
  },
  {
    tagLine: "Erectile Dysfunction",
    title: "Erections can be a tricky thing. But no need to feel down!",
    description:
      "There are plenty of reasons why you might be having difficulty in the erection department. We can help you figure out possible reasons why. And prescribe a pill if needed.",
    src: ErectileDysImg,
    srcSet: [ErectileDysImg2x, ErectileDysImg3x],
  },
];
