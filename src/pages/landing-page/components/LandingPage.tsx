import React, { Component } from "react";
import Hero from "./Hero";
import Services from "./Services";

interface Props {}
interface State {}

class LandingPage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Hero />
        <main role="main">
          <Services />
        </main>
      </>
    );
  }
}

export default LandingPage;
