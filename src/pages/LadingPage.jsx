import { useState, useEffect } from 'react';
import BriefBlock from '../components/BriefBlock/BriefBlock';
import ContactUsSection from '../components/ContactUs/ContactUsSection';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ProjectsSection from '../components/Projects/ProjectsSection';
import ServicesSection from '../components/Services/ServicesSection';
import WhyUsSection from '../components/WhyUsSection/WhyUsSection';
import  LeadMagnet  from '../components/LeadMagnet/LeadMagnet';

const LandingPage = () => {
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLeadMagnet(true);
    }, 60000); 

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Header />
      <WhyUsSection />
      <ServicesSection />
      <ProjectsSection />
      <div id="contact-us">
        <ContactUsSection />
      </div>
      {showLeadMagnet && <LeadMagnet closePopup={() => setShowLeadMagnet(false)} />}
      <BriefBlock />
      <FAQ />
      <Footer />
    </>
  );
}

export default LandingPage