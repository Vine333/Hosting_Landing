import React from 'react';
import styled from "styled-components";
import Button from '/src/components/common/Button.jsx'
import BurgerBtn from "../Header/BurgerBtn.jsx";


const Header = () => {
    return (<Wrapper>
        <div className='container'>

            <div className='logo'>
                Host Beta

            </div>
            <div className='links'>
                <a>Home</a>
                <a>About </a>
                <a>Service</a>
                <a > Prising</a>
                <a>Testimonials</a>

            </div>
            <Button className='btnHeader'>
                Contact Us
            </Button>
            <BurgerBtn/>
        </div>

    </Wrapper>);
};

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;

    .container {
      flex-wrap: wrap;
      max-width: 1440px;
      box-sizing: border-box;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 100px 30px 100px;
    }
      .logo {
        color: white;
        font-size: 20px;
      }

      .links {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        font-weight: 400;

        a {
          color: white;

          &:hover {
            color: #FF885B;
          }
        }

      }

    
  @media(max-width: 820px){
    .logo{
      
     flex: 1 1 50%;
      flex-wrap: nowrap;
    }
    .btnHeader{
      display: none;
    }
    
    
    .links{
      display: none;
    }
    transition: all 0.5ms;
    
    
  }
`
export default Header;
