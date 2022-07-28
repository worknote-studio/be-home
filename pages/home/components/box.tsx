import { Box } from "@mui/material";

type textProps = {
  text: string;
};
const box = ({ text }: textProps) => {
  const innerHtmlSx = {
    backgroundColor: "#E9D1A2",
    border: "5px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    color: "white",
    justifyContent: "center",
    fontSize: "35px",
    width: { xs: "50%", sm: "70%", md: "80%" },
  };

  const BoxSx = {
    width: { xs: "100%", sm: "50%", md: "25%" },
    padding: { xs: "20px 10px", sm: "30px 20px", md: "45px 20px" },
  };

  return (
    <Box sx={BoxSx} style={{ display: "flex", justifyContent: "center" }}>
      <Box dangerouslySetInnerHTML={{ __html: text }} sx={innerHtmlSx}></Box>
    </Box>
  );
};

export default box;
