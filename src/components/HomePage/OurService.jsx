import React from 'react';
import styled from "styled-components";
import {ICWord, ICCloud, ICWorld, ICDomain, ICDefends, ICStorage} from "../../icons/index.js";


const OurService = () => {
    return (<Wrapper>
        <div className='container'>
            <div className='ourService'>
                OUR SERVICE
            </div>
            <h1>Discover Luxury in Web<br/>Hosting</h1>
            <div className='content'>
                <div className='line1'>
                    <div className='card'>
                        <ICWord style={{scale: '2'}}/>
                        <h3>World Hosting</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                    </div>
                    <div className='card'>
                        <ICCloud style={{scale: '2'}}/>
                        <h3>Cloud Hosting</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nobis!</p>
                    </div>
                    <div className='card'>
                        <ICWorld style={{scale: '2'}}/>
                        <h3>Website Hosting</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, doloribus!</p>
                    </div>
                </div>
                <div className='line2'>
                    <div className='card'>
                        <ICDomain style={{scale: '2'}}/>
                        <h3>Free Domain</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, ratione?</p>
                    </div>
                    <div className='card'>
                        <ICDefends style={{scale: '2'}}/>
                        <h3>SSL Service</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, nesciunt.</p>

                    </div>
                    <div className='card'>
                        <ICStorage style={{scale: '2'}}/>
                        <h3>Clouds VPS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cumque.</p>
                    </div>
                </div>
            </div>

        </div>
    </Wrapper>);
};
const Wrapper = styled.div`

  width: 100%;

  .container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 30px;
    max-width: 1440px;

    h1 {
      color: white;
      text-align: center;
      font-size: 50px;
    }
  }

  .ourService {
    color: #FF885B;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .line1 {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    padding-bottom: 15px;
  }

  .line2 {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    padding-bottom: 15px;
  }

  .card {
    width: 300px;
    height: 300px;
    background-color: #3b3a3a;
   // background-color:#5f8cc7 ; под вопросом ?
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    padding: 25px;

    h3 {
      color: white;
      font-size: 25px;
    }

    p {
      color: white;
      font-size: 15px;
    }

  }
  @media(max-width: 945px){
    .line1{
      width: 100%;
      order: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .line2{
      width: 100%;
      order: 2;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .card{
      height: 100px;
      width: 75%;     
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 15px;
      p{
        width: 30%;
      }
      h3{
        width: 40%;
      }
      
    }
    .content{
      justify-content: center;
      align-items: center;
    }
  }
  @media(max-width: 722px){
    .card{
      gap: 50px;
      p{
        display: none;
      }
      h3{
        width: 50%;
      }
    }
    .line1{
      width: 100%;
    }
    .line2{
      width: 100%;
    }
  }

`
export default OurService;