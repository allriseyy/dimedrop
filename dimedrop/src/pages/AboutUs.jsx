import React from "react";
import styled, { keyframes } from 'styled-components';
import Me from '../assests/me.png';

const GridContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PixelImage = styled.img`
  border: 10px solid rgb(132, 132, 168);
  object-fit: cover;
  image-rendering: crisp-edges;
  margin-bottom: 15px;
`;

const AboutUs = () => {
    return (
        <div style={{ margin: '20px'}}>
            <h2>Our Team</h2>
            <GridContainer>
                <PixelImage src={Me}/>
                <p>Yi Yong Lim - Lead Developer</p>
            </GridContainer>
        </div>
    );
};

export default AboutUs;