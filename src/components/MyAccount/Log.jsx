import React from 'react';
import { Table } from 'antd';
import styled from "styled-components";
const columns = [
    {
        title: 'ID',
        dataIndex: 'ID',
        key: 1,
    },
    {
        title: 'Дата/Время',
        dataIndex: 'Date',
        key:2,
    },
    {
        title: 'Действие',
        dataIndex: 'Action',
        key: 3,
    },
    {
        title: 'IP',
        key: 4,
        dataIndex: 'IP',

    },  {
        title: 'Объект',
        key: 4,
        dataIndex: 'Object',

    },{
        title: 'Создатель',
        key: 4,
        dataIndex: 'Create',

    },

];
const data = [
    {
        key: '1',
        Create: 'SomeEmail@gmail.com',
        IP: "192.192.000",
        ID: "4521546",
        Action: 'Sign In',
        Status: 'Completed',
        Object:'SomeEmail@gmail.com',
        Date:'23.02.2024',

    },
    {
        key: '2',
        Create: 'SomeEmail@gmail.com',
        IP: "192.192.000",
        ID: "4521546",
        Action: 'Sign In',
        Status: 'Completed',
        Object:'SomeEmail@gmail.com',
        Date:'23.02.2024',
    },
    {
        key: '3',
        Create: 'SomeEmail@gmail.com',
        IP: "192.192.000",
        ID: "4521546",
        Action: 'Sign In',
        Status: 'Completed',
        Object:'SomeEmail@gmail.com',
        Date:'23.02.2024',
    },
];
const Log = () =>{
    return (
        <Container>
            <div className='verticalTable'>
                {data.map((item) => (
                    <div className="card" key={item.id}>
                        <div className="field">
                            <span className="label">ID</span>
                            <span className="value">{item.ID}</span>
                        </div>
                        <div className="field">
                            <span className="label">Дата / Время</span>
                            <span className="value">{item.Date}</span>
                        </div>
                        <div className="field">
                            <span className="label">Действие</span>
                            <span className="value">{item.Action}</span>
                        </div>
                        <div className="field">
                            <span className="label">IP</span>
                            <span className="value">{item.IP}</span>
                        </div>
                        <div className="field">
                            <span className="label">Объект</span>
                            <span className="value">{item.Object}</span>
                        </div>
                        <div className="field">
                            <span className="label">Создатель</span>
                            <span className="value">{item.Create}</span>
                        </div>
                    </div>
                ))}
            </div>

            <Table columns={columns} dataSource={data} className='horizontalTable' />
        </Container>
    )



};
const Container = styled.div`
padding: 24px;
  max-width: 1440px;
  .ant-pagination-item-link{
    color: #FFFFFF;
  }
  .card {

    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin: 8px;
  }

  .field {
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    border-bottom: 1px solid #6C6C6EFF;
    border-top: 1px solid #6C6C6EFF;
    text-align: right;

  }

  .field:last-child {
    margin-bottom: 0;

  }

  .label {
    color:#FFFFFF;
    font-weight: bold;

  }

  .value {
    color:#FFFFFF;
    word-wrap: break-word;
  }

  .verticalTable {
    display: none;
  }

  @media (max-width: 768px) {
  
    padding: 0;
    flex-direction: column;
    display: flex;
  }

  @media(max-width: 1440px){
    .verticalTable {
      display: block;
    }

    .horizontalTable {
      display: none;
    }
  }
  @media(max-width: 1025px){
    padding: 0;
  }

  
`
export default Log;