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
`;

export default GlobalStyle;