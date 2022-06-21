import { Box, Container, TypeAction } from "@mui/material";
import type { NextPage } from "next";

const Collaboration: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Collaboration Page
      </Box>
    </Container>
  );
};

export default Collaboration;
