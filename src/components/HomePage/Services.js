import React, { Component } from "react";
import styled from "styled-components";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "free shipping",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Fugit, nostrum!",
      },
    ],
  };
  render() {
    return <div></div>;
  }
}
