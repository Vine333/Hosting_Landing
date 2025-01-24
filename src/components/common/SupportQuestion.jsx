import React, {useState} from 'react';

import {Dropdown, Menu, Space} from 'antd';
import styled from "styled-components";
import Questions from "./Questions.jsx";
import {DownOutlined} from "@ant-design/icons";


const items = [{
    label: 'Поддержка', key: '1',
}, {
    label: 'Тикеты', key:'2',
},];
const SupportQuestions = () => {
    const [currentKey, setCurrentKey] = useState("1");
    const [currentLabel, setCurrentLabel] = useState("Поддержка");

    const onClick = (e) => {
        setCurrentKey(e.key);
        const selectedItem = items.find((item) => item.key === e.key);
        if (selectedItem) {
            setCurrentLabel(selectedItem.label);
            console.log('1234')
        }
    };
    const dropdownMenu = (
        <Menu onClick={onClick} items={items} />
    );
    const renderContent = () => {
        switch (currentKey) {
            case '1':
                return  <Questions/>;
            case '2':
                return <></> ;
            default: return <Questions/>

        }
        };

    return (<Container>
            <div>
                <Dropdown overlay={dropdownMenu} trigger={['click']} className='dropdownMenu'>
                    <Space className='containerLabel'>
                        <span> {currentLabel} </span>
                        <DownOutlined />
                    </Space>
                </Dropdown>
            </div>
            <div className='menu'>
                <Menu onClick={onClick} selectedKeys={[currentKey]} mode="horizontal" items={items} style={{
                    display:"flex",
                    gap:'10px'
                }}/>
            </div>
            <div>
                {renderContent()}
            </div>



        </Container>


    );
};
const Container = styled.div`
  .ant-menu-light {
    background-color: transparent;
  }
  .containerLabel{
    cursor: pointer;
    span{
      color: #FF885B;
    }

  }
  .dropdownMenu{
    display: none;
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
export default SupportQuestions;