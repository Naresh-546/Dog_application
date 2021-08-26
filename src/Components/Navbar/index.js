import React, {useEffect, useState} from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";

function Navbar({toggle}) {

  const[scrollNav, SetScrollNav] = useState(false);

  const changeNav= ()=>{
    if(window.scrollY >= 80){
      SetScrollNav(true)
    }else{
      SetScrollNav(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', changeNav)
  },[]);

  return (
    <div>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo>Dog</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </div>
  );
}

export default Navbar;
