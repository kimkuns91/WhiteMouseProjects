import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {        
        background-color: ${(props) => props.theme.Background};
        color:${(props) => props.theme.Text};
        // transition: background-color 1s, color 1s;
    }  
    .NavMenu {
        color:${(props) => props.theme.Text};
    }
    .CustomWrap {
        background-color: ${(props) => props.theme.BoardBackground};
        border: ${(props) => props.theme.BoardBorder};
        // transition: background-color 1s, border 1s;
    }
    .LoginWrap {
        background-color: ${(props) => props.theme.BoardBackground};
        border: ${(props) => props.theme.BoardBorder};
    }
    a {
        color : ${(props) => props.theme.Text};
    }
    button {
        background-color: ${(props) => props.theme.ButtonColor};
        color:${(props) => props.theme.ButtonTextColor}
    }
    button:hover {
        background-color: ${(props) => props.theme.ButtonColorHover};
        // transition: background-color 0.3s, color 0.3s;
    }
    a:hover, button:hover {
        color : ${(props) => props.theme.Hover};
        transition: color 0.3s;
    }
    .LogoutBtn:hover {
        color : ${(props) => props.theme.Hover};
        transition: color 0.3s;
    }
    .HL01 {
        color : ${(props) => props.theme.HeadLine};
    }
    .HL02 {
        color : ${(props) => props.theme.HeadLine};
    }
    .HL03 {
        color : ${(props) => props.theme.HeadLine};
    }
    .HL04 {
        color : ${(props) => props.theme.HeadLine};
    }
    .HL05 {
        color : ${(props) => props.theme.HeadLine};
    }
    .HL06 {
        color : ${(props) => props.theme.HeadLine};
    }
    .ST01 {
        color : ${(props) => props.theme.SubTitle};
    }
    .ST02 {
        color : ${(props) => props.theme.SubTitle};
    }
    .BD01 {
        color : ${(props) => props.theme.BodyText};
    }
    .BD02 {
        color : ${(props) => props.theme.BodyText};
    }
    .CT01 {
        color : ${(props) => props.theme.Caption};
    }
    .CT02 {
        color : ${(props) => props.theme.Caption};
    }
    .modeChangeWrap {
        border: ${(props) => props.theme.modeChangeBorder};
    }
    .ListWrap {
        border: ${(props) => props.theme.modeChangeBorder};
    }
    .PostHead {
        border-bottom: 1px solid ${(props) => props.theme.Text};
    }
`;

export default GlobalStyle;