import React, {useState, useRef, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {ICDaily, ICMenu} from "../../icons/index.js";
import {Button} from "antd";
import {Drawer, Space, Switch, Dropdown} from "antd";
import {useLanguage} from "../../hooks/useTranslate.jsx";
import {DownOutlined} from "@ant-design/icons";
import {Wrapper} from "./style.js";

const Header = () => {
    const navigate = useNavigate();
    const {language, changeLanguage, __i} = useLanguage()
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);


    const items = [{
        label: (<Button onClick={() => changeLanguage("RU")}>
            Русский
        </Button>), key: '0',
    }, {
        label: (<Button onClick={() => changeLanguage('EN')}>
            English
        </Button>), key: '1',
    },

    ];
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };


    const NavigateToLogin = () => {
        navigate('/login')
    }
    const NavigateHome = () => {
        navigate('/')
    }
    const NavigateToRegister =()=>{
        navigate('/register')
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false); // Закрываем dropdown
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
                    {isOpen && (<div ref={dropdownRef}
                                     className="openAccount"
                    >
                        <Button className="signIn"  onClick={() => NavigateToLogin()}>
                            {__i("Sign In")}
                        </Button>
                        <Button className='signUp'
                                onClick={() => NavigateToRegister()}>
                            {__i("Sign Up")}
                        </Button>
                    </div>)}
                </div>
                <div className='iconsHeaderGlobal'>
                    <div style={{position: 'relative', display: 'inline-block'}}>
                        <Dropdown
                            overlayClassName='menuDrop'

                            menu={{
                                items,
                            }}
                            trigger={['click']}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className='changeLanguage'>
                                    {language}
                                    <DownOutlined/>
                                </Space>
                            </a>
                        </Dropdown>

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
                    </div>} onClose={onClose} open={open} classNames='drawerCustom' extra={
                    <div className='changer'>
                    <a onClick={() => changeLanguage("RU")  } className={language === "RU" ? "active-lang" : ""}>
                        RU
                    </a>
                    <span style={{marginInline: '3px'}}>|</span>
                    <a onClick={() => changeLanguage('EN')}  className={language === "EN" ? "active-lang" : ""}>
                        EN
                    </a>
                </div>}>
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


export default Header;
