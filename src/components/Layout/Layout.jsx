// import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { LayoutWrapper } from "./Layout.styled";

export const Layout = ({ children }) => {
  return (
    <LayoutWrapper className="layout">
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </LayoutWrapper>
  );
};
