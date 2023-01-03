import React from 'react'
import arrowForwardIos from '@iconify/icons-material-symbols/arrow-forward-ios';
import { Icon } from '@iconify/react';
import './Styles/LandingBannerPage.css'
import { Link } from 'react-router-dom';

const LandingBannerPage = () => {
  return (
    <div className='landing-page-container'>
      <div className='landing-banner-img' />
      <div className='content-box'>
        <h1>Unlimited movies, TV shows and more.</h1>
        <h4>Watch anywhere. Cancel anytime.</h4>
        <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
        <div className='start-button'>
          <Link to="/movies" className='page-link'>
            Get Started
            <span>
              <Icon icon={arrowForwardIos} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingBannerPage