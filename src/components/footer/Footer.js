import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
   <FooterText>
        <p>Made with <span>❤</span> by Muhammad Umar</p>
   </FooterText>
  )
}

export default Footer;

const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    background-color: #46344e;
    color: #9d9d9d;
    font-family: 'Roboto';

    span{
        color:red;
    }
`