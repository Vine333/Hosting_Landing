import React, {useState} from 'react';

import {Dropdown, Menu, Space} from 'antd';
import styled from "styled-components";
import ServersTabs from "./Tabs.jsx";
import OutsideDisc from "./OutsideDisc.jsx";
import {DownOutlined} from "@ant-design/icons";
import {useLanguage} from "../../hooks/useTranslate.jsx";

const MyServersMenu = () => {
    const {__i}=useLanguage()
    const items = [{
        label: __i("Servers"), key: '1',
    }, {
        label:__i("External drives"), key: '2',
    }, {
        label: __i( "Backups"), key: '3',

    }, {
        label: __i("SSH-keys"), key: '4',
    }, {
        label: __i("ISO images"), key: '5',
    }, {
        label: __i("Other services"), key: '6',
    },];

    const [currentKey, setCurrentKey] = useState("1");
    const [currentLabel, setCurrentLabel] = useState("Серверы");

    const onClick = (e) => {
        setCurrentKey(e.key);
        const selectedItem = items.find((item) => item.key === e.key);
        if (selectedItem) {
            setCurrentLabel(selectedItem.label);

        }
    };
    const dropdownMenu = (<Menu onClick={onClick} items={items}/>);
    const renderContent = () => {
        switch (currentKey) {
            case '1':
                return <ServersTabs/>;
            case '2':
                return <OutsideDisc/>;
            case '3':
                return <div>Hello3 </div>;
            case '4':
                return <div>Hello4 </div>;
            case '5':
                return <div>Hello5 </div>;
            case '6':
                return <div>Hello6 </div>;
            default:
                return <ServersTabs/>;
        }
    };

    return (<Container>
            <div>
                <Dropdown overlay={dropdownMenu} trigger={['click']} className='dropdownMenu'>
                    <Space className='containerLabel'>
                        <span> {currentLabel} </span>
                        <DownOutlined/>
                    </Space>
                </Dropdown>
            </div>
            <div>
                <span className='menu'>
                     <Menu onClick={onClick} selectedKeys={[currentKey]} mode="horizontal" items={items} style={{
                         display: "flex", gap: '10px'
                     }}/>
                </span>

            </div>
            <div className='content'>
                {renderContent()}
            </div>


        </Container>


    );
};
const Container = styled.div`
  .ant-menu-light {
    background-color: transparent;
  }

  .dropdownMenu {
    display: none;
    margin: 10px !important;
  }

  .containerLabel {
    cursor: pointer;

    span {
      color: #FF885B;
    }

  }

  .content {
    padding: 5px;
  }

  @media (max-width: 768px) {
    .dropdownMenu {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
    }

    .menu {
      display: none;
    }
  }

`
export default MyServersMenu;