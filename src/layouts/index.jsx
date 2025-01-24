import React from 'react';
import {Layout} from "antd";
import styled from "styled-components";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
const {Content} = Layout;


const AppLayout = ({children}) => {


    return (
        <Wrapper
            className="site-layout">

            <Header/>

            <Content >


                {children}
            </Content>
            <Footer/>
        </Wrapper>
    );
};

const Wrapper = styled(Layout)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #171420;

`
export default AppLayout;
