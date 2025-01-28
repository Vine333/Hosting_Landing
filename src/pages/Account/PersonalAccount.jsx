import React, { useState } from 'react';
import AppLayout from "../../layouts/index.jsx";
import styled from "styled-components";
import {Menu} from 'antd';
import MyServersMenu from "../../components/MyServers/PersonalInfo.jsx";
import SupportQuestion from "../../components/Support/SupportQuestion.jsx";
import MyAccount from "../../components/MyAccount/MyAccount.jsx";
import {useLanguage} from "../../hooks/useTranslate.jsx";





const PersonalAccount = () => {
const {__i}=useLanguage();
const items = [
    {
        key: '1',
        label: __i('MyAccount'),
    },
    {
        key: '2',
        label: __i('My Servers'),
    },
    {
        key: '3',
        label:   __i("Support"),

    },
];


const getLevelKeys = (items1) => {
    const key = {};
    const func = (items2, level = 1) => {
        items2.forEach((item) => {
            if (item.key) {
                key[item.key] = level;
            }
            if (item.children) {
                func(item.children, level + 1);
            }
        });
    };
    func(items1);
    return key;
};

const levelKeys = getLevelKeys(items);


    const [selectedKey, setSelectedKey] = useState('1');
    const [stateOpenKeys, setStateOpenKeys] = useState(['2']);
    const onOpenChange = (openKeys) => {
        const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);

        if (currentOpenKey !== undefined) {
            const repeatIndex = openKeys
                .filter((key) => key !== currentOpenKey)
                .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
            setStateOpenKeys(
                openKeys

                    .filter((_, index) => index !== repeatIndex)

                    .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
            );
        } else {

            setStateOpenKeys(openKeys);
        }
    };





    const renderContent = () => {
        switch (selectedKey) {
            case '1':
                return <MyAccount/>;
            case '2':
                return  <MyServersMenu/>;
            case '3':
                return <SupportQuestion/>;
            default:
                return <MyAccount/>;
        }
    };

    return (
        <AppLayout>

            <Container>
                <div className='sidebarColumn'>

                    <Menu

                        mode="inline"
                        defaultSelectedKeys={['1']}
                        openKeys={stateOpenKeys}
                        onOpenChange={onOpenChange}
                        onClick={(e) => setSelectedKey(e.key)}

                        style={{
                            width: 256,
                            height: "100%",
                            backgroundColor:"#171420",
                            color:'#ffffff',
                        }}
                        items={items}
                    />
                </div>
                <div className='sidebarHorizontal'>
                    <Menu

                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        openKeys={stateOpenKeys}
                        onOpenChange={onOpenChange}
                        onClick={(e) => setSelectedKey(e.key)}

                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor:"#171420",
                            color:'#ffffff',
                            display:'flex',
                            gap:'5px',
                            justifyContent:'center',
                            alignItems:'center',
                            padding:"0",
                            margin:"0",

                        }}
                        items={items}
                    />
                </div>
                <Content>
                    {renderContent()}
                </Content>
            </Container>
        </AppLayout>
    );
};


const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 50vh;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  @media(max-width: 768px){
    flex-direction: column;
  }

  .sidebarColumn {
    position: relative;
    width: 256px;
    background: #171420;
    color: #ffffff;
    padding-top: 70px;
    Menu{
     position: absolute;
      left: 0;
    }
    @media(max-width: 768px){
      display: none;
      
    }
  }
  .ant-menu-overflow-item .ant-menu-item .ant-menu-item-selected .ant-menu-item-only-child{
    padding: 0;
  }
  :where(.css-dev-only-do-not-override-apn68).ant-menu-horizontal .ant-menu-item, :where(.css-dev-only-do-not-override-apn68).ant-menu-horizontal .ant-menu-submenu{
    padding: 2px;
  }
  .ant-menu-overflow .ant-menu .ant-menu-root .ant-menu-horizontal .ant-menu-light .css-dev-only-do-not-override-apn68{
    width: 100%;
  }
  .sidebarHorizontal{
    display: none;
    @media(max-width: 768px ){
      display: block;
      width: 100%;
      background: #171420;
      color: #ffffff;
    }
  }

  .ant-menu-item.ant-menu-item-selected {
    color: #FF885B;
    
  }
  .ant-menu-item{
    color: #ffffff;
    :hover{
    color: #FF885B;
    }
  }
  }
  .ant-menu-item.ant-menu-item-active{
    :hover{
      color: #FF885B;
    }
  }
  
  .ant-menu-light:not(.ant-menu-horizontal).ant-menu-item:not(.ant-menu-item-selected):hover{
    background-color: #FF885B;
  }
  .ant-menu-light .ant-menu-item-selected, :where(.css-dev-only-do-not-override-apn68).ant-menu-light > .ant-menu .ant-menu-item-selected {
    background-color:transparent;
  }
  .setting{
    :hover{
      color: #FF885B;
    }
    
`;


const Content = styled.div`
  flex: 1;

  background: #171420;
  color: #ffffff;
  padding: 70px 20px 20px 40px;
  @media(max-width: 1025px){
    padding: 0;
  }
  
  @media(max-width: 426px){
    padding: 0;
  }

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    input {
      width: 700px;
    }
  }
  .inputData{
    padding: 20px;
  border-bottom: 1px solid #6d6f72;
}

  .myServers {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    border-bottom: 1px solid #6d6f72;
    flex-direction: column;
  }
  .buyServers{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }
  
  
`;

export default PersonalAccount;
