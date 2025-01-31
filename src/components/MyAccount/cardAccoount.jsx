import React from 'react';
import {Button, Card, Col, Row} from 'antd';
import styled from "styled-components";
import {ICAttention} from "../../icons/index.js";
import {useLanguage} from "../../hooks/useTranslate.jsx";

const CardAccount = () => {
    const {__i}=useLanguage()

    return(
            <Container>
                <Row gutter={[16, 16]}>

                    <Col xs={24} sm={24} md={12} className='accountCard'>

                        <Card title={__i('Account')} bordered={false}>
                            <div className="cardBorder"></div>
                            аккаунт
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12}>

                        <Card title={__i('Create')}  bordered={false}>
                            <div className="cardBorder"></div>
                            15.01.2020
                        </Card>
                    </Col>


                    <Col xs={24} sm={12} md={8}>
                        <Card title={__i('Balance')} bordered={false}>
                            <div className="cardBorder"></div>
                            0.00$
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card title={__i("Funds in the bonus account")} bordered={false}>
                            <div className="cardBorder"></div>
                            0.00$
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card title={__i("Funds in partner account")} bordered={false}>
                            <div className="cardBorder"></div>
                            0.00$
                        </Card>
                    </Col>


                    <Col xs={24} sm={12} md={8}>
                        <Card title={__i("Ordering new services")} bordered={false}>
                            <div className="cardBorder"></div>
                            да
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card title={__i("Creating new users")} bordered={false}>
                            <div className="cardBorder"></div>
                            да
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card title={__i( "Withdrawing funds from an affiliate program")} bordered={false}>
                            <div className="cardBorder"></div>
                            да
                        </Card>
                    </Col>
                </Row>
                <div className='delete'>
                    <h1>{__i("Delete Account")}</h1>
                    <p>{__i("To delete an account, you must first delete all services and all other users of the account.")}</p>
                    <Button className='btn'>
                        <ICAttention/> {__i('Delete Account')}
                    </Button>
                </div>
            </Container>


);
}
const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 11px;

  .ant-btn {
    font-size: 15px;
    font-weight: 500;
    width: 170px;
    height: 44px;
    background-color: #ff0000;
    border: 1px solid #FF885B;
    color: #ffffff;
    border-radius: 7px;

  }

  .ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):hover, :where(.css-dev-only-do-not-override-apn68).ant-btn-variant-dashed:not(:disabled):not(.ant-btn-disabled):hover {
    border: 1px solid #FF885B;
    color: #ffffff;
    scale: 105%;
    transition: 0.2s;
    background-color: #ff0000;
  }
  .delete{
    h1{
      margin-bottom: 0;
    }
    p{
      margin-top: 2px;
    }
  }
  .btn{
    width: 200px;
    
  }
`;

export default CardAccount;
