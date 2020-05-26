import React, { Component } from "react";
import Hero from "./Hero";

interface Props {}
interface State {}

class LandingPage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Hero />
        <main role="main">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            molestias fugiat atque? Hic exercitationem natus a rerum vero.
            Impedit maxime ipsam quod repellat, veniam dignissimos deserunt
            voluptatibus quos. Veritatis, autem?
          </p>
        </main>
      </>
    );
  }
}

export default LandingPage;
