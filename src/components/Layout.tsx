import { PropsWithChildren } from "react";
import TopBar from "./TopBar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};

export default Layout;
