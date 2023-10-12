import React, { useEffect, useRef } from 'react';
import './WhyUsSection.css';
import Image1 from '../../images/idea_9746210.png';
import Image2 from '../../images/control_9746314.png';
import Image3 from '../../images/solution_9746252.png';
import Image4 from '../../images/achievement_9746327.png';
import Image5 from '../../images/effective_9746331.png';
import Image6 from '../../images/mentoring_9746287.png';


const WhyUsSection = () => {
  const imgContainerRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const textContent = [
    '<i class="fi fi-tr-rectangle-pro" style="color: white;"></i> Experts<br /> in IT Solutions',
    'Customized<br /> Services',
    'Cutting-Edge<br /> Technology',
    'Strong<br /> Reputation',
    'Cost-Effective<br /> Solutions',
    'Responsive<br /> Support',
  ];

  const Images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    
  ]

  useEffect(() => {
    const handleScroll = () => {
      imgContainerRefs.forEach((ref, index) => {
        if (ref.current) {
          const elementTop = ref.current.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (elementTop < windowHeight && index%2===0) {
            ref.current.classList.add('slide-in-to-left');
          }
          else if(elementTop < windowHeight && index%2!==0){
            ref.current.classList.add('slide-in-to-right');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="why-us-section" id="why-us-section">
      <div className='why-us-title'>
        <h1>Why us?</h1>
      </div>
      {imgContainerRefs.map((ref, index) => (
        index%2===0 ?
        (<div className={`circle`} key={index} ref={ref}> 
            <p className='advantage-text' dangerouslySetInnerHTML={{ __html: textContent[index] }}></p>
          </div>) :
        (
        <div className={`circle`} key={index} ref={ref}> 
          <p className='advantage-text' dangerouslySetInnerHTML={{ __html: textContent[index] }}></p>
        </div>
        ) 
        
      ))}
    </div>
  );
};

export default WhyUsSection;
