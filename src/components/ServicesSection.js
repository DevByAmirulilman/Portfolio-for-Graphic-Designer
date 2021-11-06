import React from 'react';
import { About, Description, Image } from '../styles';
import styled from 'styled-components';
//Import Icons
import solidworks from '../img/solidworks.svg'
import sketchup from '../img/sketchup.svg';
import droneSnip from '../img/droneSnip.png'
import lumion from '../img/lumion.svg'
import autodesk from '../img/autodesk.svg'
//Scroll animation
import { reveal } from '../animation';
import { useScroll } from './useScroll';
import adobe from '../img/adobe.svg'
import ProgressBar from "@ramonak/react-progress-bar";
const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      transition={{ duration: 0.75 }}
      ref={element}
      variants={reveal}
      animate={controls}
      initial="hidden"
    >
      <Description>
        <h2>
          My skills.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={adobe} alt="" />
              <h3>Efficient using Adobe software</h3>
            </div>
            <div className="progessbar">
            <ProgressBar completed={80} bgColor="#F05A5C" />
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={solidworks} alt="" />
              <h3>SolidWorks</h3>
            </div>
            <div className="progessbar">
            <ProgressBar completed={75} bgColor="#F05A5C" />
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={lumion} alt="" />
              <h3>Lumion</h3>
            </div>
            <div className="progessbar">
            <ProgressBar completed={70} bgColor="#F05A5C" />
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={sketchup} alt="" />
              <h3>SkethUp</h3>
            </div>
            <div className="progessbar">
            <ProgressBar completed={80} bgColor="#F05A5C" />
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={autodesk} alt="" />
              <h3>Autocad</h3>
            </div>
            <div className="progessbar">
            <ProgressBar completed={70} bgColor="#F05A5C" />
            </div>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={droneSnip} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  min-height: 90vh;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1500px) {
    display: block;
    padding: 2rem 2rem;
  }

`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1500px) {
    justify-content: center;
  }

`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
  .progessbar{
    margin:50px 0px;
  }
  @media (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 360px) {
    .progessbar{
      width: 100%;
    }
  }
`;

export default ServicesSection;
