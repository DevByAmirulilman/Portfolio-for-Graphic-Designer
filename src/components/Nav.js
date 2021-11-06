import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import money from '../img/money.svg'

const Nav = () => {
  const history = useHistory();
  const activePath = history.location.pathname;
  return (
    <StyledNav>
      <div className="name-logo">
      <h1 className="name">Amirul Syafiq</h1>
      <img className="logosvg" src={money} alt="" />
      </div>
      <ul>
        <li>
          <Link to="/">1. About Me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: activePath === '/' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/work">2. My Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: activePath === '/work' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/contact">1. Contact Me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: activePath === '/contact' ? '50%' : '0%' }}
          />
        </li>
        
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: #9c9c9c;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  a {
    color: #000000;
    text-decoration: none;
  }
h1{
  color: #000000;
}
  @media (max-width: 1500px) {
    flex-direction: column;
    padding: 2rem 0rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
  @media (max-width: 480px){
    overflow: hidden;
    width: 100%;
    li{
      margin-left: -2rem;
    }
    
  }
  .name-logo{
    display: flex;
    align-items: center;
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #F15A5C;
  width: 5%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1500px) {
    left: 0%;
  }
`;

export default Nav;
