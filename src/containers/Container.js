import React from "react";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibilities,
  Brand,
  Cta,
  Navbar,
  Wgpt,
} from "./index";

const Container = () => {
  return (
    <div className="App gradient__bg">
      <Navbar />
      <Header />
      <Brand />
      <Wgpt />
      <Features />
      <Possibilities />
      <Cta />
      <Blog />

      <Footer />
    </div>
  );
};

export default Container;
