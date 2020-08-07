import React, { useEffect } from "react";
import Aos from "aos";
import CountUp from 'react-countup';

import Title from "@components/common/Title";
import Description from "@components/common/Description";

import {
  AboutWrapper,
  ContainerAbout,
  ContentHeader,
  ContentText,
  ParagraphAbout,
  ContentNumber,
  ScoreContent,
  ScoreNumber,
  ScoreName,
} from "./styled"

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 210, once: true })
  }, [])

  return (
    <AboutWrapper id="About">
      <ContainerAbout>
        <ContentHeader data-aos="fade-up">
          <Description variant="secondary">HELLO THERE</Description>
          <Title variant="secondary">We Are Glint</Title>
        </ContentHeader>

        <ContentText data-aos="fade-up">
          <ParagraphAbout>
            Lorem um dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </ParagraphAbout>
        </ContentText>

        <ContentNumber data-aos="fade-up">
          <ScoreContent>
            <ScoreNumber>
              <CountUp
                end={127}
                duration={20} 
                delay={5}
              />
            </ScoreNumber>
            <ScoreName>Awards Received</ScoreName>
          </ScoreContent>

          <ScoreContent>
            <ScoreNumber>
              <CountUp
                end={1505}
                duration={20} 
                delay={5}
              />
            </ScoreNumber>
            <ScoreName>Cups of Coffee</ScoreName>
          </ScoreContent>

          <ScoreContent>
            <ScoreNumber>
              <CountUp
                end={109}
                duration={20} 
                delay={5}
              />
            </ScoreNumber>
            <ScoreName>Projects Completed</ScoreName>
          </ScoreContent>

          <ScoreContent>
            <ScoreNumber>
              <CountUp
                end={102}
                duration={20} 
                delay={5}
              />
            </ScoreNumber>
            <ScoreName>Happy Clients</ScoreName>
          </ScoreContent>
        </ContentNumber>
      </ContainerAbout>
    </AboutWrapper>
  );
};

export default About;
