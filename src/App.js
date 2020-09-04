import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeComponent from "./components/home";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {useTranslation, withTranslation} from "react-i18next";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },

});

function App() {
    const { t, i18n } = useTranslation();
    return (
    <div style={{direction:i18n.language==='ar' ?  'rtl' : 'ltr'}}>
        <ThemeProvider theme={theme}>
                <HomeComponent></HomeComponent>
        </ThemeProvider>
    </div>
  );
}

export default withTranslation()(App);
