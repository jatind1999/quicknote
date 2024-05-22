import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    [contenteditable]:focus{
        outline: 0px solid transparent;
    }
    [placeholder]:empty:before{
        content: attr(placeholder);
        opacity: 0.5;
        font-weight: 100;
    }
}
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1300px;
    border-radius: 10px;
    box-shadow: 0 0 4px 5px rgba(0, 0, 0, 0.1);
    margin: auto;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 30px;
    @media screen and (max-width: 900px) {
        background: #000;
    }
`;

export const Button = styled.button`
    border: 2px solid transparent;
    color: ${(props) => (props.dark ? "#FFF" : "000")};
    border-radius: 5px;
    padding: 4px 8px;
    font-size: ${(props) => (props.size ? `${props.size}px` : "16px")};
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
    &:hover {
        border: 2px solid black;
        background: #ddd;
        cursor: pointer;
    }
`;
export default GlobalStyle;
