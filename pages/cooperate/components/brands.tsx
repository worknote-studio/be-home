import { Box } from "@mui/material";
import brandsImage from "../../../src/image/brands.png";

const fontCss = {
  color: "rgba(133, 114, 81, 1)",
  fontFamily: "Roboto, sans- serif",
  fontSize: "18pt",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "1.56",
  padding: "24px 0",
};

const Brands = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "#FFFFFF" }}>
      <Box sx={{ display: "flex", justifyContent: "center", color: "#AC7D51" }} style={fontCss}>
        合作品牌案例
      </Box>
      <Box
        component={"img"}
        sx={{ display: "flex", justifyContent: "center", padding: "24px 0" }}
        src={brandsImage.src}
      ></Box>
    </Box>
  );
};

export default Brands;
