import { Box } from "@mui/material";
import YouTube from "react-youtube";

const titleCss = {
  fontFamily: "Roboto, sans-serif",
  fontSize: "13pt",
  fontWeight: "700",
  letterSpacing: "1px",
  lineHeight: "1.63",
  display: "flex",
  justifyContent: "center",
  color: "rgba(33,33,33,1)",
  padding: "32px",
};

const videoCss = {
  padding: "0 8.563px",
};

const cases = () => {
  const opts = {
    // height: "390",
    // width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      origin: "http://localhost:3000",
    },
  };
  return (
    <Box style={{ backgroundColor: "#E6DED2", height: "400px", display: "flex", flexDirection: "column" }}>
      <Box style={titleCss}>精選案例</Box>
      <Box style={{ display: "flex", padding: "24px 48px", justifyContent: "center" }}>
        <Box style={videoCss}>
          {/* <iframe
            max-width="326"
            max-height="221"
            src="https://www.youtube.com/embed/MYMdmFna6o4"
            title="【北歐風】70萬搞定！20坪北歐風收納機能宅【寓森林設計-張姍姍】"
          /> */}
          <YouTube videoId="MYMdmFna6o4" opts={opts} />
        </Box>
        <Box style={videoCss}>
          {/* <iframe
            max-width="326"
            max-height="221"
            src="https://www.youtube.com/embed/VCfFivT5FJQ"
            title="量身訂製 打造輕奢渡假宅 ｜富麗室內裝修設計-王誌霆｜幸福空間"
          /> */}
        </Box>
      </Box>
    </Box>
  );
};
export default cases;
