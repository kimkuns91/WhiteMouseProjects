import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {        
        background-color: ${(props) => props.theme.Backgourd01};
    }  
    .Header {
        
    }
    .Footer {

    }
    .NavMenu {
        color:${(props) => props.theme.HeadLine};
    }
    .NavMenu:hover {
        color:${(props) => props.theme.HeadLine};
        transition: all 0.3s;
    }
    .BG01 {
        background-color: ${(props) => props.theme.Backgourd01};
    }
    .BG02 {
        background-color: ${(props) => props.theme.Backgourd02};
    }
    .BG03 {
        background-color: ${(props) => props.theme.Backgourd03};
    }
    .BD01 {
        border: 1px solid ${(props) => props.theme.Backgourd02}
    }
    .BD02 {
        border: 1px solid ${(props) => props.theme.Backgourd03}
    }

    .Btn {
        background-color: ${(props) => props.theme.ButtonColor} !important;
        color:${(props) => props.theme.ButtonTextColor}
    }
    .Btn:hover {
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
    .NT {
        color : ${(props) => props.theme.Hover};
    }
`;

export default GlobalStyle;