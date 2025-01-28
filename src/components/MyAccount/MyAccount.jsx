import React, {useState} from 'react';
import {Menu,Dropdown,Space} from 'antd';
import styled from "styled-components";
import CardAccount from "./cardAccoount.jsx";
import Profile from "./Profile.jsx";
import History from "./History.jsx";
import Log from "./Log.jsx";
import { DownOutlined } from "@ant-design/icons"
import {useLanguage} from "../../hooks/useTranslate.jsx";

const MyAccount = () => {
    const {__i}=useLanguage()
const items = [{
    label: __i("General information"), key: '1',

}, {
    label: __i('Profile'), key: '2',

}, {
    label: __i('History'), key: '3',
}, {
    label: __i('logs'), key: '4',
},

];

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
        <Dropdown overlay={dropdownMenu} trigger={['click']} className='dropdownMenu'  >
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
    margin: 10px !important;
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