import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;


  .container {
    margin: 0 auto;
    padding-top: 40px;
    max-width: 1440px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .label {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding-left: 100px;

    h3 {
      color: white;
      font-size: 20px;
    }
  }

  .card {
    width: 440px;
    height: 100px;
    background-color: #3b3a3a;
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: flex-start;

    h3 {
      padding-left: 50px;
    }
  }

  .descriptions {
    display: flex;
    justify-content: left;
    align-items: flex-start;
    flex-direction: column;

    width: 60%;

    h1 {
      margin: 0;
      color: white;
      font-size: 40px;
    }

    p {
      margin: 10px 0 10px;
      font-size: 20px;
      color: rgba(211, 211, 211, 0.39);
    }
  }

  .capabilities {
    color: #FF885B;
  }

  .details {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-bottom: 20px;
  }

  .column1 {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    color: #FF885B;
  }

  .column2 {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    color: #FF885B;
  }

  .btn {
    font-weight: 500;
    font-size: 15px;
    margin-top: 20px;
    background-color: #FF885B;
    border: none;
    width: 190px;
    height: 50px;
    color: #FFFFFF !important;
    &:hover{
      scale: 105%;
      
    }
  }
  .item{
    display: flex;
    gap:5px;
    justify-content: center;
    align-items: center;
  }
  :where(.css-dev-only-do-not-override-apn68).ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):active, :where(.css-dev-only-do-not-override-apn68).ant-btn-variant-dashed:not(:disabled):not(.ant-btn-disabled):active{
    border: #FF885B;
    background: #FF885B;
  }
  @media(max-width: 1024px){
    .descriptions {
      justify-content: center;
      align-items: center;
      .item{
        
      }
    }
    .label{
      padding: 0;
      order: 2;
      margin-top: 20px;
    }
  }
  @media (max-width: 946px) {
    .container {
      flex-direction: column;
    }

    .descriptions {
      justify-content: center;
      align-items: center;
      text-align: center;
      order: 1;
      .item{
        font-size: 15px;
      }
    }

    .label {
      order: 2;
      width: 100%;
    }

    .column1 {
      text-align: start;

    }

    .column2 {
      text-align: start;
    }
  }
  @media (max-width: 471px) {
    .card {
      width: 100%;
    }
  }
  @media (max-width: 425px) {
    .descriptions {

      padding: 10px;
      width: 100%;

      h1 {
        margin: 0;
        color: white;
        font-size: 30px;
      }
    }
    .label{
       padding: 0;
     }
    .card{
      width: 70%;
    }
    .details{
      flex-direction: column;
    }
    .column1{
      justify-content: center;
      align-items: center;
    }
    .column2{
      justify-content: center;
      align-items: center;
    }
    .btn{
      margin-bottom: 22px;
    }
  }
  @media(max-width: 320px){
    
  }
`