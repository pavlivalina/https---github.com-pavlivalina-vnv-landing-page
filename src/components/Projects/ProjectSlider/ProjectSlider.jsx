import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import Site1 from '../../../images/site1.png';
import Site2 from '../../../images/site2.png';
import Site3 from '../../../images/site3.png';


import "./ProjectSlider.css";


const data = [
  {
    src: Site1, 
    alt: "",
    title: "Web-Service",
    text: "Lernitlive - webservice for coaches and experts where they can teach online. In easy words - it is a marketplace with some more functionality to pass courses and take classes. You can look throug the courses, choose your coach, according to his rate and reviews. Functionality: you can register,buy classes, chat with your coach and leave reviews.",
  },
  {
    src: Site2, 
    alt: "",
    title: "Delivery Service",
    text: "Iren Banquet Hall - Delivery service for tasty food from Iren. You can register, order and pay not leaving the website!",
  },
  {
    src: Site3, 
    alt: "",
    title: "Marketplace",
    text: "Volstiny production - Marketplace for a Designers agency. Powerful and creative website for powerfull creators. Unique design, a lot of animations and internal marketplace - website is faster than a Forest Gump and ready for a SEO adcampaigns.",
  }
]

const ProjectSlider = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <AiOutlineArrowLeft 
        onClick={prevSlide} 
        className="arrow arrow-left"
       /> 
      {data.map((item, idx) => {
        return (
          <div className={slide === idx ? "slide" : "slide slide-hidden"}>
              <img
                src={item.src}
                alt={item.alt}
                key={idx}
                className="slide-img"
              />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
          </div>
        );
      })}
      <AiOutlineArrowRight
        onClick={nextSlide}
        className="arrow arrow-right"
      />
    </div>
  );
};


export default ProjectSlider