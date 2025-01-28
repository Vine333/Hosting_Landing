import React from 'react';
import {Wrapper} from "./style.js";
import {ICCheckMark, ICElementor, ICGit, ICLaravel, ICWord} from "../../../icons/index.js";
import {Button} from "antd";
import {useLanguage} from "../../../hooks/useTranslate.jsx";


const OurCapabilities = () => {
    const {__i} = useLanguage();
    return (<Wrapper>
        <div className='container'>
            <div className='label'>
                <div className='card'>
                    <ICWord/>
                    <h3>Wordpress</h3>
                </div>
                <div className='card'>
                    <ICGit/>
                    <h3>Github</h3>
                </div>
                <div className='card'>
                    <ICLaravel/>
                    <h3>Laravel</h3>
                </div>
                <div className='card'>
                    <ICElementor/>
                    <h3>Elementor</h3>
                </div>
            </div>
            <div className='descriptions'>
                <div className='capabilities'>
                    OUR CAPABILITIES
                </div>
                <h1>{__i("From Skyline to the Shoreline")},<br/>
                    {__i('We Are There')}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Accusantium aut id impedit maiores
                    perspiciatis reiciendis.</p>
                <div className='details'>
                    <div className='column1'>
                        <div className='item'>
                            <ICCheckMark/>
                            <div></div>
                            {__i("Unlimited Bandwidth")}
                        </div>
                        <div className='item'>
                            <ICCheckMark/>
                            <div></div>
                            {__i('Super Turbo Power')}
                        </div>
                    </div>
                    <div className='column2'>
                        <div className='item'>
                            <ICCheckMark/>
                            <div></div>
                            {__i('Unlimited Site')}
                        </div>
                        <div className='item'>
                            <ICCheckMark/>
                            <div></div>
                            {__i("24/7 Full Support")}
                        </div>
                    </div>
                </div>
                <Button className='btn'>
                    {__i('More Detail')}
                </Button>
            </div>
        </div>
    </Wrapper>);
};

export default OurCapabilities;