import React from 'react';
import styled from "styled-components";
import Button from "../common/Button.jsx";

import {ICCheckMark} from "../../icons/index.js";
import StartImg from "../../assets/svg/StartImg.jsx";
import {useLanguage} from "../../hooks/useTranslate.jsx";

const GetStarted = () => {
    const {__i}=useLanguage()
    return (<Wrapper>
        <div className='container'>
            <div className='title'>
                <div className='getstart'>GET STARTED</div>
                <div className='descriptions'>
                    <h2>{__i(" Let's Start Here! New")}
                        <br/>
                        {__i(" Space for World")}
                    </h2>
                    <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur laudantium maxime nobis quos, voluptate voluptatibus!
                        </span>

                </div>
                <div className='btnContainer'>
                    <Button className='btnStart'>
                        {__i('Get Started')}
                    </Button>
                    <Button className='btnHost'>
                        {__i('Hosting Plans')}
                    </Button>
                </div>

            </div>
            <div className='img'>
                <div className='card'>
                    <div>
                        <div className=' check'>✓</div>
                        {__i('Unlimited Bandwidth')}
                    </div>
                    <div>
                        <div className=' check'>✓</div>
                        {__i('Super Turbo Power')}
                    </div>
                    <div>
                        <div className=' check'>✓</div>
                        {__i("24/7 Full Support")}
                    </div>

                </div>
                <StartImg className='imgStart'/>
            </div>
        </div>
    </Wrapper>);
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #1f1d2c;

  .container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;

    .btnContainer {
      gap: 15px;
      display: flex;
    }

  }

  .ellipse {
    bottom: 0;

    position: absolute;
  }

  .getstart {
    color: #FF885B;
    margin-bottom: 10px;
  }

  .descriptions {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    gap: 30px;

    h2 {
      font-size: 40px;
      color: white;
      margin: 0;
    }

    span {
      color: lightgrey;
      margin: 0;
      font-size: 20px;
    }

  }

  .img {
    width: 100%;
    position: relative;
    height: 100%;
    background-color: rgba(59, 58, 58, 0.2);
    
    left: 20px;

  }

  .card {
    div {
      gap: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .check {
        color: #FF885B;
      }
    }

    padding: 20px;
    width: 100%;
    height: 500px;
    position: absolute;


    div {
      color: white;

    }

  }

  .btnContainer {
    margin-top: 20px;

    .btnStart {

      background-color: #FF885B;
      border: none;
      width: 150px;
      height: 70px;
    }

    .btnHost {
      width: 150px;
      height: 70px;
    }
  }

  @media (max-width: 764px) {
    .container {
      flex-direction: column;
      gap: 20px;
    }

   
  }
  @media (max-width: 1107px ) {
    .container {
      flex-direction: column;
      gap: 20px;
    }

    .title {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;

      h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
      }
    }
    .img{
      width: 50%;
    }
    svg{
      width: 500px;
    }
  }
  
  @media(max-width: 1024px)
  {
  svg{
    width: 450px;
  }  
  } 
  @media (max-width: 1000px) {
  svg{
    width: 350px;
    padding: 20px;
  }
  }
  @media(max-width: 712px){
    svg{
   display: none;
    }
    .card
    {
      display: none;
    }
  }
  @media(max-width: 425px){
    .title {

      h2 {
        font-size:30px ;
      }
  }
`

export default GetStarted;