import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Hero from "./Hero";
import Services from "./Services";
import Footer from "./Footer";
import { Quiz } from "../../quiz";
import { SERVICES_LIST } from "../data";

interface Props {}
interface State {
  showQuizModal: boolean;
}

class LandingPage extends Component<Props, State> {
  state = {
    showQuizModal: false,
  };

  handleSetShowQuizModal = (value: boolean): void => {
    this.setState({ showQuizModal: value });
  };

  render() {
    const { showQuizModal } = this.state;
    return (
      <>
        <Helmet>
          <title>
            Manual: Men&#x27;s Healthcare. Made easy. More than a pharmacy.
          </title>

          <meta
            name="description"
            content="We&#x27;re here to help give you all the right info and choices. From erectile dysfunction to hair loss and beyond. So you can be the healthiest, happiest man you can be."
          />
        </Helmet>
        {showQuizModal && (
          <Quiz
            setShowQuizModal={this.handleSetShowQuizModal}
            showQuizModal={showQuizModal}
          />
        )}
        <Hero setShowQuizModal={this.handleSetShowQuizModal} />
        <main role="main">
          <Services servicesList={SERVICES_LIST} />
        </main>
        <Footer />
      </>
    );
  }
}

export default LandingPage;
