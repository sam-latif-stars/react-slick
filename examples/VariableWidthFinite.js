import React, { Component } from "react";
import Slider from "../src/slider";

export default class VariableWidthFinite extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      dots: true,
      infinite: false,
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    };
    return (
      <div>
        <h2>Variable width (finite)</h2>
        <Slider {...settings}>
          <div style={{ width: 300 }}>
            <p>300</p>
          </div>
          <div style={{ width: 400 }}>
            <p>400</p>
          </div>
          <div style={{ width: 375 }}>
            <p>375</p>
          </div>
          <div style={{ width: 350 }}>
            <p>350</p>
          </div>
          <div style={{ width: 225 }}>
            <p>225</p>
          </div>
          <div style={{ width: 175 }}>
            <p>175</p>
          </div>
        </Slider>
      </div>
    );
  }
}
