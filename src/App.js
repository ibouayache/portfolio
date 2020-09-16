import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeComponent from "./components/home";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {useTranslation, withTranslation} from "react-i18next";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams, Redirect
} from "react-router-dom";
import 'react-bnb-gallery/dist/style.css'
import bg404 from "./res/bg_404.png"
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
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/fr" />
                    </Route>
                    <Route path="/fr" children={<HomeComponent lang={"fr"}/>} />
                    <Route path="/en" children={<HomeComponent lang={"en"}/>} />
                    <Route path="/ar" children={<HomeComponent lang={"ar"}/>} />
                    <Route path="*">
                        <div style={{
                            backgroundColor:"#f5f5f5", width:'100vw', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <img src={bg404} alt="404 Error" style={{width:'150px'}}/>
                        </div>
                    </Route>
                </Switch>

            </Router>

        </ThemeProvider>
    </div>
  );
}

export default withTranslation()(App);
