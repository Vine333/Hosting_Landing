import React from 'react';
import {Button} from "antd";
import StartImg from "../../../assets/svg/StartImg.jsx";
import {useLanguage} from "../../../hooks/useTranslate.jsx";
import {Wrapper} from "./style.js";

const GetStarted = () => {
    const {__i} = useLanguage()
    return (<Wrapper>
        <div className='container'>
            <div className='title'>
                <div className='getstart'>GET STARTED</div>
                <div className='descriptions'>
                    <h2>{__i(" Let's Start Here! New")}
                        <br/>
                        {__i(" Space for World")}
                    </h2>
                    <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur laudantium maxime nobis quos, voluptate voluptatibus!
                        </span>

                </div>
                <div className='btnContainer'>
                    <Button className='btnStart'>
                        {__i('Get Started')}
                    </Button>
                    <Button className='btnHost'>
                        {__i('Hosting Plans')}
                    </Button>
                </div>

            </div>
            <div className='img'>
                <div className='card'>
                    <div>
                        <div className=' check'>✓</div>
                        {__i('Unlimited Bandwidth')}
                    </div>
                    <div>
                        <div className=' check'>✓</div>
                        {__i('Super Turbo Power')}
                    </div>
                    <div>
                        <div className=' check'>✓</div>
                        {__i("24/7 Full Support")}
                    </div>

                </div>
                <StartImg className='imgStart'/>
            </div>
        </div>
    </Wrapper>);
};



export default GetStarted;