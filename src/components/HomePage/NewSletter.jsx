import React from 'react';
import styled from "styled-components";
import Button from "../common/Button.jsx";
import {Circle, Pizza} from "../../assets/svg/Index.js";
import {useLanguage} from "../../hooks/useTranslate.jsx";

const NewSletter = () => {
    const {__i} = useLanguage();
    return (<Wrapper>
            <div className='container'>
                <div className='circle'>
                    <Circle/>
                </div>

                <div className='new'>{__i("NEWSLETTER")}</div>
                <div className='input'>
                    <h2>{__i("Subscribe to our Newsletter")}</h2>
                    <div className='inputBtn'>
                        <input type="text"/>
                        <Button className='btn'>
                            {__i('Subscribe')}
                        </Button>
                    </div>
                </div>
                <div className='pizza'>
                    <Pizza/>
                </div>
            </div>

        </Wrapper>);
};
const Wrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  margin-bottom: 60px;

  .container {
    background-color: #9694e7;
    margin: 0 auto;
    max-width: 1440px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 0;
    border-radius: 15px;
    overflow: hidden;
  }

  .new {
    margin-bottom: 40px;
    font-weight: 550;
    font-size: 20px;

  }

  .btn {
    background-color: black;
    border: none;
    width: 150px;
    height: 70px;
    border-radius: 0;
  }

  .input {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    z-index: 10;

    input {
      width: 400px;
      height: 70px;
      margin-right: 20px;
    }

    h2 {
      font-size: 50px;
      color: white;
    }

  }

  .circle {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .pizza {
    position: absolute;
    bottom: -1%;
    right: 0;
    z-index: -1;

  }

  @media (max-width: 1440px) {
    width: 95%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  @media (max-width: 898px) {
    .container {
      h2 {
        font-size: 30px;
      }
    }

    .inputBtn {
      justify-content: center;
      flex-direction: column;
      display: flex;
      align-items: center;
      gap: 10px;
      width: 75%;
    }

    .input {
      input {
        width: 100%;
        margin: 0;
      }

      .btn {

      }
    }
  }
  @media (max-width: 520px) {
    .container {
      h2 {
        font-size: 20px;
      }
    }
  }

`

export default NewSletter;