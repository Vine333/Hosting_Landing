import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #1f1d2c;

  .container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;

    .btnContainer {
      gap: 15px;
      display: flex;
    }

  }

  .ellipse {
    bottom: 0;

    position: absolute;
  }

  .getstart {
    color: #FF885B;
    margin-bottom: 10px;
  }

  .descriptions {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;

    h2 {
      font-size: 40px;
      color: white;
      margin: 0;
    }

    span {
      color: lightgrey;
      margin: 0;
      font-size: 20px;
    }

  }

  .img {
    width: 100%;
    position: relative;
    height: 100%;
    background-color: rgba(59, 58, 58, 0.2);

    left: 20px;

  }

  .card {
    div {
      gap: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .check {
        color: #FF885B;
      }
    }

    padding: 20px;
    width: 100%;
    height: 500px;
    position: absolute;


    div {
      color: #ffffff;

    }

  }

  .btnContainer {
    margin-top: 20px;

    .btnStart {
      color: #FFFFFF !important;
      background-color: #FF885B;
      border: none;
      width: 190px;
      height: 50px;
      font-size: 15px;
      font-weight: 500;

      &:hover {
        scale: 105%;
      }
    }
  }

  .btnHost {
    font-size: 15px;
    font-weight: 500;
    border: 1px solid #FF885B;
    border-radius: 7px;
    color: #FFFFFF !important;
    background-color: transparent !important;
    width: 190px;
    height: 50px;

    &:hover {
      scale: 105%;
    }
  }


:where(.css-dev-only-do-not-override-apn68).ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):active, :where(.css-dev-only-do-not-override-apn68).ant-btn-variant-dashed:not(:disabled):not(.ant-btn-disabled):active {
  background: #FF885B !important;
}

:where(.css-dev-only-do-not-override-apn68).ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):hover, :where(.css-dev-only-do-not-override-apn68).ant-btn-variant-dashed:not(:disabled):not(.ant-btn-disabled):hover {
  border: 1px solid #FF885B;

}


@media (max-width: 1107px ) {
  .container {
    flex-direction: column;
    gap: 20px;
  }

  .title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
    }
  }
}

@media (max-width: 1171px) {
  .img {
    display: none;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }

  .descriptions {
    justify-content: center;
    align-items: center;
  }

  .card {
    display: none;
  }
}

@media (max-width: 425px) {
  .title {

    h2 {
      font-size: 30px;
    }
  }
}
  @media(max-width: 375px){
    .btnStart{
      width: 150px !important;
      height: 50px !important;
    }
    .btnHost{
      width: 150px;
      height: 50px;
    }
  }

`