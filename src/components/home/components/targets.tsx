import { Box as Mbox } from "@mui/material";
import TargetItem from "./targetItem";

import target1 from "../../../image/target1.png";
import target2 from "../../../image/target2.png";
import target3 from "../../../image/target3.png";
import target4 from "../../../image/target4.png";

const containerCss = {
  display: "flex",
  flexWrap: "wrap",
  maxWidth: "1000px",
  margin: "0 auto",
};

const items = [
  [target1.src, "整合行銷定位", "市場數據定位分析"],
  [target2.src, "企劃發想", "量身打造企劃發想"],
  [target3.src, "素材製作", "多元素材製作"],
  [target4.src, "廣告投放", "精準ＴＡ投放"],
];

const targets = () => {
  return (
    <Mbox style={{ backgroundColor: "#F7F4EF" }}>
      <Mbox style={containerCss}>
        {items.map((v, i) => {
          const css = { justifyContent: {}, padding: {} };
          css.justifyContent = i % 2 === 0 ? { xs: "center", sm: "center" } : { xs: "center", sm: "center" };
          css.padding = i % 2 === 0 ? { xs: "20px", md: "20px" } : { xs: "20px", md: "20px" };
          return <TargetItem contents={v} key={i} css={css} />;
        })}
      </Mbox>
    </Mbox>
  );
};
export default targets;
