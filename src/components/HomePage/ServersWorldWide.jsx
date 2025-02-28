import React from 'react';
import styled from "styled-components";
import {Maps} from "../../assets/svg/Index.js";
import {useLanguage} from "../../hooks/useTranslate.jsx";

const ServersWorldWide = () => {
    const {__i} = useLanguage();
    return (<Wrapper>
            <div className='container'>
                <div className='service'>
                    SERVERS WORLDWIDE
                </div>

                <h2>{__i('Luxurious, Grand, Spacious,')}<br/>
                    {__i('Always Uptime')}</h2>


                <Maps className='maps'/>

            </div>
        </Wrapper>);
};
const Wrapper = styled.div`
  width: 100%;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    position: relative;
    padding: 50px;

    h2 {
      margin-bottom: 150px;
      color: white;
      font-size: 60px;
      text-align: center;
    }

  }

  .maps {

    position: absolute;
    left: 50%;
    right: 50%;
    bottom: 0;
  }

  .service {
    color: #FF885B;
    margin-top: 20px;
  }

  @media (max-width: 1430px ) {
    .container{
    display: none;
    }
  }
 

`
export default ServersWorldWide;