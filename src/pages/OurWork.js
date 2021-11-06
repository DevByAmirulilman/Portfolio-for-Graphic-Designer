import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//Images
import uniszamain from '../img/modernHouseImg/modernHouseMain.jpg'

//Animation
import { motion } from 'framer-motion';
import { useScroll } from '../components/useScroll';
import {
  pageAnimation,
  fade,
  lineAnim,
  photoAnim,
  sliderContainer,
  movieContainer,
  slider,
} from '../animation';
import ScrollTop from '../components/ScrollTop';

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();
  const [element6, controls6] = useScroll();
  const [element7, controls7] = useScroll();
  return (
    <Work
      style={{ background: '#fff' }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
        <Frame5 variants={slider}></Frame5>
      </motion.div>
      <Movie variants={movieContainer}>
        <motion.h2 variants={fade}>Modern House </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-modernHouse">
          <Hide>
            <motion.img variants={photoAnim} src={uniszamain} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie variants={movieContainer}>
        <h2>Unisza Container</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-unisza">
          <motion.img variants={photoAnim} src={require('../img/uniszaImg/uniszaHero2.jpg')} alt="Unisza Container" />
        </Link>
      </Movie>
      <Movie
      variants={movieContainer}
      >
        <h2>Pool Design 1</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/pool-design1">
          <motion.img variants={photoAnim} src={require('../img/PoolImages/poolHero.jpg')} alt="good-times" />
        </Link>
        
      </Movie>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element4}
        variants={movieContainer}
        animate={controls4}
        initial="hidden"
      >
        <h2>Pool Design 2</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/pool-design2">
          <img src={require('../img/PoolImages/Pool1Hero.png')} alt="good-times" />
        </Link>
        
      </Movie>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element2}
        variants={movieContainer}
        animate={controls2}
        initial="hidden"
      >
        <h2>Pool Design 3</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/pool-design3">
          <img src={require('../img/PoolImages/PoolHero3.png')} alt="good-times" />
        </Link>
        
      </Movie>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element5}
        variants={movieContainer}
        animate={controls5}
        initial="hidden"
      >
        <h2>Boat Design</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/boat">
          <img src={require('../img/Boat/boatHero2.png')} alt="good-times" />
        </Link>
        
      </Movie>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element6}
        variants={movieContainer}
        animate={controls6}
        initial="hidden"
      >
        <h2>Drone Design</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/drone">
          <img src={require('../img/Drone/droneHero1.png')} alt="good-times" />
        </Link>
        
      </Movie>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element7}
        variants={movieContainer}
        animate={controls7}
        initial="hidden"
      >
        <h2>Graphic Design</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/graphic">
          <img src={require('../img/GraphicDesign/Felda (1).png')} alt="good-times" />
        </Link>
        
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  
  display: flex;
  flex-wrap: wrap;
  justify-content:space-evenly;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;  
  h2 {
    text-align: center;
    font-weight: bold;
  }
  @media (max-width: 1500px) {
    padding: 2rem 2rem;
  }
  @media (max-width: 480px){

  }
`;

const Movie = styled(motion.div)`
margin-top: 5em;
  h2{
    font-size: 2rem;
  }
  .line {
    height: 0.5rem;
    background: #F15A5C;
    margin-bottom: 1.5rem;
  }
  img {
    width: 500px;
    height: 70vh;
    object-fit: cover;
   
  }
  @media (max-width:480px){
    
    h2{
      font-size: 1.5rem;
    }
    img{
      height: 40vh;
    }
    .line{
      margin-bottom: 1rem;
    }
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #F15A5C;
`;
const Frame3 = styled(Frame1)`
  background: #2c2c2c;
`;
const Frame4 = styled(Frame1)`
  background: #b6b6b6;
`;
const Frame5 = styled(Frame1)`
background: #ffffffba;
`

export default OurWork;
