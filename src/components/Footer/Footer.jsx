import React from 'react';
import styled from "styled-components";
import {ICInsta, ICLocal, ICMessage, ICPhone, ICTime, ICTwitter, ICYouTube} from "../../icons/index.js";
import ICFacebook from "../../icons/ICFacebook";
import ICIn from "../../icons/ICIn";

const Footer = () => {
    return (
        <Wrapper>
            <div className='container'>
                <div className='logo'>
                    <h1>Host Beta</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, similique.</p>
                    <div className='social'>
                        <a href=""><ICTwitter/></a>
                        <a href=""><ICFacebook/></a>
                        <a href=""><ICIn/></a>
                        <a href=""><ICInsta/></a>
                        <a href=""><ICYouTube/></a>
                    </div>
                </div>
                <div className='getInTouch'>
                    <h1>Get In Touch</h1>
                    <a href=""><ICLocal className='item'/>    Richardson, California 62639</a>
                    <a href=""><ICMessage className='item'/> felicia.reid@example.com</a>
                    <a href=""><ICPhone className='item'/> (405) 555-0128</a>
                    <a href=""><ICTime className='item'/> December 19, 2022</a>
                </div>
                <div className='quick'>
                    <h1>Quicklinks</h1>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Team</a>
                    <a href="">Pricing</a>
                    <a href="">Blog</a>
                </div>
                <div className='support'>
                    <h1>Support</h1>
                    <a href="">Help Center</a>
                    <a href="">Careers</a>
                    <a href="">FAQs</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Contact </a>
                </div>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
  margin-top: 150px;
width : 100%;
  .container{
    margin: 0 auto;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
  }
  .logo{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex: 1 1 40%;
    gap: 25px;
    h1{
      color: white;
      font-size: 40px;
    }
    p{
      color: lightgrey;
      width: 70%;
    }
  }
  .social{
    display: flex;
    gap: 10px;
  }
  .getInTouch{
    flex: 1 1 20%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap:20px;  
    align-self: center;
    h1{
      color: white;
      font-size: 30px;
    }
    a{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      color: lightgrey;
      &:hover{
        color: #FF885B;
      }
    }
  }
  .item{
    padding-right: 10px;
  }
  .quick{
    flex: 1 1 20%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap:15px;
    h1{
      color: white;
      font-size: 30px;
    }
    a{
      color: lightgrey;
      &:hover{
        color: #FF885B;
      }
    }
  }
  .support{
    flex: 1 1 20%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap:15px;
    h1{
      color: white;
      font-size: 30px;
    }
    a{
      color: lightgrey;
      &:hover{
        color: #FF885B;
      }
    }
  }
  @media(max-width: 1065px){
    .container{
      padding: 30px;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 40px;
    }
    .logo{
      justify-content: center;
      align-items: center;
    }
    .getInTouch{
    align-items: center;
    }
    .quick{
      align-items: center;
    }
    .support{
      align-items: center;
    }
  }
`
export default Footer;