import React from 'react';
import { Table } from 'antd';
import styled from "styled-components";
const columns = [
    {
        title: 'Create',
        dataIndex: 'Create',
        key: 1,
    },
    {
        title: 'Service',
        dataIndex: 'Service',
        key:2,
    },
    {
        title: 'Type',
        dataIndex: 'Type',
        key: 3,
    },
    {
        title: 'Status',
        key: 4,
        dataIndex: 'Status',

    },

];
const data = [
    {
        key: '1',
        Create:" 03.02.2011",
        Service: "some",
        Type: 'Create',
        Status: 'Completed',
    },
    {
        key: '2',
        Create:" 03.02.2011",
        Service: "some",
        Type: 'Create',
        Status: 'Completed',
    },
    {
        key: '3',
        Create:" 03.02.2011",
        Service: "some",
        Type: 'Create',
        Status: 'Completed',
    },
];
const History = () =>{
    return (
        <Container>
            <div className='verticalTable'>
                    {data.map((item) => (
                        <div className="card" key={item.key}>
                            <div className="field">
                                <span className="label">Create:</span>
                                <span className="value">{item.Create}</span>
                            </div>
                            <div className="field">
                                <span className="label">Service:</span>
                                <span className="value">{item.Service}</span>
                            </div>
                            <div className="field">
                                <span className="label">Type:</span>
                                <span className="value">{item.Type}</span>
                            </div>
                            <div className="field">
                                <span className="label">Status:</span>
                                <span className="value">{item.Status}</span>
                            </div>
                        </div>
                    ))}
            </div>
            <Table columns={columns} dataSource={data} className='horizontalTable'/>
        </Container>
    )



};
const Container = styled.div`
  padding: 24px;
  max-width: 1440px;

  .card {
    word-break: break-word;

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
    .verticalTable {
      display: block;
    }

    .horizontalTable {
      display: none;
    }
  }
  @media (max-width: 426px) {
    padding: 2px;
  }

  .ant-table-wrapper .ant-table-pagination-right {
    justify-content: center;
  }
`
export default History;