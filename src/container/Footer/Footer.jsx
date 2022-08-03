import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import { images } from '../../constants';

import { FooterOverlay, Newsletter} from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>742 de Evergreen Terrace</p>
        <p className='p__opensans'>+57 123-456-7890</p>
        <p className='p__opensans'>+57 321-654-0987</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer_logo' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <img src={images.spoon} className='spoon__img' style={{ marginTop: 15 }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className='footer_copyright'>
      <p className='p__opensans'>2022 HappyFeed. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
