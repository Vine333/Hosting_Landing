import styled from "styled-components";

 export const Container = styled.div`
  max-width: 1440px;

  .search {
    width: 100%;
    height: 20px;
    border-radius: 2px;
    padding: 20px;
    margin-bottom: 20px;
    margin-top: 20px;

  }

  .ant-btn {
    font-size: 15px;
    font-weight: 500;
    width: 170px;
    height: 44px;
    background-color: transparent;
    border: 1px solid #FF885B;
    color: white;
    border-radius: 7px;

  }

  .popularQuestions {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {

    }
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):hover, :where(.css-dev-only-do-not-override-apn68).ant-btn-variant-dashed:not(:disabled):not(.ant-btn-disabled):hover {
    border: 1px solid #FF885B;
    color: whitesmoke;
    scale: 105%;
    transition: 0.2s;
    background-color: transparent;
  }

  .searchContainer {
    h1 {
      margin: 0;
    }
  }

  .inputByQuest {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 15px;
    margin-top: 10px;

    .input {
      position: relative;
      width: 100%;

      input {
        border-radius: 7px;
        background-color: rgba(255, 255, 255, 0, 3);
        color: #FF885B;
        margin: 0;
        box-shadow: -1px -4px 18px -4px rgba(255, 136, 91, 0.2);

      }
    }

    .clear-btn {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      background: transparent;
      border: none;
      font-size: 18px;
      color: #FF885B;
      cursor: pointer;
    }
  }

  .btnContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btnQuestions {
    height: 70px;
    width: auto;

  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .searchContainer {
      display: flex;

      align-items: center;
      flex-direction: column;

      h1 {
        margin-bottom: 5px;
      }
    }

    .inputByQuest {
      width: 100%;
      flex-direction: column;
      display: flex;

      input {
        width: 600px;
      }
    }

    .PopularTheme {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .popularQuestions {
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;

      ul {
        padding: 0;
      }
    }
  }
  @media (max-width: 426px) {
    .inputByQuest {

      input {
        width: 300px;
      }
    }
  }
`