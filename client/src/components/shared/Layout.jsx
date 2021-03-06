import React from "react";
import Footer from "./Footer";

const Layout = props => (
  <div className="column layout">
    <div className="main-content">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
