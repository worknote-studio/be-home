import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@/components/Link";

const Home: NextPage = () => {
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
        <pre style={{ float: "left", fontFamily: "Courier New, Monospace" }}>
          {`
██████╗ ███████╗    ██╗  ██╗ ██████╗ ███╗   ███╗███████╗
██╔══██╗██╔════╝    ██║  ██║██╔═══██╗████╗ ████║██╔════╝
██████╔╝█████╗      ███████║██║   ██║██╔████╔██║█████╗  
██╔══██╗██╔══╝      ██╔══██║██║   ██║██║╚██╔╝██║██╔══╝  
██████╔╝███████╗    ██║  ██║╚██████╔╝██║ ╚═╝ ██║███████╗
╚═════╝ ╚══════╝    ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
`}
        </pre>
        <Link href={"/collaboration"}>Collaboration Page</Link>
      </Box>
    </Container>
  );
};

export default Home;
