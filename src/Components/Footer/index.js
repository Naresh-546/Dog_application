import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinkWrap,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from "./FooterElement";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinkWrap>
            <FooterLinkItem>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Terms & Conditions</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponserships</FooterLink>
              <FooterLink to="/">Email</FooterLink>
            </FooterLinkItem>
          </FooterLinkWrap>
          <FooterLinkWrap>
            <FooterLinkItem>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Terms & Conditions</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItem>
          </FooterLinkWrap>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Dog</SocialLogo>
            <WebsiteRights>
              Dog © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
