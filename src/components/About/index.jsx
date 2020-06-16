import React from "react";

import Title from '@components/common/Title';
import Description from '@components/common/Description';

import { AboutWrapper, ContainerAbout, ContentHeader, ContentText, ParagraphAbout, ContentNumber, ScoreContent, ScoreNumber, ScoreName } from './styled';

const About = () => (
  <AboutWrapper id="About">

    <ContainerAbout>

      <ContentHeader>
        <Description variant="secondary">HELLO THERE</Description>
        <Title variant="secondary">We Are Glint</Title>
      </ContentHeader>

      <ContentText>
        <ParagraphAbout>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
        </ParagraphAbout>
      </ContentText>

      <ContentNumber>
       
          <ScoreContent>
            <ScoreNumber>0001</ScoreNumber>
            <ScoreName>Awards Received</ScoreName>
          </ScoreContent>

          <ScoreContent>
            <ScoreNumber>0002</ScoreNumber>
            <ScoreName>Cups of Coffee</ScoreName>
          </ScoreContent>
       
          <ScoreContent>
            <ScoreNumber>0003</ScoreNumber>
            <ScoreName>Projects Completed</ScoreName>
          </ScoreContent>

          <ScoreContent>
            <ScoreNumber>0004</ScoreNumber>
            <ScoreName>Happy Clients</ScoreName>
          </ScoreContent>
      
      </ContentNumber>
      
    </ContainerAbout>

  </AboutWrapper>
)

export default About;