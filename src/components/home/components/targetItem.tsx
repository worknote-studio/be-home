import { Box } from "@mui/material";

type contentType = { contents: string[]; css: object };

let innerContainer = {
  display: "flex",
};

const textCss = {
  padding: "0 10px",
  // width: "165.2px",
  width: "60%",
};

const text1Css = {
  padding: "14px 8px",
  color: "rgba(116,102,77,1)",
  fontFamily: "Roboto, sans-serif",
  fontSize: "13pt",
  fontWeight: "700",
  letterSpacing: "1px",
  lineHeight: "1.63",
};

const text2Css = {
  padding: "14px 8px",
  color: "#666666",
  fontFamily: "'Open Sans', sans-serif",
  fontSize: "12pt",
  fontWeight: "400",
  lineHeight: "1.56",
};

const targetItem = ({ contents, css }: contentType) => {
  const imgContent = {
    backgroundImage: `url(${contents[0]})`,
    backgroundPosition: "center center",
    width: "40%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  innerContainer = { ...innerContainer, ...css };

  return (
    <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
      <Box sx={innerContainer}>
        <Box style={imgContent}></Box>
        <Box style={textCss}>
          <Box style={text1Css}>{contents[1]}</Box>
          <Box style={text2Css}>{contents[2]}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default targetItem;
