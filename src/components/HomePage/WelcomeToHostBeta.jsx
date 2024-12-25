import React from 'react';
import styled from "styled-components";
import Button from "../../components/common/Button.jsx";
import {Nigga} from "../../assets/svg/index.js";
import {ICSupport,ICPowerFull,ICDefends} from '/src/icons/index.js'



const WelcomeToHostBeta = () => {
    return (
        <Wrapper>
            <div className='containerSmartCompany'>
                <div className='descriptionSmart'>
                    <div className='welcome'>

                            WELCOME TO HOST BETA
                    </div>
                    <div className='smartCompanyTitle'>
                        <h1 className='titleSmart'>
                            Smart Company<br/>
                            With Perfect<br/>
                            Web Space
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum magni obcaecati temporibus. Architecto cumque est fugiat, magni, nam nostrum, obcaecati qui saepe voluptate voluptates voluptatum.</p>
                        <div className='btn'>
                            <Button className='btnStart'>Get Started</Button>
                            <Button className='btnHosting'> Hosting Plans</Button>
                        </div>
                        <div className='review'>
                            <div className='positive'>
                                <h2>800</h2>
                                <p>Positive Reviews</p>
                            </div>
                            <div className='active'>
                                <h2>550</h2>
                                <p>Active Hosting</p>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

                <div className='imageNiggaWithMac'>
                    <Nigga/>

                    <div className='def'>
                        <div >
                            <div style={{display:"flex"}}>
                                <ICDefends/>
                                <h3 style={{padding:'5px',margin:"0",fontSize:'25px'}}>Premium SSL</h3>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                        <div>
                            <div style={{display:"flex"}}>
                                <ICSupport/>
                                <h3 style={{padding:'5px',margin:"0",fontSize:'25px'}}>24/7 Support</h3>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>

                    </div>
                    <div className='wifi'>
                        <div style={{display:"flex"}}>
                            <ICPowerFull/>
                            <h3 style={{padding:'5px',margin:"0",fontSize:'25px'}}>Powerfull Server</h3>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>

                </div>
            </div>


        </Wrapper>
   );
};


const Wrapper = styled.div`
  width: 100%;

  .containerSmartCompany {
    margin: 0 auto;
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    max-width: 1440px;
  }

  .welcome {
    color: #FF885B;
  }

  .descriptionSmart {
    flex-direction: column;
    display: flex;
    width: 50%;
    padding-inline: 100px;
  }

  .smartCompanyTitle {
    h1 {
      font-size: 50px;
      font-style: italic;
    }
  }

  .btnStart {
    margin-right: 10px;
    background-color: #FF885B;
    border: none;

    &:hover {
      color: whitesmoke;
    }
  }

  .btnHosting {
    &:hover {
      color: whitesmoke;
    }
  }

  .imageNiggaWithMac {
    padding-right: 50px;
    position: relative;
    display: flex;
  }

  .review {
    display: flex;
  }

  .positive {
    h2 {
      font-size: 40px;
      font-weight: 350;
    }

    p {
      font-size: 20px;
      
      padding-right: 25px;
      font-style: italic;
      color: #FF885B;
    }
  }

  .active {
    h2 {
      font-size: 40px;
      font-weight: 350;
    }

    p {
      font-size: 20px;
      color: #FF885B;
      font-style: italic;
    }
  }

  .wifi {
    position: absolute;
    bottom: 0;
    right: 334px;
    background-color: #FF885B;
    padding: 20px;

  }

  .def {
    position: absolute;
    bottom: 0;
    right: 50px;
    background-color: #FF885B;
    padding: 16px;
  }

  @media (max-width: 1200px) {
    .imageNiggaWithMac {
      z-index: 0;
    }

    .containerSmartCompany {
      z-index: 20;
    }

  }
  @media(max-width: 1050px){
    .smartCompanyTitle{
      order: 1;
      h1{
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
       
      }
      p{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-inline: 10px;
        width: 50%;
        margin: 0 auto;
        padding-bottom: 20px;
        }
      .btn{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .review{
        justify-content: center;
        align-items: center;
        h2{
          display: flex;
          justify-content: center;
          margin: 0;
        }
        p{
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .positive{
        p{
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .imageNiggaWithMac{
      order: 2;
    }
  .containerSmartCompany{
    flex-direction: column;
    
  }
  .descriptionSmart{
    width: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
  }

  }
  
  @media(max-width: 700px){
    .imageNiggaWithMac{
      padding: 0;
      
    }
    .def{
      right: -5%;
    }
    .wifi{
      right: 40%;
    }
  }
  @media(max-width: 679px){
    .imageNiggaWithMac{
      display: none;
    }
    
  }
  @media(max-width: 425px){
    .imageNiggaWithMac{
      display: none;
    }
   
  }
`


export default WelcomeToHostBeta;