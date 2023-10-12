import React, { useState } from 'react';
import './ServicesSection.css';
import ListIcon from '../../images/task.png';
import BagIcon from '../../images/shopping-bag.png';
import PortfolioIcon from '../../images/briefcase.png';
import LayersIcon from '../../images/layers.png';
import PeopleIcon from '../../images/people.png';
import ServerIcon from '../../images/server.png';
import ForwardIcon from '../../images/forward.png';
import ClockIcon from '../../images/clock.png';
import CatalogIcon from '../../images/catalog.png';
import AimIcon from '../../images/aim.png';
import TrendIcon from '../../images/uptrend.png';
import AlertIcon from '../../images/caution.png';
import IdeaIcon from '../../images/creative-idea.png';
import ReasonList from './ReasonList';
import WantButton from './WantButton';


const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState('radio1');

  const handleRadioChange = (e) => {
    setSelectedService(e.target.id);
  };

  const reasons = [
    {
      title: 'Landing page',
      reasonList: [
        {
          reason: 'You want to present your own info product, service, book, etc.',
          icon: ListIcon,
        },
        {
          reason: 'You have a small number of <br />products (up to 8)',
          icon: BagIcon,
        },
        {
          reason: 'You need a short specialist portfolio<br /> or a business card site',
          icon: PortfolioIcon,
        }
      ]
    },

    {
      title: 'Multi-page website',
      reasonList: [
        {
            reason: 'You need more than one page on the site',
            icon: LayersIcon,
        },
        {
            reason: 'You are planning to create a blog and/or personal account',
            icon: PeopleIcon,
        },
        {
            reason: 'The site provides any other additional functionality',
            icon: ServerIcon, 
        },
      ]
    },

    {
      title: 'Online store',
      reasonList1: [
        {
          reason: 'Quickly find the right product',
          icon: ForwardIcon,
        },
        {
          reason: 'Place an order at any time',
          icon: ClockIcon,
        }
      ],
      reasonList2: [
        {
          reason: 'You have more than 8 products',
          icon: BagIcon,
        },
        {
          reason: 'You need a catalog, shopping cart, personal account, or other pages of this type',
          icon: CatalogIcon,
        }
      ]
    },

    {
      title: 'Site audit',
      reasonList: [
        {
            reason: 'See the mistakes you made',
            icon: AlertIcon,
        },
        {
            reason: 'Find the right approach to your customers',
            icon: AimIcon,
        },
        {
            reason: 'Increase the conversion rate by several times',
            icon: TrendIcon,
        },
        {
            reason: 'Get dozens of new ideas for your website',
            icon: IdeaIcon,
        },
      ]
    },

    {
      title: 'Personal consultation',
      reasonList: [
        {
          reason: 'The consultation lasts 1.5 hours in an online format',
          icon: ClockIcon,
        },
        {
          reason: 'You can specify additional questions about your business and, upon prior agreement, I will include them in our consultation',
          icon: IdeaIcon,
        },
      ]
    }
  ]

  return (
    <div className='services-section' id="services-section">
      <div className='services-title'>
        <h1>Services</h1>
      </div>
      <div className='services-window'>
        <div className='services-scrollbar'>
          <div className='services-buttons'>
            <input
              type='radio'
              className='radio1'
              id='radio1'
              name='services'
              checked={selectedService === 'radio1'}
              onChange={handleRadioChange}
              
            />
            <label htmlFor='radio1'>
              <div
                className={`service-button item scrolled ${
                  selectedService === 'radio1' ? 'active' : ''
                }`}
              >
                Landing page
              </div>
            </label>

            <input
              type='radio'
              className='radio2'
              id='radio2'
              name='services'
              checked={selectedService === 'radio2'}
              onChange={handleRadioChange}
            />
            <label htmlFor='radio2'>
              <div
                className={`service-button item scrolled ${
                  selectedService === 'radio2' ? 'active' : ''
                }`}
              >
                Multi-page website
              </div>
            </label>

            <input
              type='radio'
              className='radio3'
              id='radio3'
              name='services'
              checked={selectedService === 'radio3'}
              onChange={handleRadioChange}
            />
            <label htmlFor='radio3'>
              <div
                className={`service-button item scrolled ${
                  selectedService === 'radio3' ? 'active' : ''
                }`}
              >
                Online Store
              </div>
            </label>

            <input
              type='radio'
              className='radio4'
              id='radio4'
              name='services'
              checked={selectedService === 'radio4'}
              onChange={handleRadioChange}
            />
            <label htmlFor='radio4'>
              <div
                className={`service-button item scrolled ${
                  selectedService === 'radio4' ? 'active' : ''
                }`}
              >
                Site audit
              </div>
            </label>

            <input
              type='radio'
              className='radio5'
              id='radio5'
              name='services'
              checked={selectedService === 'radio5'}
              onChange={handleRadioChange}
            />
            <label htmlFor='radio5'>
              <div
                className={`service-button item scrolled ${
                  selectedService === 'radio5' ? 'active' : ''
                }`}
              >
                Individual consultation
              </div>
            </label>

           
          </div>
        </div>
        <div className='services-descriptions'>
        <ul className='service-description'>
							<li style={{ opacity: selectedService === 'radio1' ? 1 : 0 }} className='li'>
								<h2>Ideal for businesses that need a short but informative presentation</h2>
                <p>Thanks to the convenience of this format, you can easily provide the user with all the important information and quickly lead them to a purchase</p>
						    <h3>Choose this type of website if:</h3>
                <ReasonList reasonList={reasons[0].reasonList}></ReasonList>
                <WantButton></WantButton>
               </li>
							<li style={{ opacity: selectedService === 'radio2' ? 1 : 0 }} className='li'>
                <h2>A huge field for creativity</h2>
                <p>You can use any number of pages to tell about your business, showcase your product, present your company, or simply share useful information</p>
						    <h3>Choose this type of website if:</h3>
								<ReasonList reasonList={reasons[1].reasonList}></ReasonList>
                <WantButton></WantButton>
						    </li>
							<li style={{ opacity: selectedService === 'radio3' ? 1 : 0 }} className='li'>
                <h2>A user-friendly business website that will allow users to:</h2>
                <ReasonList reasonList={reasons[2].reasonList1}></ReasonList>
                <p>A catalog, convenient filtering, a personal account, and a well-thought-out interface will definitely increase the number of your customers thanks to comfortable use and easy checkout</p>
						    <h3>Choose this type of website if:</h3>
                <ReasonList reasonList={reasons[2].reasonList2}></ReasonList>
                <WantButton></WantButton>
						    </li>
							<li style={{ opacity: selectedService === 'radio4' ? 1 : 0 }} className='li'>
                <h2>Detailed audit of your website for all possible parameters</h2>
                <p>The audit considers: design, text, conversion, technical data, search engine indexing, and many other characteristics</p>
						    <h3>An audit will help you:</h3>
								<ReasonList reasonList={reasons[3].reasonList}></ReasonList>
                <WantButton></WantButton>
						    </li>
              <li style={{ opacity: selectedService === 'radio5' ? 1 : 0 }} className='li'>
              <h2>The perfect start to promote your business on the Internet</h2>
              <p>In addition to a ready-made foundation for your own website, you will receive recommendations that will help you quickly achieve success in promoting your business</p>
              <ReasonList reasonList={reasons[4].reasonList}></ReasonList>
              <WantButton></WantButton>
              </li>

					    </ul>
          </div>
      </div>
    </div>
  );
};

export default ServicesSection;
