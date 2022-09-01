import { Box } from "@mui/material";
import YouTube from "react-youtube";

// test
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
  width: { md: "80%", lg: "40%" },
  display: "flex",
  justifyContent: "center",
  margin: { md: "0 50px", lg: "0 50px" },
};

const cases = () => {
  const opts = {
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      origin: "http://localhost:8787",
    },
  };
  return (
    <Box style={{ backgroundColor: "#E6DED2", display: "flex", flexDirection: "column" }}>
      <Box style={titleCss}>精選案例</Box>
      <Box style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        <Box sx={videoCss}>
          <iframe
            style={{ maxWidth: "70vw", padding: "10px" }}
            width="577"
            height="360"
            src="https://www.youtube.com/embed/MYMdmFna6o4"
            title="【北歐風】70萬搞定！20坪北歐風收納機能宅【寓森林設計-張姍姍】"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          {/* <YouTube videoId="MYMdmFna6o4" opts={opts} style={{ width: "100%" }} /> */}
        </Box>
        <Box sx={videoCss}>
          <iframe
            style={{ maxWidth: "70vw", padding: "10px" }}
            width="577"
            height="360"
            src="https://www.youtube.com/embed/VCfFivT5FJQ"
            title="量身訂製 打造輕奢渡假宅 ｜富麗室內裝修設計-王誌霆｜幸福空間"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          {/* <YouTube videoId="VCfFivT5FJQ" opts={opts} style={{ width: "100%" }} /> */}
        </Box>
      </Box>
    </Box>
  );
};
export default cases;
