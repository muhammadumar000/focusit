import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navbar, Logo, Links } from "./styles";

const Header = () => {
  return (
    <Navbar>
      <Logo>
        <h2>FOCUS IT</h2>
      </Logo>
    </Navbar>
  );
};

export default Header;


