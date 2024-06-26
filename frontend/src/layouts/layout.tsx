import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
