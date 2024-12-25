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
  
    width: 100px;
    height: 50px;
  background-color: transparent;
  border: 1px solid #FF885B;
  color:white;
  border-radius: 7px;
  &:hover{
    border: 1px solid #FF885B ;
    color:whitesmoke;
    scale: 105%;
  }
  
`
export default Button;