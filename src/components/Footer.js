import React from 'react';
import ScrollToTop from './ScrollToTop';
import styled from 'styled-components';

function Footer() {

 const FooterSection = styled.div`
  width:74.7%;
  height: 50px;
  background: darkgray;
  cursor: pointer;
  text-align:center;
 `

 const FooterText = styled.span `
  text-align:center;
 `
  return (
    <FooterSection>
      <FooterText>Footer</FooterText>
      <ScrollToTop />
    </FooterSection>
  );
}

export default Footer;
