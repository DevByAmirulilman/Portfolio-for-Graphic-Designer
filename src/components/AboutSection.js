import React from 'react';
import { About, Description, Image } from '../styles';
import styled from 'styled-components';
//Images
import { titleAnim, fade, photoAnim } from '../animation';
import { motion } from 'framer-motion';
import Wave from './Wave';
import Portfolio from '../img/Mini Portfolio.pdf';

const AboutSection = () => {

 

  return (
    <About>
      <Description>
        <div className="title">
          <Hide >
            <motion.h2 className="about-title" variants={titleAnim}>Live your life by Design</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
            not by Default
            </motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
        I live by F. M. Alexander simple yet powerfull quote
        </motion.p>
        <div className="portfolio-resume">
        <motion.a href={Portfolio} target = "_blank" variants={fade}>My Portfolio</motion.a>
        <motion.a href={Portfolio} target = "_blank" variants={fade}>My Resume</motion.a>
        </div>
         <ImgContainer>
          <motion.a href="https://www.facebook.com/amirul.m.syafiq" variants={fade} ><img  src={require('../img/facebook.svg')} alt="" /></motion.a>
          <motion.a href="https://www.instagram.com/amirul_sy4f1q/"  variants={fade}><img src={require('../img/insta.svg')} alt="" /></motion.a>
          <motion.a href="whatsapp://send?text=Hello Syafiq&phone=+60139276043" variants={fade}><img src={require('../img/whatsapp.svg')} alt="" /></motion.a>
          </ImgContainer>
      </Description>
      <Image>
        <motion.img className="profilePic" variants={photoAnim} src={require('../img/profilePic2.png')} initial="hidden" animate="show" alt="Amirul Syafiq" />
      </Image>
      <Wave  />
    </About>
  );
};

const ImgContainer = styled.div`
width: 80%;
margin: 0 auto;
img{
  margin-left: 50px;
  margin-top: 20px;
} 
@media (max-width:480px){
 img{
   margin: 10px;
 }
}
`

const Hide = styled.div`
  overflow: hidden;

`;

export default AboutSection;
