import React, {Component, useEffect, useState} from 'react';
import {TextField, withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import linkedin from "../res/linkedin.png"
import github from "../res/github.png"
import mail from "../res/mail.png"
import {useTranslation, withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {sendMessage} from "../actions/message";
import {Controller, useForm} from "react-hook-form";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from '@material-ui/lab/Alert';
import Tooltip from "@material-ui/core/Tooltip";

const CssTextField = withStyles({
    root: {
        '& input': {
            color: 'white',
        },
        '& textarea': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: '#dedede',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#dedede',
            },
        },
    },
})(TextField);


let ContactForm = props => {

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const {t} = useTranslation();
    const {handleSubmit, register, errors, control, reset} = useForm();

    const onSubmit = data => {
        props.sendNewMessage(data.name, data.email, data.content, () => {
            reset();
            openSuccessMessage();
        }, () => {
            openErrorMessage();
        })
    };

    const openErrorMessage = () => {
        setOpen2(true);
    };

    const openSuccessMessage = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen2(false);
        setOpen(false);
    };


    return <form>
        <Grid item xs={12}>
            <CssTextField style={{width: '100%'}} variant="outlined"
                          error={errors.name}
                          helperText={errors.name ? t("REQUIRED") : ''}
                          name="name" inputRef={register({required: true})} label={t("NAME")}/>

        </Grid>
        <Grid item style={{paddingTop: '15px'}} xs={12}>
            <CssTextField style={{width: '100%'}} variant="outlined"
                          error={errors.email}
                          helperText={errors.email ? t("REQUIRED") : ''}
                          name="email" inputRef={register({required: true})} label={t("EMAIL")}/>
        </Grid>
        <Grid item style={{paddingTop: '15px'}} xs={12}>
            <CssTextField style={{width: '100%'}} variant="outlined"
                          error={errors.content}
                          multiline rows={4}
                          helperText={errors.content ? t("REQUIRED") : ''}
                          name="content" inputRef={register({required: true})} label={t("CONTENT")}/>
        </Grid>
        <Grid container item alignItems="center" justify="space-between" style={{paddingTop: '15px'}} xs={12}>
            <Grid item>
                {props.msgState.isLoading ? <CircularProgress size={25} style={{color: "white"}}/> : ''}
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert elevation={6} variant="filled" onClose={handleClose} severity="success">
                        {t("SUCCESS_MSG")}
                    </Alert>
                </Snackbar>
                <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose}>
                    <Alert elevation={6} variant="filled" onClose={handleClose} severity="error">
                        {t("ERROR_MSG")}
                    </Alert>
                </Snackbar>
            </Grid>
            <Grid item>
                <Button disabled={props.msgState.isLoading} onClick={handleSubmit(onSubmit)}
                        style={{
                            background: 'white',
                            paddingRight: '30px',
                            paddingLeft: '30px',
                            color: '#12093e',
                            '&:hover': {
                                background: '#dadada',
                            }
                        }}
                        variant="contained" color="primary"
                        disableElevation>
                    {t("SEND")}
                </Button>
            </Grid>

        </Grid>
    </form>
};
//

const mapStateToProps = state => ({
    msgState: state.messageReducer
});
const mapDispatchToProps = dispatch => ({
    sendNewMessage: (name, email, content, successCallback, errorCallback) =>
        dispatch(sendMessage(name, email, content, successCallback, errorCallback))
});
ContactForm = connect(mapStateToProps, mapDispatchToProps)(ContactForm);


const classes = (theme) => ({
    line: {
        background: 'white',
        width: '200px',
        height: '5px'
    },
    socialBtn: {
        borderRadius: '100px',
        padding: '10px'
    }
});


class ContactComponent extends Component {

    constructor(props) {
        super(props);
    }

    // handleSubmit =(data) => {
    //     console.log("data main comp", data);
    //     this.props
    // };

    render() {
        const {theme, classes, t} = this.props;
        return <div style={{paddingTop: '20px'}}>
            <Grid
                container
                direction="column"
                justify="center"
                spacing={3}
                alignItems="center"
            >
                <Grid container direction="column" alignItems="center" justify="center" item>
                    <Typography style={{color: 'white'}} gutterBottom variant="h4">
                        {t("CONTACT_MAJ")}
                    </Typography>
                    <div className={classes.line}></div>

                </Grid>
                <Grid item>
                    <Typography style={{color: 'white'}} paragraph>
                        {t("SEND_ME")}
                    </Typography>
                </Grid>
                <Grid container item>
                    <Container maxWidth="sm">
                        <Grid direction="column" justify="center" alignItems="stretch">
                            <ContactForm/>
                            <Grid container direction="column" alignItems="center" item justify="center"
                                  style={{paddingTop: '5px', paddingBottom: '15px'}} xs={12}>
                                <Grid item xs={6} container justify="center" alignItems="center">
                                    <Tooltip arrow
                                             title={
                                                 <React.Fragment>
                                                     <Typography
                                                         color="inherit">linkedin.com/in/islam-bouayache</Typography>
                                                 </React.Fragment>
                                             }
                                    >
                                        <Button className={classes.socialBtn}
                                                href="https://www.linkedin.com/in/islam-bouayache/">
                                            <img src={linkedin} style={{width: '25px'}}/>
                                        </Button>
                                    </Tooltip>
                                    <Tooltip arrow
                                             title={
                                                 <React.Fragment>
                                                     <Typography color="inherit">fm_bouayache@esi.dz</Typography>
                                                 </React.Fragment>
                                             }
                                    >
                                        <Button className={classes.socialBtn} href="mailto:fm_bouayache@esi.dz">
                                            <img src={mail} style={{width: '25px'}}/>
                                        </Button>
                                    </Tooltip>
                                    <Tooltip arrow
                                             title={
                                                 <React.Fragment>
                                                     <Typography color="inherit">github.com/islam2018</Typography>
                                                 </React.Fragment>
                                             }
                                    >
                                        <Button className={classes.socialBtn} href="https://github.com/islam2018">
                                            <img src={github} style={{width: '25px'}}/>
                                        </Button>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={10} container justify="center" alignItems="center">
                                    <Typography paragraph style={{color: '#3886c6'}}>
                                        {t("FOOTER_INFO")}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </div>
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(
    withTranslation()(
        withStyles(classes, {withTheme: true})(
            ContactComponent)));
