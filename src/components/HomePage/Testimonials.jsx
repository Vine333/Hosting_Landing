import React from 'react';
import styled from "styled-components";
import {Button} from "antd";
import ICStars from "../../icons/ICStars";
import videoSrc from '/src/assets/img/coverr-a-productive-morning-4822-4_3-1080p.mp4';
import {useLanguage} from "../../hooks/useTranslate.jsx";


const Testimonials = () => {
    const {__i} = useLanguage()

    return (<Wrapper>
        <div className='container'>
            <div className='testimon'>
                TESTIMONIALS
            </div>
            <div className="title">
                <h2>
                    {__i(" What Customers Say")}<br/>
                    {__i("About Us")}
                </h2>
                <Button className='btn'>
                    {__i('View More')}
                </Button>
            </div>
            <div className='cards'>
                <div className='frame'>
                    <video loop autoPlay muted>
                        <source src={videoSrc} type='video/mp4'/>
                    </video>
                </div>
                <div className='card'>
                    <div className='sts'>
                        <ICStars/>
                        <ICStars/>
                        <ICStars/>
                        <ICStars/>
                        <ICStars/>
                        <div>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi illo laudantium obcaecati odit quidem sint tenetur? Commodi, necessitatibus quidem.</span>
                        </div>
                    </div>
                    <div className='avatar'>
                        <img src="src/assets/img/Ellipse 13.png" alt=""/>
                        <div className='name'>
                            <h5>Celeb Paul</h5>
                            <p>Company CEO</p>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='sts'>
                        <ICStars/>
                        <ICStars/>
                        <ICStars/>
                        <ICStars/>
                        <ICStars/>
                        <div>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi illo laudantium obcaecati odit quidem sint tenetur? Commodi, necessitatibus quidem.</span>

                        </div>
                    </div>
                    <div className='avatar'>
                        <img src="/src/assets/img/Ellipse 14.png" alt=""/>
                        <div className='name'>
                            <h5>Akanni Boss</h5>
                            <p>Product Manager</p>
                        </div>
                    </div>
                </div>
                <Button className="button">
                    {__i('View More')}
                </Button>
            </div>
        </div>
    </Wrapper>);
};
const Wrapper = styled.div`
  width: 100%;

  .container {
    margin: 0 auto;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    padding: 50px;
  }

  .testimon {
    color: #FF885B;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

  }

  .name {
    padding-left: 20px;
    align-items: flex-start;
    justify-content: center;
    display: flex;
    flex-direction: column;

    p {
      margin: 0;
      color: #FF885B;
    }

    h5 {
      margin: 0;
      color: white;
    }
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;


    h2 {
      margin: 0;
      font-size: 50px;
      color: white;
    }
  }

  .btn {
    font-weight: 500;
    font-size: 15px;
    margin-top: 20px;
    background-color: #FF885B;
    border: none;
    width: 190px;
    height: 50px;
    color: #FFFFFF !important;

    &:hover {
      scale: 105%;
    }
  }

  .button {
    font-weight: 500;
    font-size: 15px;
    display: none;
    color: #FFFFFF !important;
    
    &:hover {
      scale: 105%;
    }
  }

  :where(.css-dev-only-do-not-override-apn68).ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):active, :where(.css-dev-only-do-not-override-apn68).ant-btn-variant-dashed:not(:disabled):not(.ant-btn-disabled):active {
    border: #FF885B !important;
    background: #FF885B !important;
  }

  :where(.css-dev-only-do-not-override-apn68).ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):hover, :where(.css-dev-only-do-not-override-apn68).ant-btn-variant-dashed:not(:disabled):not(.ant-btn-disabled):hover {
    border: #FF885B;
  }

  .card {
    max-width: 33%;
    width: 375px;
    height: 400px;
    background-color: #3b3a3a;
    padding: 40px;
    display: flex;
    gap: 45px;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

    span {
      color: white;
    }
  }

  .avatar {
    display: flex;
  }
  
  .cards {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
    gap: 20px;


  }

  .sts {
    gap: 15px;

    div {
      padding-top: 15px;
      display: flex;
      flex-direction: column;
    }
  }

  .frame {
    width: 530px;
    height: 400px;
    overflow: hidden;

    video {

      height: 400px;
    }

  }

  @media (max-width: 1393px) {
    .cards {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }

    .frame {
      video {
        margin-left: 28px;
        width: 90%;
      }
    }

  }
  @media (max-width: 751px) {
    .btn {
      display: none;
    }

    .button {
      margin-top: 20px;
      background-color: #FF885B;
      border: none;
      width: 150px;
      height: 70px;
      display: block;
    }

    .title {
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  .testimon {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 10px;
  }

  .card {
    width: 475px;
    max-width: 100%;
  }

  @media (max-width: 576px) {
    .frame {
      display: none;
    }
  }
  @media (max-width: 425px) {
    .title {
      h2 {
        margin: 0;
        font-size: 30px;
        color: white;
      }
    }

    .testimon {
      justify-content: center;
      align-items: center;

    }
  }

@media(max-width: 1024px){
  .testimon{
    justify-content: center;
    align-items: center;
  }
  .btn{
    display: none;
  }
  .button{
    display: flex;
    background: #FF885B !important;
    border: none !important;
    width: 190px;
    height: 50px;
  }
}
`

export default Testimonials;