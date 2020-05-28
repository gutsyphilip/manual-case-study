import "../styles/generic.scss";
import React from "react";
import AppRouter from "./AppRouter";

import smoothscroll from "smoothscroll-polyfill";

// EXPERIMENT: Smooth scroll pilyfill to ensure quiz smooth scroll interaction in order to gove users the idea that they can scroll back to previous questions
smoothscroll.polyfill();

const App = () => {
  return <AppRouter />;
};

export default App;
