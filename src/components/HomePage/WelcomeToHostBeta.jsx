import React from 'react';
import styled from "styled-components";
import {Button} from "antd";
import {ICSupport, ICPowerFull, ICDefends,} from '/src/icons/index.js'
import {MainImg} from '/src/assets/svg/Index.js'
import {useLanguage} from "../../hooks/useTranslate.jsx";


const WelcomeToHostBeta = () => {
    const {__i}=useLanguage()
    return (<Wrapper>
        <div className='containerSmartCompany'>
            <div className='descriptionSmart'>
                <div className='welcome'>

                    WELCOME TO HOST BETA
                </div>
                <div className='smartCompanyTitle'>
                    <h1 className='titleSmart'>
                        {__i("Smart Company")}<br/>
                        {__i("With Perfect")}<br/>
                        {__i('Web Space')}
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum magni obcaecati temporibus.
                        Architecto cumque est fugiat, magni, nam nostrum, obcaecati qui saepe voluptate voluptates
                        voluptatum.</p>
                    <div className='btn'>
                        <Button defaultHoverBg='#FF885B' className='btnStart'>{__i("Get Start")}</Button>
                        <Button defaultHoverBg='transparent' className='btnHosting'> {__i("Hosting Plans")}</Button>
                    </div>
                    <div className='review'>
                        <div className='positive'>
                            <h2>800</h2>
                            <p>{__i("Positive Reviews")}</p>
                        </div>
                        <div className='active'>
                            <h2>550</h2>
                            <p>{__i("Active Hosting")}</p>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>

            <div className='mainImg'>
                <MainImg/>

                <div className='def'>
                    <div>
                        <div style={{display: "flex"}}>
                            <ICDefends/>
                            <h3 style={{padding: '5px', margin: "0", fontSize: '25px'}}>{__i('Premium SSL')}</h3>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                    <div>
                        <div style={{display: "flex"}}>
                            <ICSupport/>
                            <h3 style={{padding: '5px', margin: "0", fontSize: '25px'}}>{__i("24/7 Support")}</h3>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>

                </div>
                <div className='wifi'>
                    <div style={{display: "flex"}}>
                        <ICPowerFull/>
                        <h3 style={{padding: '5px', margin: "0", fontSize: '25px'}}>{__i("Powerfull Server")}</h3>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>

            </div>
        </div>


    </Wrapper>);
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
  .btnHosting {
    font-size: 15px;
    font-weight: 500;
    width: 150px;
    height: 44px; 
    background-color:transparent ;
    border: 1px solid #FF885B;
    color: #ffffff;
    border-radius: 7px;
    }
  .ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):hover, :where(.css-dev-only-do-not-override-apn68).ant-btn-variant-dashed:not(:disabled):not(.ant-btn-disabled):hover {
    border: 1px solid #FF885B;
    color: #ffffff;
    scale: 105%;
    transition: 0.2s;
    background: none;
  }
  .btnStart {
    margin-right: 10px;
    background-color: #FF885B;


    font-size: 15px;
    font-weight: 500;
    width: 150px;
    height: 44px;

    border: 1px solid #FF885B;
    color: #ffffff;
    border-radius: 7px;
    &:hover{
      background: #FF885B !important;
    }
  }


  .mainImg {
    padding-right: 50px;
    padding-bottom: 70px;
    position: relative;
    display: flex;
  }

  .review {
    display: flex;
  }

  .positive {

    h2 {
      margin-top: 15px;
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
      margin-top: 15px;
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
    .mainImg {
      z-index: 0;
    }

    .containerSmartCompany {
      z-index: 20;
    }

  }
  @media (max-width: 1160px) {
    .containerSmartCompany {
      flex-direction: column;

      .smartCompanyTitle {
        order: 1;

        h1 {
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;

        }

        p {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-inline: 10px;
          width: 50%;
          text-align: center;
          margin: 0 auto;
          padding-bottom: 20px;
        }

        .btn {

          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .review {
        margin-top: 15px;
        justify-content: center;
        align-items: center;

        h2 {
          display: flex;
          justify-content: center;
          margin: 0;
        }

        p {
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .positive {

        p {
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    @media (max-width: 1050px) {
      .smartCompanyTitle {
        order: 1;

        h1 {
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;

        }

        p {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-inline: 10px;
          width: 50%;
          text-align: center;
          margin: 0 auto;
          padding-bottom: 20px;
        }

        .btn {

          display: flex;
          justify-content: center;
          align-items: center;
        }

        .review {
          margin-top: 15px;
          justify-content: center;
          align-items: center;

          h2 {
            display: flex;
            justify-content: center;
            margin: 0;
          }

          p {
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .positive {

          p {
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }

      .mainImg {
        order: 2;
      }

      .containerSmartCompany {
        flex-direction: column;

      }

      .descriptionSmart {
        width: 100%;
        padding: 10px;
        justify-content: center;
        align-items: center;
      }

    }

    @media (max-width: 700px) {
      .mainImg {
        padding: 0;

      }

      .def {
        right: -5%;
      }

      .wifi {
        right: 40%;
      }
    }
    @media (max-width: 679px) {
      .mainImg {
        display: none;
      }

    }
    @media (max-width: 425px) {
      .mainImg {
        display: none;
      }

      .smartCompanyTitle {
        h1 {
          font-size: 30px;
          font-style: italic;
        }
      }
    }
  }
`


export default WelcomeToHostBeta;