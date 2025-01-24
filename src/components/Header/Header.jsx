import React, {useState,} from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {ICDaily, ICLanguage, ICMenu} from "../../icons/index.js";
import {Button} from "antd";
import {Drawer, Space, Switch} from "antd";
import {useLanguage} from "../../hooks/useTranslate.jsx";


const Header = () => {
    const navigate = useNavigate();
    const {language, changeLanguage, __i} = useLanguage()

    const [isOpen, setIsOpen] = useState(false);
    const [isOpens, setIsOpens] = useState(false);
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setIsOpens(false);
        }
    };


    const toggleDropdownLanguage = () => {
        setIsOpens(!isOpens);
        if (!isOpens) {
            setIsOpen(false);
        }
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    // const handleLanguageChange = (language) => {
    //     setLanguage(language);
    //     setIsOpen(false);
    // };


    const NavigateToLogin = () => {
        navigate('/login')
    }
    const NavigateHome = () => {
        navigate('/')
    }

    return (<Wrapper>

        <div className='container'>

            <div className='logo' onClick={NavigateHome}>
                Host Beta

            </div>
            <div className='links'>
                <a>{__i("Home")}</a>
                <a>{__i("About")} </a>
                <a>{__i("Service")}</a>
                <a> {__i("Prising")}</a>
                <a>{__i("Testimonials")}</a>

            </div>
            <div className='iconsHeader'>
                <div className='iconsHeaderAccount'>

                    <div style={{position: 'relative', display: 'inline-block'}}>

                        <div
                            className='account'
                            onClick={toggleDropdown}>
                            <ICDaily width={40} height={40}/>
                        </div>

                    </div>
                    {isOpen && (<div
                        className="openAccount"
                    >
                        <Button className="signIn" style={{margin: '5px'}} onClick={() => NavigateToLogin()}>
                            {__i("Sign In")}
                        </Button>
                        <Button className='signUp' style={{margin: '5px', padding: '3px'}}
                                onClick={() => NavigateToLogin()}>
                            {__i("Sign Up")}
                        </Button>
                    </div>)}
                </div>
                <div className='iconsHeaderGlobal'>
                    <div style={{position: 'relative', display: 'inline-block'}}>
                        <button
                            onClick={toggleDropdownLanguage}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '10px',
                                backgroundColor: 'transparent',
                                border: '1px solid #ddd',
                                borderRadius: '20px',
                                padding: '5px 10px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                color: 'white',
                            }}
                        >

                            <ICLanguage style={{marginRight: '15px'}}/>
                            {language}

                            <svg
                                width="12px"
                                height="12px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{marginLeft: '5px'}}
                            >
                                <path
                                    d="M12 15l-5-5h10l-5 5Z"
                                    fill="white"
                                />
                            </svg>
                        </button>


                        {isOpens && (<div
                            style={{
                                position: 'absolute',
                                top: '40px',
                                right: 0,
                                backgroundColor: '#1e1e2e',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                padding: '10px',
                                zIndex: 1000,
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <button
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    padding: '5px',
                                    marginBottom: '5px',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    color: '#ffffff',
                                }}
                                onClick={() => changeLanguage('EN')}

                            >
                                English
                            </button>
                            <button
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    padding: '5px',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    color: '#ffffff',
                                }}
                                onClick={() => changeLanguage('RU')}
                            >
                                Русский
                            </button>
                        </div>)}
                    </div>
                </div>

            </div>
            <div>
                <div onClick={() => showDrawer()} className='btnMenu'>
                    <ICMenu/>
                </div>

                <Drawer title={

                    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <ICDaily width={40} height={40} color={'#000000'}
                                 style={{fontSize: '24px', color: '#000000'}}/>
                        <div>
                            <button
                                onClick={() => NavigateToLogin()}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#FF885B',
                                    cursor: 'pointer',
                                    marginRight: '10px',
                                }}
                            >
                                {__i("Sign In")}
                            </button>

                        </div>
                    </div>} onClose={onClose} open={open} classNames='drawerCustom' extra={<Space direction="vertical">
                    <Switch
                        checked={language === 'RU'}
                        onChange={(checked) => changeLanguage(checked ? 'RU' : 'EN')}
                        checkedChildren="RU"
                        unCheckedChildren="EN"
                    />
                </Space>}>
                    <div style={{
                        color: "#000000",
                        margin: "0",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        transition: "background-color 0.3s, color 0.3s",
                        cursor: "pointer",
                    }}>
                        <p onClick={() => NavigateHome()}>{__i("Home")}</p>
                        <p>{__i("About")} </p>
                        <p>{__i("Service")}</p>
                        <p> {__i("Prising")}</p>
                        <p>{__i("Testimonials")}</p>
                    </div>


                </Drawer>
            </div>

        </div>

    </Wrapper>);
};

const Wrapper = styled.div`
  
  width: 100%;
  box-sizing: border-box;

  .drawerCustom p {
    color: white;
    margin: 0;
    padding: 10px 20px;
    border-radius: 8px;
    transition: background-color 0.3s, color 0.3s;
  }

  .drawerCustom p:hover {
    color: #FF885B;
    background-color: #444;
    cursor: pointer;
  }

  .iconsHeader {
    display: flex;
    align-items: center;
    flex-direction: row;
    position: absolute;
    right: 0;

  }

  .openAccount {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 78%;
    right: 70%;
    background-color: #1e1e2e;
    border: 1px solid #444;
    border-radius: 8px;
    padding: 10px;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .signIn {
    background: transparent !important;
    border: 1px solid #FF885B !important;
    color: #FFFFFF;
  }

  .signUp {
    color: #FFFFFF;
    background: transparent !important;
    border: 1px solid #FF885B !important;
  }

 

  

  .account {
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .iconsHeaderAccount {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .iconsHeaderGlobal {
    padding: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .container {
    flex-wrap: wrap;
    max-width: 1440px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px 100px 30px 100px;
    position: relative;
  }

  .logo {
    color: white;
    font-size: 20px;
    cursor: pointer;
  }

  .btnMenu {
    display: none;
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
 
    @media (max-width: 820px) {

      .logo {

        flex: 1 1 50%;
        flex-wrap: nowrap;
      }

      .btnMenu {
        display: block;
        cursor: pointer;
      }

      .iconsHeader {
        display: none;
      }


      .links {
        display: none;
      }

      transition: all 0.5ms;

    }
    @media (max-width: 820px) {
      .links {
        display: none;
      }

    }


    @media (max-width: 425px) {
      .container {
        padding: 15px;
      }
    }

   
`
export default Header;
