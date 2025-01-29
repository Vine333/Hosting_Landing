import React from 'react';
import styled from "styled-components";
import AppLayout from "../../layouts/index.jsx";
import {useLanguage} from "../../hooks/useTranslate.jsx";
import {useNavigate} from "react-router-dom";
import { Button, Input } from 'antd';
import {EyeTwoTone,EyeInvisibleOutlined,UserOutlined} from "@ant-design/icons";


const AuthPage = () => {
    const {__i}=useLanguage();
    const navigate=useNavigate()

    const NavigateToAccount=()=>{
        navigate('/account')
    }
    const NavigateRegister = ()=>{
        navigate('/register')
    }
    return (<AppLayout>


        <Container>
            <h1>{__i( "Login to You Account")}</h1>

            <Input placeholder={__i("Email")} prefix={<UserOutlined />}  className='email'/>


                <Input.Password
                    rootClassName='password'
                    style={{width:"300px",height:"37px",background:" #ecf5f2",color:"#757575"}}
                    className='password'
                    placeholder={__i("Password")}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />

            <p><a href="/">{__i("Forgot Password?")}</a></p>

            <div className='btnAuth'>

                <Button onClick={()=>NavigateToAccount()} className='btn'> {__i("Sign In")}</Button>

                <a onClick={()=>NavigateRegister()} style={{padding:"3px"}}> {__i("Sign Up")} </a>

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
h1{
  color: #FFFFFF;
  font-size: 30px;
}
  a{
    color: #FFFFFF;
    text-decoration: underline;
  }
  input{
    width: 300px;
    padding: 10px;
    border-radius: 7px;
    border: 1px solid #1A1A19;
    background: #ecf5f2;
    box-shadow: 0 0 92px -13px rgba(255,255,255,0.3)
  }
  .btnAuth{
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a{
      color: #FFFFFF;
      
      text-decoration: underline;
    }
  }
  .password{
  border-radius: 7px;
    &:hover{
      border: 1px solid #FF885B !important;
    }  
    &:active{
         border: 1px solid #FF885B !important;
       }
    &:focus{
      border-color: #FF885B !important;
    }
    &:focus-within{
      border-color: #FF885B !important;
    }
  }
  .email{
    margin-bottom: 20px;
    height: 37px;
    width: 300px;
    border-radius: 7px;
    &:hover{
      border: 1px solid #FF885B;
    }
    span{
    color:#FF885B !important;
    }
    &:focus-within{
      border-color: #FF885B !important;
    }
  }
  .btn{
    width: 190px;
    height: 50px;
    background: #FF885B;
    border: none;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 15px;
    
    &:hover{
      color: #FFFFFF !important;
      scale: 105%;
      background: #FF885B !important;
    }
  }
`

export default AuthPage;