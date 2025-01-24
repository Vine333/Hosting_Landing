import React from 'react';
import styled from "styled-components";
import {ICCheckMark, ICElementor, ICGit, ICLaravel, ICWord} from "../../icons/index.js";
import {Button} from "antd";
import {useLanguage} from "../../hooks/useTranslate.jsx";


const OurCapabilities = () => {
    const {__i} = useLanguage();
    return (<Wrapper>
        <div className='container'>
            <div className='label'>
                <div className='card'>
                    <ICWord/>
                    <h3>Wordpress</h3>
                </div>
                <div className='card'>
                    <ICGit/>
                    <h3>Github</h3>
                </div>
                <div className='card'>
                    <ICLaravel/>
                    <h3>Laravel</h3>
                </div>
                <div className='card'>
                    <ICElementor/>
                    <h3>Elementor</h3>
                </div>
            </div>
            <div className='descriptions'>
                <div className='capabilities'>
                    OUR CAPABILITIES
                </div>
                <h1>{__i("From Skyline to the Shoreline")},<br/>
                    {__i('We Are There')}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Accusantium aut id impedit maiores
                    perspiciatis reiciendis.</p>
                <div className='details'>
                    <div className='column1'>
                        <div className='item'>
                            <ICCheckMark/>
                            {__i("Unlimited Bandwidth")}
                        </div>
                        <div className='item'>
                            <ICCheckMark/>
                            {__i('Super Turbo Power')}
                        </div>
                    </div>
                    <div className='column2'>
                        <div className='item'>
                            <ICCheckMark/>
                            {__i('Unlimited Site')}
                        </div>
                        <div className='item'>
                            <ICCheckMark/>
                            {__i("24/7 Full Support")}
                        </div>
                    </div>
                </div>
                <Button className='btn'>
                    {__i('More Detail')}
                </Button>
            </div>
        </div>
    </Wrapper>);
};
const Wrapper = styled.div`
  width: 100%;


  .container {
    margin: 0 auto;
    padding-top: 40px;
    max-width: 1440px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .label {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px;

    h3 {
      color: white;
      font-size: 20px;
    }
  }

  .card {
    width: 440px;
    height: 100px;
    background-color: #3b3a3a;
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: flex-start;

    h3 {
      padding-left: 50px;
    }
  }

  .descriptions {
    display: flex;
    justify-content: left;
    align-items: flex-start;
    flex-direction: column;

    width: 60%;

    h1 {
      margin: 0;
      color: white;
      font-size: 40px;
    }

    p {
      margin: 0 0 50px;
      font-size: 20px;
      color: rgba(211, 211, 211, 0.39);
    }
  }

  .capabilities {
    color: #FF885B;
  }

  .details {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-bottom: 20px;
  }

  .column1 {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    color: #FF885B;
  }

  .column2 {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    color: #FF885B;
  }

  .btn {
    font-weight: 500;
    font-size: 15px;
    margin-top: 20px;
    background-color: #FF885B;
    border: none;
    width: 150px;
    height: 70px;
    color: #FFFFFF !important;
    &:hover{
      scale: 105%;
      
    }
  }
  :where(.css-dev-only-do-not-override-apn68).ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):active, :where(.css-dev-only-do-not-override-apn68).ant-btn-variant-dashed:not(:disabled):not(.ant-btn-disabled):active{
    border: #FF885B;
    background: #FF885B;
  }
  @media(max-width: 1024px){
    .descriptions {
      justify-content: center;
      align-items: center;
      .item{
        
      }
    }
  }
  @media (max-width: 946px) {
    .container {
      flex-direction: column;
    }

    .descriptions {
      justify-content: center;
      align-items: center;
      text-align: center;
      order: 1;
      .item{
        font-size: 15px;
      }
    }

    .label {
      order: 2;
      width: 100%;
    }

    .column1 {
      text-align: start;

    }

    .column2 {
      text-align: start;
    }
  }
  @media (max-width: 471px) {
    .card {
      width: 100%;
    }
  }
  @media (max-width: 425px) {
    .descriptions {

      padding: 10px;
      width: 100%;

      h1 {
        margin: 0;
        color: white;
        font-size: 30px;
      }
    }
  }
`
export default OurCapabilities;