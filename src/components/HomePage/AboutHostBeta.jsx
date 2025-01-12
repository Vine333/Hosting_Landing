import React from 'react';
import styled from "styled-components";
import Button from "../common/Button.jsx";
import {AboutImg} from "../../assets/svg/index.js";
import {ICDaily, ICStorage} from "../../icons/index.js";
import {useLanguage} from "../../hooks/useTranslate.jsx";

const AboutHostBeta = () => {

    const {__i,language}=useLanguage()
    const gapValue = language === 'RU' ? '30px' : '70px';
    return (
        <Wrapper>
            <div className='container'>
                <div className='imgJump'>
                    <AboutImg/>
                    <div className='storage'>
                        <ICStorage/>
                        <p>{__i('200 GB+ Storage')}</p>
                    </div>
                    <div className='visitors'>
                        <ICDaily width={64} height={64}/>
                        <p>{__i("500K+ Daily Visitors")}</p>
                    </div>
                </div>
                <div className='perfectDigital'>
                    <div className='about'>
                        ABOUT HOST BETA
                    </div>

                    <h1>{__i('The Perfect Digital Connection')}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur adipiscing.</p>
                    <div className='column'>
                        <div className='column1'>
                            <div><a href="">{__i('Faster Process')}</a></div>
                            <div><a href="">{__i('Faster Access')}</a></div>
                        </div>
                        <div className='column2' style={{gap:gapValue}}>
                            <div><a href="">{__i("Faster Delivery")}</a></div>
                            <div><a href="">{__i('24/7 Full Support')}</a></div>
                        </div>
                    </div>
                    <Button className='btnDigital'>
                        {__i("Discover More")}
                    </Button>
                </div>

            </div>


        </Wrapper>
    );
};
const Wrapper = styled.div`
  width: 100%;

  .container {
    margin: 0 auto;
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    max-width: 1440px;

    img {
      padding-top: 30px;
      position: relative;
    }

  }

  .storage {
    position: absolute;
    top: 200px;
    left: 30px;
    width: 50%;
    padding: 5px;

    p {
      padding-left: 20px;
      font-size: 20px;
      font-weight: 500;
    }

    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #FF885B;
  }

  .visitors {
    padding: 5px;
    position: absolute;
    bottom: 200px;
    left: 300px;
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #FF885B;

    p {
      padding-left: 20px;
      font-size: 20px;
      font-weight: 500;
    }
  }

  .btnDigital {
    margin-top: 20px;
    background-color: #FF885B;
    border: none;
    width: 150px;
    height: 70px;
  }

  .perfectDigital {
    display: flex;
    flex-direction: column;
    text-align: start;
    padding-right: 100px;
    align-self: flex-start;
    padding-top: 50px;
    gap: 30px;
    padding-left: 50px;
    width: 50%;

    h1 {
      font-size: 40px;
      margin: 0;

    }

    p {
      font-size: 20px;
      color: rgba(211, 211, 211, 0.39);
      margin: 0 0 60px 0;

    }

  }

  .about {
    color: #FF885B
  }

  .column {
    display: flex;
    justify-content: space-between;
    align-items: start;
    text-align: left;
    gap: 50px;
  }

  .column1 {
    display: flex;
    flex-direction: column;
    gap: 70px;
    font-size: 25px;

    a {
      color: #FF885B;
    }
  }

  .column2 {
    display: flex;
    flex-direction: column;
    padding-right: 10px;
    font-size: 25px;
    

    a {
      color: #FF885B;
    }
  }

  .imgJump {
    position: relative;
    padding-left: 100px;
  }

  @media (max-width: 1171px) {
    .perfectDigital {
      padding: 50px;
      justify-content: center;
      align-items: center;
      align-self: center;
      width: 100%;
      order: 1;

      h1 {
        text-align: center;
      }

      p {
        text-align: center;
      }
    }

    .container {

      flex-direction: column;
    }

    .imgJump {
      margin-top: 20px;
      order: 2;
    }
  }
  @media (max-width: 675px) {
    .imgJump {
      display: none;
    }
  }
  @media (max-width: 501px) {
    .column {
      flex-direction: column;


    }

    .column1 {
      align-items: center;
      justify-content: center;

      order: 1;
    }

    .column2 {
      align-items: center;
      justify-content: center;

      order: 2;
    }

    .container {
      flex-direction: column;
      padding: 0;
    }

    .perfectDigital {
      padding: 10px;
    }
  }
  
  @media (max-width: 425px) {
    .perfectDigital {
      h1 {
        font-size: 30px;
        margin: 0;

      }
    }
`
export default AboutHostBeta;