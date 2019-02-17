import React from "react";
import Header from "./header";
import Footer from "./footer";

export default class MainArea extends React.Component {
  render() {
    return (
      <div className="main-area">
        <Header />
        <Footer />
      </div>
    )
  }
}