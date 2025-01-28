import React,{useState} from 'react';
import styled from "styled-components";
import { UserOutlined } from '@ant-design/icons';
import {Input, Modal, Switch,Button} from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {useLanguage} from "../../hooks/useTranslate.jsx";

const Profile = () => {
    const {__i}=useLanguage()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSwitchChecked, setIsSwitchChecked] = useState(false);
    const [pendingSwitchState, setPendingSwitchState] = useState(false);
    const handleSwitchChange = (checked) => {
        setPendingSwitchState(checked);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setIsSwitchChecked(pendingSwitchState);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setPendingSwitchState(isSwitchChecked);
    };
    return (
        <Container>
<h1>{__i("Settings")}«Someemail@gmai.come»</h1>
            <div>
                <Input placeholder="«Someemail@gmail.com»"  disabled prefix={<UserOutlined />} className='inputEmail' />
                <div className='passwordInput'>
                    <Input.Password placeholder={__i("Current Password")} />
                    <Input.Password
                        placeholder={__i("New Password")}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </div>
                <div className='authentication'>
                    <Switch
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        checked={isSwitchChecked}
                        onChange={handleSwitchChange}
                    />
                    <p>{__i("Two-factor authentication")}</p>

                    <Modal
                        title={__i("Two-factor authentication confirmation")}
                        open={isModalOpen}
                        footer={[
                            <Button key="cancel" onClick={handleCancel}>
                                {__i("Cancel")}
                            </Button>,
                            <Button key="ok" type="primary" onClick={handleOk}>
                                {__i("Confirm")}
                            </Button>,
                        ]}
                    >
                        <p>{__i("Are you sure you want to change the two-factor authentication state?")}</p>
                    </Modal>

                </div>
            </div>
            <div className='btn'>
                <Button>
                    {__i("Save")}
                </Button>
            </div>


        </Container>
    );
};
const Container = styled.div`
max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  h1{
    font-size: 18px ;
  }
  .inputEmail{
    background-color: transparent;
    color: #ffffff;
    width: 660px;
    margin-bottom:5px;
    ::placeholder{
    color: #ffffff;
      
  }
   
  }
  .btn{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 660px;
  }
  .ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):hover, :where(.css-dev-only-do-not-override-apn68).ant-btn-variant-dashed:not(:disabled):not(.ant-btn-disabled):hover{
    border: 1px solid #FF885B ;
    color:whitesmoke;
    scale: 105%;
    transition: 0.2s;
    background-color: transparent;
  }
  .ant-btn{
    font-size: 15px;
    font-weight: 500;
    width: 170px;
    height: 44px;
    background-color: transparent;
    border: 1px solid #FF885B;
    color:white;
    border-radius: 7px;

  }
  .passwordInput{
display: flex;
    max-width: 660px;
    gap: 10px;
    margin-top: 5px;
  }
  .authentication{
    display: flex;
    gap: 15px;
    justify-content: flex-start;
    align-items: center;
  }
  @media(max-width: 425px){
    gap: 20px;
    h1{
      font-size: 15px;
    }
    
    .inputEmail{
      width: 90%;
      margin-bottom:15px   ;
    }
    .passwordInput{
      flex-direction: column;
      width: 90%;
    }
  }
`
export default Profile;