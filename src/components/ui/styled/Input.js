import styled, { css } from 'styled-components';

const Input = styled.input`
    font-size: 14px;
    height: 36px;
    color: #292929;
    background-color: #F9F8F8;
    border-radius: 8px;
    border: none;
    padding: 8px;
    width: 100%;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */    
    ${props => props.error && css`border: 1px solid red;`}
    ${props => props.disabled && css`
      background: #FFFFFF;
      border-bottom: 1px solid #d6d6d6;
    `}
    &:focus {
      outline: none;
    }
`

export default Input