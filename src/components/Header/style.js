import styled from "styled-components";

export const Wrapper = styled.div`
  
  width: 100%;
  box-sizing: border-box;

  .changer{
  
    display: flex !important;
    justify-content: space-around !important;
    align-items: center !important;
    flex-direction: row !important;
  }
  .changer a{
      color: #000000 !important;
      &:active{
        color: #FF885b !important ;
      }
  }
  
  .signIn:hover{
    color: #FFFFFF !important; 
    scale: 105%;
  }
  .signUp:hover{
    color: #FFFFFF !important;
    scale: 105%;
  }

  .drawerCustom p {
    color: white;
    margin: 0;
    padding: 10px 20px;
    border-radius: 8px;
    transition: background-color 0.3s, color 0.3s;
  }

  .drawerCustom p:hover {
    color: #FF885B;
    background-color: #444;
    cursor: pointer;
  }

  .iconsHeader {
    display: flex;
    align-items: center;
    flex-direction: row;
    position: absolute;
    right: 4%;

  }

  .openAccount {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 66%;
    right: 70%;
    background-color: #1e1e2e;
    border: 1px solid #444;
    border-radius: 8px;
    padding: 10px;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .signIn {
    background: transparent !important;
    border: 1px solid #FF885B !important;
    color: #FFFFFF;
    margin: 5px !important;
  }

  .signUp {
    color: #FFFFFF;
    background: transparent !important;
    border: 1px solid #FF885B !important;
    margin: 5px;
    padding: 3px;
  }

 

  

  .account {
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  

  .iconsHeaderAccount {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .iconsHeaderGlobal {
    padding: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .container {
    flex-wrap: wrap;
    max-width: 1440px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px 100px 30px 100px;
    position: relative;
  }

  .logo {
    color: white;
    font-size: 20px;
    cursor: pointer;
    font-weight: 500;
  }
.changeLanguage{
  color: #FFFFFF !important;
  
}
  .menuDrop {
    background-color: #ffffff !important;
    border-radius: 8px !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
    padding: 10px!important;
  }

  .menuDrop .ant-dropdown-menu-item {
    padding: 8px 12px !important;
  }

  .menuDrop .ant-dropdown-menu-item:hover {
    background-color: #f0f0f0 !important ;
    color: #1890ff !important;
  }
  .btnMenu {
    display: none;
  }

  .links {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    font-weight: 400;

    a {
      color: white;

      &:hover {
        color: #FF885B;
      }
    }
  }
 
    @media (max-width: 820px) {

      .logo {

        flex: 1 1 50%;
        flex-wrap: nowrap;
      }

      .btnMenu {
        display: block;
        cursor: pointer;
      }

      .iconsHeader {
        display: none;
      }


      .links {
        display: none;
      }

      transition: all 0.5ms;

    }
    @media (max-width: 820px) {
      .links {
        display: none;
      }

    }


    @media (max-width: 425px) {
      .container {
        padding: 15px;
      }
    }

   
`