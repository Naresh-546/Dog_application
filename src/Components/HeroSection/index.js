import React,{useState} from "react";
import video from "../../Videos/video.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = ()=>{
        setHover(!hover);
    }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Lovely and Loyal Dogs</HeroH1>
        <HeroP>
          “Dogs do speak, but only to those who know how to listen.”
        </HeroP>
        <HeroBtnWrapper>
          <Button primary={true} 
          dark={true}
          to="signup" onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
