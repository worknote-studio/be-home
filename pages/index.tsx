import Link from "@/components/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import type { NextPage } from "next";
import Home from "../src/components/home/index";

const Index: NextPage = () => {
  return (
    <Home />
    //     <Container maxWidth="lg">
    //       <Box
    //         sx={{
    //           my: 4,
    //           display: "flex",
    //           flexDirection: "column",
    //           justifyContent: "center",
    //           alignItems: "center",
    //         }}
    //       >
    //         <pre style={{ float: "left", fontFamily: "Courier New, Monospace" }}>
    //           {`
    // ██████╗ ███████╗    ██╗  ██╗ ██████╗ ███╗   ███╗███████╗
    // ██╔══██╗██╔════╝    ██║  ██║██╔═══██╗████╗ ████║██╔════╝
    // ██████╔╝█████╗      ███████║██║   ██║██╔████╔██║█████╗
    // ██╔══██╗██╔══╝      ██╔══██║██║   ██║██║╚██╔╝██║██╔══╝
    // ██████╔╝███████╗    ██║  ██║╚██████╔╝██║ ╚═╝ ██║███████╗
    // ╚═════╝ ╚══════╝    ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
    // `}
    //         </pre>
    //         <Link href={"/collaboration"}>Collaboration Page</Link>
    //       </Box>
    //     </Container>
  );
};

export default Index;
