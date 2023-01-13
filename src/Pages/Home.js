import React from 'react'
import { Accordion, LandingBannerPage, LandingDeviceInfo } from '../Components/LandingPage/Index/index'
import { MainFooter } from "../Components/Main/Index/index";


const Home = () => {
    return (
        <div id='home'>
            <LandingBannerPage />
            <LandingDeviceInfo />
            <Accordion />
            <MainFooter />
        </div>
    )
}

export default Home