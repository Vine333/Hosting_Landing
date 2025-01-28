import React from 'react';
import {Button, Table,} from 'antd';
import styled from "styled-components";
import {useLanguage} from "../../hooks/useTranslate.jsx";

const Tabs = () => {
    const {__i}=useLanguage()
    const columns = [{
        title: 'type', dataIndex: 'type', key: 'type', render: (text) => <a>{text}</a>,
    }, {
        title: 'OC', dataIndex: 'OC', key: 'OC',
    }, {
        title: 'Service', dataIndex: 'service', key: 'service',
    }, {
        title: 'IP-adres', key: 'IP-adres', dataIndex: 'ip',

    }, {
        title: 'Status', key: 'status', dataIndex: 'status'

    }, {
        title: 'Create', key: 'create', dataIndex: 'create'

    },];
    const data = [{
        key: 1,
        type: 'some Type',
        OC: "intel",
        service: 'some',
        ip: "192.000.000",
        status: "active",
        create: '10.01.2015',
    }, {
        key: '2',
        type: 'some Type',
        OC: "intel",
        service: 'some',
        ip: "192.000.000",
        status: "active",
        create: '10.01.2015',
    }, {
        key: '3',
        type: 'some Type',
        OC: "intel",
        service: 'some',
        ip: "192.000.000",
        status: "active",
        create: '10.01.2015',

    },];

    return (<Container>
        <div className='searchAndBtn'>
            <input type="text" className='search' placeholder={__i('Search')}>
            </input>
            <Button className='byServersBtn'>
                + {__i( "Buy Servers")}
            </Button>
        </div>

        <div className='table'>

            <Table columns={columns} dataSource={data}/>
        </div>
        <div className='verticalTable'>
            {data.map((item) => (<div className="card" key={item.key}>
                    <div className="field">
                        <span className="label">Type:</span>
                        <span className="value">{item.type}</span>
                    </div>
                    <div className="field">
                        <span className="label">OC:</span>
                        <span className="value">{item.OC}</span>
                    </div>
                    <div className="field">
                        <span className="label">Service:</span>
                        <span className="value">{item.service}</span>
                    </div>
                    <div className="field">
                        <span className="label">IP:</span>
                        <span className="value">{item.ip}</span>
                    </div>
                    <div className="field">
                        <span className="label">Status:</span>
                        <span className="value">{item.status}</span>
                    </div>
                    <div className="field">
                        <span className="label">Create:</span>
                        <span className="value">{item.create}</span>
                    </div>
                </div>))}
        </div>

    </Container>);
}


const Container = styled.div`
  .verticalTable {
    display: none;
  }

  .search {
    width: 100%;
    height: 20px;
    border-radius: 2px;
    padding: 20px;
    margin-bottom: 20px;
    margin-top: 20px;

  }

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
    color: #FFFFFF;
    font-weight: bold;

  }

  .value {
    color: #FFFFFF;
    word-wrap: break-word;
  }

  .ant-btn {
    font-size: 15px;
    font-weight: 500;
    width: 170px;
    height: 60px;
    background-color: transparent;
    border: 1px solid #FF885B;
    color: white;
    border-radius: 7px;
    margin-bottom: 15px;
  }

  .ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):hover, :where(.css-dev-only-do-not-override-apn68).ant-btn-variant-dashed:not(:disabled):not(.ant-btn-disabled):hover {
    border: 1px solid #FF885B;
    color: whitesmoke;
    scale: 105%;
    transition: 0.2s;
    background-color: transparent;
  }

  @media (max-width: 1024px) {
    padding: 5px;
    .search {
      width: 95%;
      margin-right: 10px;
    }

    .table {
      width: 80%;
    }
  }
  @media (max-width: 768px) {
    .verticalTable {
      display: block;

    }

    .table {
      display: none;
    }

    .searchAndBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  @media (max-width: 425px) {
    .search {
      width: 100%;
    }


  }
`
export default Tabs;