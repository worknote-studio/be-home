import { Box as Mbox } from "@mui/material";
import Box from "./box";

const contents = ["創意發想<br>企劃團隊", "影像美學<br>製作團隊", "百萬社群<br>行銷團隊", "數位行銷<br>操作團隊"];

const boxes = () => {
  return (
    <div>
      <Mbox style={{ backgroundColor: "#e5ded2" }}>
        <Mbox
          style={{ maxWidth: "1000px", margin: "0 auto" }}
          sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap", width: "100%" }}
        >
          {contents.map((v, i) => (
            <Box text={v} key={i} />
          ))}
        </Mbox>
      </Mbox>
    </div>
  );
};
export default boxes;
