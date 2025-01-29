import React from 'react';
import styled from "styled-components";
import AppLayout from "../../layouts";
import {Input,Button} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, UserOutlined} from "@ant-design/icons";
import {useLanguage} from "../../hooks/useTranslate.jsx";

const RegisterPages = () => {
    const {__i}=useLanguage();
    return (
        <AppLayout>
        <Container>
            <h1 className='header'>{__i("Registration")}</h1>
            <Input placeholder={__i("Your Email")} prefix='@'  className='emailRegister'/>
            <Input placeholder={__i("Your Name")} prefix={<UserOutlined />}  className='nameRegister'/>
            <div className='passwordContainer'>
                <Input.Password placeholder={__i("New Password")} className='input' />
                <Input.Password
                    className='input'
                    placeholder={__i( "Confirm password")}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </div>
            <Button className='btn'>
                {__i("Registration")}
            </Button>
        </Container>
        </AppLayout>
    );
};
const Container = styled.div`
width: 100%;
  max-width: 1540px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
  margin: 0 auto;
.emailRegister{
  margin: 10px;
  width: 500px !important;
  height: 37px;
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
 span{
    color: #FF885B !important;
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
  }
  .nameRegister{
    margin: 10px;
  width: 500px !important;
    height: 37px;
    border-radius: 7px;
    span{
      color: #FF885B !important; 
    }
    &:focus-within{
      border-color: #FF885B !important;
    }
    &:hover{
      border: 1px solid #FF885B !important;
    }
    &:active{
      border: 1px solid #FF885B !important;
    }
    &:focus{
      border-color: #FF885B !important;
     
    }
}
  .header{
    color: #FFFFFF;
    font-weight: 500;
    font-size: 28px;
  }
  .passwordContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-top: 10px ;     
  }
  .input{
    width: 245px ;
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
  .btn{
    margin: 30px;
    width: 210px;
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
    &:active{
      border-color: #FF885B !important;
      color: #FFFFFF !important;
    background-color: #FF885B !important;
    }
  }
`
export default RegisterPages;