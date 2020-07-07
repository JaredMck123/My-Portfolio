import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Hamburger from "./Components/Hamburger";
import Backdrop from "./Components/Backdrop";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      hamburgerOpen: false,
    };

    this.buttonClick = this.buttonClick.bind(this);
    this.backdropClick = this.backdropClick.bind(this);
  }

  buttonClick = () => {
    this.setState((prevState) => {
      return { hamburgerOpen: !prevState.hamburgerOpen };
    });
  };

  backdropClick = () => {
    this.setState({ hamburgerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.hamburgerOpen) {
      backdrop = <Backdrop click={this.backdropClick} />;
    }

    return (
      <Router>
        <div>
          <Header />
          <Navbar buttonClick={this.buttonClick} />
          <Hamburger show={this.state.hamburgerOpen} />
          {backdrop}
          <div style={{ height: "20px" }}></div>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/resume" exact component={Resume} />
          <div style={{ height: "20px" }}></div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
