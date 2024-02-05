import React from "react";
import "@fontsource/space-mono/700-italic.css";
import "@fontsource/goudy-bookletter-1911";
import "@fontsource-variable/mulish";
import "@fontsource-variable/oswald";
import "@fontsource/space-mono/700-italic.css";
import "../index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
