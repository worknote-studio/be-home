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

const videoCss = { width: { md: "80%", lg: "40%" }, display: "flex", justifyContent: "center", margin: { md: "0 50px", lg: "0 50px" } }

const cases = () => {
  const opts = {
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      origin: "http://localhost:8787",
    },
  };
  return (
    <Box style={{ backgroundColor: "#E6DED2", display: "flex", flexDirection: "column" }}>
      <Box style={titleCss}>精選案例</Box>
      <Box style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        <Box sx={videoCss}>
          <YouTube videoId="MYMdmFna6o4" opts={opts} style={{ width: "100%" }} />
        </Box>
        <Box sx={videoCss}>
          <YouTube videoId="VCfFivT5FJQ" opts={opts} style={{ width: "100%" }} />
        </Box>
      </Box >
    </Box >
  );
};
export default cases;
