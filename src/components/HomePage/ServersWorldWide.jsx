import React from 'react';
import styled from "styled-components";
import {Maps} from "../../assets/svg/Index.js";

const ServersWorldWide = () => {
    return (
        <Wrapper>
            <div className='container'>
                <div className='service'>
                    SERVERS WORLDWIDE
                </div>

<h2>Luxurious, Grand, Spacious,<br/>
    Always Uptime</h2>


                    <Maps  className='maps'/>

            </div>
        </Wrapper>
    );
};
 const Wrapper = styled.div`
 width: 100%;
   .container{
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;     
     margin: 0 auto;
     position: relative;
     padding: 50px;
     h2{
       margin-bottom: 150px;
      color: white;
       font-size: 60px;
       text-align: center;
     }
     
   }
   .maps{
     
     position: absolute;
     left: 50%;
     right: 50%;
     bottom: 0;
   }
   .service{
     color: #FF885B;
     margin-top: 20px;
   }
   @media(max-width: 1300px ){
    svg{
      width: 1000px;
      height: 637px;
    }
   }
   @media(max-width: 1000px ){
     svg{
       width: 700px;
       height: 437px;
     }
   }
   @media(max-width: 721px ){
     svg{
       width: 500px;
       height: 237px;
     }
   }
   @media(max-width: 497px ){
     svg{
       width:575px;
       height: 200px;
     }
   }
   @media(max-width: 424px ){
     svg{
       display: none;
     }
   }
 `
export default ServersWorldWide;