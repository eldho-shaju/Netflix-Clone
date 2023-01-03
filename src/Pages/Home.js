import React from 'react'
import { Accordion, LandingBannerPage, LandingDeviceInfo } from '../Components/LandingPage/Index/Index'
import { MainFooter } from "../Components/Main/Index/Index";


const Home = () => {
    return (
        <div>
            <LandingBannerPage />
            <LandingDeviceInfo />
            <Accordion />
            <MainFooter />
        </div>
    )
}

export default Home