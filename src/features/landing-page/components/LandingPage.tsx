import React, { Component } from "react";
import Hero from "./Hero";
import Services from "./Services";
import Footer from "./Footer";
import { Quiz } from "../../quiz";

interface Props {}
interface State {}

class LandingPage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Quiz />
        <Hero />
        <main role="main">
          <Services />
        </main>
        <Footer />
      </>
    );
  }
}

export default LandingPage;
