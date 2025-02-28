import React from 'react';
import styled from "styled-components";
import {useLanguage} from "../../hooks/useTranslate.jsx";


const TrustedBySection = () => {
    const {__i}=useLanguage()
    return (<Wrapper>

        <div className='container '>
            <h1>{__i("Trusted by 2500+ Company Worldwide")}</h1>
            <div className='brands'>

                <img src="src/assets/img/client_9-1536x768.png" alt=""/>
                <img src="src/assets/img/client_4-1536x768.png" alt=""/>
                <img src="src/assets/img/client_2-1536x768.png" alt=""/>
                <img src="src/assets/img/client_5-1536x768.png" alt=""/>
                <img src="src/assets/img/client_6-1536x768.png" alt=""/>
            </div>
        </div>

    </Wrapper>);
};
const Wrapper = styled.div`
  width: 100%;
  background-color: #000000;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px;

    h1 {

      font-size: 40px;
      font-weight: 300;
      color: #F5F5F5FF;
    }
  }

  .brands {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      margin: 20px;
      opacity: 1;
    }
  }

  @media (max-width: 966px) {
    .brands {
      flex-direction: column;
    }
  }

  .container {
    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 45px;
    }
  }

  @media (max-width: 425px) {
    .container {

      h1 {

        font-size: 30px;
     
      }
    }
`


export default TrustedBySection;