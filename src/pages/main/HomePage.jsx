import React from 'react';
import styled from "styled-components";
import AppLayout from "../../layouts";
import WelcomeToHostBeta from "../../components/HomePage/WelcomeToHostBeta.jsx";
import TrustedBySection from "../../components/HomePage/TrustedBySection.jsx";
import AboutHostBeta from "../../components/HomePage/AboutHostBeta.jsx";
import OurService from "../../components/HomePage/OurService.jsx";
import OurCapabilities from "../../components/HomePage/OurCapabilities/OurCapabilities.jsx";
import ServersWorldWide from "../../components/HomePage/ServersWorldWide.jsx";
import Testimonials from "../../components/HomePage/Testimonials.jsx";
import GetStarted from "../../components/HomePage/GetStart/GetStarted.jsx";
import NewSletter from "../../components/HomePage/NewSletter.jsx";



const HomePage = () => {
    return (<AppLayout>
        <Wrapper>

            <WelcomeToHostBeta/>
            <TrustedBySection/>
            <AboutHostBeta/>
            <OurService/>
            <OurCapabilities/>
            <ServersWorldWide/>
            <Testimonials/>
            <GetStarted/>
            <NewSletter/>

        </Wrapper>
    </AppLayout>);
};


const Wrapper = styled.div`
  width: 100%;
 


`


export default HomePage;