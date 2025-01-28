import React, {Component} from 'react';
import {Button} from "antd";
import styled from "styled-components";
import {useLanguage} from "../../hooks/useTranslate.jsx";

const OutsideDisc = ()=>  {
const {__i}=useLanguage()
        return (
            <Container>
                <input type="text" className='search' placeholder={__i('Search')}>
                </input>

                <Button className='btn'>
                    + {__i("Create Outside Disc")}
                </Button>
            </Container>
        );

};
const Container = styled.div`
  @media(max-width: 768px){
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search{
    width: 95%;
    height: 20px;
    border-radius: 2px;
    padding: 20px;
    margin-bottom: 20px;
    margin-top: 20px;

  }
  .ant-btn{
    font-size: 15px;
    font-weight: 500;
    width: 185px;
    height: 60px;
    background-color: transparent;
    border: 1px solid #FF885B;
    color:white;
    border-radius: 7px;
    margin-bottom: 15px;
    padding: 10px;
  }
  .ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):hover, :where(.css-dev-only-do-not-override-apn68).ant-btn-variant-dashed:not(:disabled):not(.ant-btn-disabled):hover{
    border: 1px solid #FF885B ;
    color:whitesmoke;
    scale: 105%;
    transition: 0.2s;
    background-color: transparent;
    padding: 10px;
  }


`
export default OutsideDisc;