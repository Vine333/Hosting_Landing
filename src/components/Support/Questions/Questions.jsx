import React,{useState} from 'react';
import {Container} from "./style.js";
import {Button} from "antd";
import {useLanguage} from "../../../hooks/useTranslate.jsx";

const Questions = () => {
    const {__i}=useLanguage()
    const [value, setValue] = useState("");

    const clearInput = () => {
        setValue("");
    };
    return (
        <Container>
            <div className='searchContainer' >
                <h1>{__i("Any questions?")}</h1>
                <div className='inputByQuest'>
                    <div className='input'>
                        <input type="search"
                               placeholder={__i("Enter your question")}
                               className='search'
                               value={value}
                               onChange={(e) => setValue(e.target.value)}
                        />
                        {value && (
                            <button className="clear-btn" onClick={clearInput}>
                                ✕
                            </button>
                        )}
                    </div>

                    <Button>{__i("Search")} </Button>
                </div>

            </div>
            <div className='PopularTheme'>
                <h1>{__i("Popular Topics")}</h1>
                <div className='descriptions'>
                    some theme
                </div>

            </div>
            <div className='popularQuestions'>
                <h1>{__i("Popular questions")}</h1>
                <div>
                    <ul>
                        <li>some questions?</li>
                        <li>some questions?</li>
                        <li>some questions?</li>
                        <li>some questions?</li>
                        <li>some questions?</li>
                        <li>some questions?</li>
                        <li>some questions?</li>
                    </ul>
                </div>
                <div className='btnContainer'>
                    <Button className='btnQuestions'>

                        {__i("Create a support question")}

                    </Button>
                </div>
            </div>

        </Container>
    );
};

export default Questions;