import React from 'react';
import styled from "styled-components";
import AppLayout from "../../layouts/index.jsx";
import Button from "/src/components/common/Button.jsx";
import {useLanguage} from "../../hooks/useTranslate.jsx";
import {useNavigate} from "react-router-dom";
import Header from "../../components/Header/Header.jsx";


const AuthPage = () => {
    const {__i}=useLanguage();
    const navigate=useNavigate()

    const NavigateToAccount=()=>{
        navigate('/account')
    }
    return (<AppLayout>


        <Container>
                <h5 >
                    {__i(" Username")}
                </h5>
            <input placeholder={__i("Email or Phone")} type='email'/>

            <h5>
                {__i('Password')}
            </h5>
            <input placeholder={__i('Password')}  type='password'/>

            <p><a href="src/pages/AuthPage/AuthPage.jsx">{__i("Forgot Password?")}</a></p>

            <div className='btnAuth'>

                <Button onClick={()=>NavigateToAccount()}> {__i("Sign In")}</Button>

                <Button style={{padding:"3px"}}> {__i("Sign Up")} </Button>

            </div>

        </Container>

    </AppLayout>
    );
};

const Container = styled.div`
display: flex;
  padding-top: 10%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
  flex-direction: column;
  width: 100%;
  h5{
    text-align: left;
    color: #ffffff;
    font-size: 24px;
    display: flex;
   width: 300px;
    align-items: flex-start;
    margin: 0 auto;
  }
  input{
    width: 300px;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid #FF885B;
  }
  .btnAuth{
    display: flex;
    gap: 10px;
  }
`

export default AuthPage;