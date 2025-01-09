import React from 'react';
import styled from "styled-components";
import AppLayout from "../../layouts";
import Button from "/src/components/common/Button.jsx";

const AuthPage = () => {

    return (<AppLayout>

        <Container>
                <h5 >
                    Username
                </h5>
            <input placeholder="Email or Phone" type='email'/>

            <h5>
                Password
            </h5>
            <input placeholder='Password'  type='password'/>

            <p><a href="">Forgot Password?</a></p>

            <div className='btnAuth'>

                <Button> SIGN IN </Button>

                <Button> SIGN UP </Button>

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