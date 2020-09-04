import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {withTranslation} from "react-i18next";
import {GetApp} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import french from "../res/french.png";
import english from "../res/english.png";
import arabic from "../res/arabi.PNG";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },

});

const DialogTitle = withStyles(styles)((props) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


const classes = (theme) => ({
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        border: 'solid 1px #dadada',
        borderRadius: '5px',
        '&:hover': {
            cursor: 'pointer',
            background: '#ededed'
        }
    },
    flag: {
        width: '70px',
        height: '50px',
        borderRadius: '10px',
        backgroundSize: '100%'
    }
});

class CVDialog extends Component {


    render() {
        const {classes} = this.props;
        return (
            <div >
                <Dialog  onClose={this.props.closeCVDialog} aria-labelledby="customized-dialog-title"
                        open={this.props.open}>
                    <DialogTitle id="customized-dialog-title" onClose={this.props.closeCVDialog}>
                        Télécharger mon CV
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            Veuillez choisir la langue :
                        </Typography>
                        <Grid container spacing={2} style={{minWidth: '400px'}} direction="row" justify="center"
                              alignItems="center">
                            <Grid  item xs={6}>
                                <div className={classes.box}>
                                    <img src={french} className={classes.flag}/>
                                        <Typography variant="h6">
                                            FRENCH
                                        </Typography>

                                </div>
                            </Grid>
                            <Grid   item xs={6}>
                                <div className={classes.box}>
                                    <img src={english} className={classes.flag}/>
                                    <Typography variant="h6">
                                        ENGLISH
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={this.props.closeCVDialog} color="primary">
                            <GetApp color="primary"></GetApp> Télécharger
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withTranslation()(withStyles(classes, {withTheme: true})(CVDialog));
