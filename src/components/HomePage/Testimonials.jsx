import React from 'react';
import styled from "styled-components";
import Button from "../common/Button.jsx";
import ICStars from "../../icons/ICStars";

const Testimonials = () => {
    return (<Wrapper>
        <div className='container'>
            <div className='testimon'>
                TESTIMONIALS
            </div>
            <div className="title">
                <h2>
                    What Customers Say<br/>
                    About Us
                </h2>
                <Button className='btn'>
                    View More
                </Button>
            </div>
            <div className='cards'>
                <div className='frame'>
                    <video controls loop autoPlay>
                        <source src='src/assets/img/coverr-a-productive-morning-4822-4_3-1080p.mp4' type='video/mp4'/>
                    </video>
                </div>
                <div className='card'>
                    <div className='sts'>
                        <ICStars/>
                        <ICStars/>
                        <ICStars/>
                        <ICStars/>
                        <ICStars/>
                    </div>

                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi illo laudantium obcaecati odit quidem sint tenetur? Commodi, necessitatibus quidem.</span>
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
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi illo laudantium obcaecati odit quidem sint tenetur? Commodi, necessitatibus quidem.</span>
                    <div className='avatar'>
                        <img src="/src/assets/img/Ellipse 14.png" alt=""/>
                        <div className='name'>
                            <h5>Akanni Boss</h5>
                            <p>Product Manager</p>
                        </div>
                    </div>
                </div>
                <Button className="button">
                    View More
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
    align-items: center;

    h2 {
      font-size: 50px;
      color: white;
    }
  }

  .btn {
    margin-top: 20px;
    background-color: #FF885B;
    border: none;
    width: 150px;
    height: 70px;
  }
  .button{
    display: none;
  }

  .card {
    max-width: 33%;
    width: 400px;
    height: 400px;
    background-color: #3b3a3a;
    padding: 20px;
    display: flex;
    gap: 45px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    span {
      color: white;
    }
  }

  .avatar {
    display: flex;
  }

  .stars {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .cards {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;

  }

  .frame {
    width: 475px;
    height: 400px;

    video {
      width: 475px;
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
  }
  @media (max-width: 751px) {
    .btn {
      display: none;
    }
    .button{
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
    justify-content: center;
    align-items: center;
  }

  .card {
    width: 475px;
    max-width: 100%;
  }

  @media (max-width: 495px) {
    .frame {
      display: none;
    }
  }

`

export default Testimonials;