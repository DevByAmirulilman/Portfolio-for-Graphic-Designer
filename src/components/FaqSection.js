import React from 'react';
import { About } from '../styles';
import styled from 'styled-components';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
//Scroll animation
import { reveal } from '../animation';
import { useScroll } from './useScroll';
import pastWork from '../pastWork'
const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      transition={{ duration: 0.5 }}
      ref={element}
      animate={controls}
      initial="hidden"
      variants={reveal}
    >
      <h2>
        About me? <span>FAQ</span>
      </h2>

      <AnimateSharedLayout>
      <Toggle title="Experience">
          <div className="answer">
        {
           pastWork.map((works)=>
           <div>
           <p><span>{'\u2022'}{works.title}</span>{works.subTitle}</p>
           <p><span>{works.role}</span>{works.details}</p>
           </div>
           )
        }
          </div>
        </Toggle>
        <Toggle title="My age and Date of birth?"> 
          <div className="answer">
            <p>I am currently 30 years old</p>
            <p>
             I was born in 29 October 1991
            </p>
          </div>
        </Toggle>
        <Toggle title="What are my education?">
          <div className="answer">
            <p> <span> University of Kuala Lumpur (2015-2019)</span> Degree In Product Design Engineering </p>
            <p><span>Politeknik Kota Bharu (2010-2013)</span> Diploma In Mechanical Engineering</p>
            <p><span>Sek. Men. Keb. Tengku Mahmud 1 (2008)</span>SPM</p>
          </div>
        </Toggle>


      </AnimateSharedLayout>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  margin-top: 100px;
  h2 {
    font-weight: lighter;
    color: black;
  }
  .faq-line {
    background: #F15A5C;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .answer {
    padding: 10px 0rem;
    p {
      padding: 1rem 0rem;
    }
    span{
      color:black;
    }
  }
`;

export default FaqSection;
