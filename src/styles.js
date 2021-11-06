//Styled
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;

  @media (max-width: 1500px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
 
`;
export const Description = styled(motion.div)`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;
  h2 {
    font-weight: 500;
  }
  .portfolio-resume{
    margin-bottom: 20px;
    a{
    text-decoration: none;
    padding: 15px;
    font-weight: 500;
    font-size: 20px;
    color: black;
  }
  a:hover{
    background-color: #F15A5C;
    color: white;
    transition: all ease 0.5s;
  }
  
  }
 
  @media (max-width: 1500px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }

`;
export const Image = styled(motion.div)`
  flex: 1;
  z-index: 2;
  overflow: hidden;
.profilePic{
  position: relative;
  left: 10%;
  margin-bottom: 80px;
  height: 70vh;
}

  img { 
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1500px) {
    img {
      width: 100%;
    }
  }
  @media (min-width:360px){
    width: 80%;
    margin: 0 auto;
    .profilePic{
      height: 30%;
    }
}
`;
