import React from "react";

// components
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousel/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component"

import './App.css';

const App = () => {
  return (
  <div>
    <MyNavbar />
    <MyCarousal />
    <TitleMessage />
    {/* about me section */}
    <About />
  </div>
  );
};

export default App;
