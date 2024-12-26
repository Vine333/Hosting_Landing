import React from 'react';
import styled from 'styled-components';

const Button = ({children, ...props}) => {
    return (<>
        <Btn {...props}>
            {children}
        </Btn>
    </>);
};

const Btn = styled.button`
  font-size: 15px;
  font-weight: 500;
    width: 150px;
    height: 50px;
  background-color: transparent;
  border: 1px solid #FF885B;
  color:white;
  border-radius: 7px;
  &:hover{
    border: 1px solid #FF885B ;
    color:whitesmoke;
    scale: 105%;
    transition: 0.2s;
  }
  
`
export default Button;