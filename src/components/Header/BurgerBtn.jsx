import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import Button from "../common/Button.jsx";

const BurgerBtn = () => {
    const menuRef = useRef(null);
    const burgerRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleClickOutside = (event) => {
        if (
            menuRef.current && !menuRef.current.contains(event.target) &&
            burgerRef.current && !burgerRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Wrapper isOpen={isOpen}>
            <div className="burgerIcon" onClick={toggleMenu} ref={burgerRef}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav ref={menuRef} className={isOpen ? "menu open" : "menu"}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

            </nav>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
display: contents;
  .burgerIcon {
    width: 30px;
    height: 20px;
    display: none; 
    
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    div {
      width: 100%;
      height: 3px;
      background-color: whitesmoke;
      transition: transform 0.3s, opacity 0.3s;
    }

    ${({ isOpen }) =>
            isOpen &&
            `
      div:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }
      div:nth-child(2) {
        opacity: 0;
      }
      div:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    `}
  }

  .menu {
    position: absolute;
    top: 60px;
    right: 120px;
    width: 200px;
    background-color:#9694e7;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden;
    transform: scale(0);
    transform-origin: top right;
    transition: transform 0.3s ease-in-out;
.btnInBurger{
  width: auto;
  height: auto;
  margin: 7px 7px 7px 20px;
  padding: 10px 20px;
  &:hover{
    border: 1px solid  #29d2fc;
  }
}
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin: 0;
        a {
          display: block;
          padding: 10px 20px;
          text-decoration: none;
          color: whitesmoke;
          transition: background-color 0.3s;

          &:hover {
            background-color: #29d2fc;
          }
        }
      }
    }
  }

  .menu.open {
    transform: scale(1);
  }
  

  @media (max-width: 820px) {
    .burgerIcon {
      display: flex;
     
      
    }

    .menu {
      display: block;
    }
  }

  @media (min-width: 821px) {
    .menu {
      display: none;
    }
  }
`;

export default BurgerBtn;
