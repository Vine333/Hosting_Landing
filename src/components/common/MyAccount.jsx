import React, {useState} from 'react';
import {Menu,Dropdown,Space} from 'antd';
import styled from "styled-components";
import CardAccount from "../MyAccount/cardAccoount";
import Profile from "../MyAccount/Profile.jsx";
import History from "../MyAccount/History.jsx";
import Log from "../MyAccount/Log.jsx";
import { DownOutlined } from "@ant-design/icons"


const items = [{
    label: 'Общая информация', key: '1',

}, {
    label: 'Профиль', key: '2',

}, {
    label: "История", key: '3',
}, {
    label: "Логи", key: '4',
},

];
const MyAccount = () => {
    const [currentKey, setCurrentKey] = useState("1");
    const [currentLabel, setCurrentLabel] = useState("Общая информация");

    const onClick = (e) => {

        setCurrentKey(e.key);
        const selectedItem = items.find((item) => item.key === e.key);
        if (selectedItem) {
            setCurrentLabel(selectedItem.label);
        }
    };
    const dropdownMenu = (
        <Menu onClick={onClick} items={items} />
    );
    const renderContent = () => {
        switch (currentKey) {
            case '1':
                return  <CardAccount/>;
            case '2':
                return <Profile/> ;
            case '3':
                return  <History/>;
            case '4':
                return  <Log/>;
            default: return <CardAccount/>;
        }
    };

    return (<Container>
        <Dropdown overlay={dropdownMenu} trigger={['click']} className='dropdownMenu'>
            <Space className='containerLabel'>
               <span> {currentLabel}</span>
                <DownOutlined />
            </Space>
        </Dropdown>
        <span className='menu'>
             <Menu onClick={onClick} selectedKeys={[currentKey]} mode="horizontal"  items={items} style={{
                 display:"flex",
                 gap:'10px',
             }} />
        </span>

        <div>
            {renderContent()}
        </div>
    </Container>);
};
const Container = styled.div`
  .ant-menu-light {
    background-color: transparent;
  }
  .dropdownMenu{
    display: none;
  }
  .containerLabel{
    cursor: pointer;
    span{
      color: #FF885B;
    }
    
  }
  @media(max-width: 768px){
    .dropdownMenu{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
    }
    .menu{
      display: none;
    }
  }
`
export default MyAccount;