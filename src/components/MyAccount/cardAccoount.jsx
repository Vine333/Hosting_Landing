import React from 'react';
import {Button, Card, Col, Row} from 'antd';
import styled from "styled-components";
import {ICAttention} from "../../icons/index.js";

const CardAccount = () => (
    <Container>
        <Row gutter={[16, 16]}>

            <Col xs={24} sm={24} md={12}>
                <Card title="Аккаунт " bordered={false}>
                    аккаунт
                </Card>
            </Col>
            <Col xs={24} sm={24} md={12}>
                <Card title="Создано" bordered={false}>
                   15.01.2020
                </Card>
            </Col>


            <Col xs={24} sm={12} md={8}>
                <Card title="Баланс" bordered={false}>
                    0.00usd
                </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
                <Card title="Средства на бонусном счете" bordered={false}>
                    0.00usd
                </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
                <Card title="Средства на партнерском счете" bordered={false}>
                    0.00usd
                </Card>
            </Col>


            <Col xs={24} sm={12} md={8}>
                <Card title="Заказ новых услуг" bordered={false}>
                    да
                </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
                <Card title="Создание новых пользователей " bordered={false}>
                   да
                </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
                <Card title="Вывод средств из партнёрки" bordered={false}>
                   да
                </Card>
            </Col>
        </Row>
        <div>
            <h1>Удаление Аккаунта</h1>
            <p>Чтобы удалить аккаунт,предварительно необходимо удалить все услуги и всех остальных пользователей аккаунта</p>
            <Button>
                <ICAttention/> Удалить Аккаунт
            </Button>
        </div>
    </Container>
);

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px;

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
`;

export default CardAccount;
