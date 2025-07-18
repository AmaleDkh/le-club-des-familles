// React & Next elements
import { ReactNode } from "react";

// Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

import { useSocialMediaLinksData } from "@/hooks/useData";

function Layout({ children }: LayoutProps) {
  const socialMediaLinksContent = useSocialMediaLinksData();
  console.log("socialMediaLinksContent", socialMediaLinksContent?.Instagram);

  return (
    <>
      <Header instagramLink={socialMediaLinksContent?.Instagram || ""} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
