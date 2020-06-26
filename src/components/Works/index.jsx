import React, { useEffect } from "react";
import Aos from "aos";

import Title from '@components/common/Title';
import Description from '@components/common/Description';

import { WorksWrapper, BgTitle, BgWorks, ContainerWorks, IntroWrapper, WorksContent, FigureBox, FigureContent, PhotoEffect, TextBox, PositionText, LinkWrapper, TitleBox, SubBox } from './styled';

import img from '@images/mujer.jpg';


const Works = () => {

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 210, });
  }, []);

  return (
    <WorksWrapper>
      <BgTitle>
        <ContainerWorks>
          <IntroWrapper>
            <Description variant="light">RECENT WORKS</Description>
            <Title variant="black">We love what we do, check out some of our latest works</Title>
          </IntroWrapper>
        </ContainerWorks>
      </BgTitle>
      <BgWorks>
        <ContainerWorks>
          <WorksContent>

            <FigureBox>
              <FigureContent>
                <PhotoEffect src={img} />
                <TextBox>
                  <PositionText>
                    <LinkWrapper />
                    <TitleBox>SHUTTERBUG</TitleBox>
                    <SubBox>Paragráfo</SubBox>
                  </PositionText>
                </TextBox>
              </FigureContent>
            </FigureBox>

            <FigureBox>
              <FigureContent>
                <PhotoEffect src={img} />
                <TextBox>
                <PositionText>
                    <LinkWrapper />
                  <TitleBox>SHUTTERBUG</TitleBox>
                  <SubBox>Paragráfo</SubBox>
                </PositionText>
                </TextBox>
              </FigureContent>
            </FigureBox>

            <FigureBox>
              <FigureContent>
                <PhotoEffect src={img} />
                <TextBox>
                <PositionText>
                  <LinkWrapper />
                  <TitleBox>SHUTTERBUG</TitleBox>
                  <SubBox>Paragráfo</SubBox>
                </PositionText>
                </TextBox>
              </FigureContent>
            </FigureBox>

            <FigureBox>
              <FigureContent>
                <PhotoEffect src={img} />
                <TextBox>
                <PositionText>
                  <LinkWrapper />
                  <TitleBox>SHUTTERBUG</TitleBox>
                  <SubBox>Paragráfo</SubBox>
                </PositionText>
                </TextBox>
              </FigureContent>
            </FigureBox>

          </WorksContent>
        </ContainerWorks>
      </BgWorks>

    </WorksWrapper>
  )
};

export default Works;