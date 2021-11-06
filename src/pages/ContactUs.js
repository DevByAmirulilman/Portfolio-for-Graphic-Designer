import React from 'react';
import styled from 'styled-components';
//Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim,fade } from '../animation';

const ContactUs = () => {
  return (
    <ContactStyle
      style={{ background: '#fff' }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
        <div className="line2"></div>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href="mailto:amirulsyafiq890@gmail.com" className="email">amirulsyafiq890@gmail.com</a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <ImgContainer2>
          <motion.a href="https://www.facebook.com/amirul.m.syafiq" variants={fade} ><img  src={require('../img/facebook.svg')} alt="" /></motion.a>
          <motion.a href="https://www.instagram.com/amirul_sy4f1q/"  variants={fade}><img src={require('../img/insta.svg')} alt="" /></motion.a>
          <motion.a href="whatsapp://send?text=Hello Syafiq&phone=+60139276043" variants={fade}><img src={require('../img/whatsapp.svg')} alt="" /></motion.a>
          </ImgContainer2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>+6013-9276043</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const Hide = styled.div`
  overflow: hidden;
  a{
    margin-left: 40px;
  }
`;

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  .email{
      font-size: 2rem;
      text-decoration: none;
      color: black;
  }
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  background: #353535;
  @media (max-width: 1500px) {
    display: none;
  }

`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  h2 {
    margin: 2rem;
  }
  @media (max-width: 1500px) {
    h2 {
      margin: 1rem 0rem;
      font-size: 2.5rem;
    }
  }

`;
const ImgContainer2 = styled.div`
 
`

export default ContactUs;
