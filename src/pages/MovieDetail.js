import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ProjectState } from '../ProjectStates';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

import Gallery from 'react-grid-gallery'


const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects, setProjects] = useState(ProjectState);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.filter((stateMovie) => stateMovie.url === url);
    setProject(currentProject[0]);
  }, [projects, url]);

  return (
    <>
      {project && (
        <Details
          variants={pageAnimation}
          exit="exit"
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{project.title}</h2>
            <div className="line"></div>
            <img src={project.mainImg} alt=""  />
          </HeadLine>
          <StyledDetails>
          <img src={project.secondaryImg} alt="" />
          <p>{project.description}</p>
          </StyledDetails>
          <SecondImage>
            <div>
              <div className="detail-text"> 
                    <p>{project.secondDescription}</p>
              </div>
            </div>
            <img src={project.thirdImg} alt="" />
          </SecondImage>
          <div className="skillnduration">
          <h3><span>Duration :</span>{project.duration}</h3>
          <h3><span>skills :</span>{project.skills}</h3>
          </div>
          <StyledGallery>
            <h1>Gallery</h1>
          <Gallery images={project.images}/>
         </StyledGallery>
         
        </Details>
      )}
      <ScrollTop />
    </>
  );
};

const StyledGallery = styled.div`
h1{
  color: black;
  font-size: 3rem;
  text-align: center;
  font-family: 'Inter', sans-serif;
  margin-bottom: 20px;
}
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  margin-top: 150px;
  height: 70vh;
`
const StyledDetails= styled.div`
display: flex;
  margin-top: 10em;
p{
  padding: 50px;
  color: black;
  background-color: #e6e6e68b;
  border: 3px solid black;
  text-align: justify;
}
@media (max-width:500px){
  flex-wrap: wrap;
  margin-left: 0;
  margin-top: 0;
    h2{
      font-size: 1rem;
    }
    img{
    height: 40vh;
    width: 100%;
    object-fit: cover;
    }
    .line{
      margin-bottom: 1rem;
    }
  }

`
const Details = styled(motion.div)`
 .skillnduration{
  padding: 50px;
  width: 80%;
  margin: auto;
  background-color: #e6e6e67d;
  border: 3px solid black;
  margin-top: 100px;
  h3{
    color: black;
    
  }
  span{
    font-weight: 800;
  }
  @media (max-width:500px){
    
    h2{
      font-size: 2rem;
    }
  }
 }
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  .line {
    width: 50%;
    background: #F15A5C;
    height: 0.5rem;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  @media (max-width:500px){
    
    h2{
      font-size: 2rem;
    }
    img{
      height: 40vh;
    }
    .line{
      margin-bottom: 1rem;
    }
  }

`;

const SecondImage = styled.div`
display: flex;
margin-top: 10em;
.detail-text{
  padding: 50px;
  background-color: #e6e6e67d;
  border: 3px solid black;
  width: 100%;
  }
  p{
    color: black;
  }
  @media (max-width: 480px){
    margin-top: 5em;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    img{
    height: 40vh;
    width: 100%;
    object-fit: cover;
    }
}
`
export default MovieDetail;
