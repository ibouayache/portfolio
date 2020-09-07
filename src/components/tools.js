import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Tooltip from "@material-ui/core/Tooltip";

const classes = (theme) => ({
    line: {
        background: '#0e0153',
        width: '200px',
        height: '5px'
    },
    logo: {
        width: '64px',
        transition: 'transform 200ms',
        //transitionTimingFunction: 'ease',

        '&:hover': {
            cursor:'pointer',
            transform: 'scale(1.2)'
        }
    }
});

class ToolsComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes, t}= this.props;
        return <div>
            <Grid  spacing={6} container direction="column" justify="center" alignItems="stretch">
                <Grid item container justify="center" direction="column" alignItems="center" >
                    <Typography style={{color: '#0e0153'}} gutterBottom variant="h4">
                        TOOLS I USE
                    </Typography>
                    <div className={classes.line}></div>
                </Grid>
                <Grid item>
                    <Container maxWidth="md">
                        <Grid container spacing={4} direction="column" justify="center" alignItems="stretch" >
                            <Grid item container spacing={4} direction="row" justify="center" alignItems="center">
                                <Grid item  xs={2} style={{textAlign:"center"}}>
                                    <Tooltip arrow
                                             title={
                                            <React.Fragment>
                                                <Typography color="inherit">Github</Typography>
                                            </React.Fragment>
                                        }
                                    >
                                        <img className={classes.logo}
                                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"/>
                                    </Tooltip>
                                    </Grid>
                                <Grid item xs={2} style={{textAlign:"center"}}>
                                    <Tooltip arrow
                                             title={
                                                 <React.Fragment>
                                                     <Typography color="inherit">Adobe XD</Typography>
                                                 </React.Fragment>
                                             }
                                    >
                                    <img className={classes.logo}
                                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png"/>
                                    </Tooltip>
                                    </Grid>
                                <Grid item xs={2} style={{textAlign:"center"}}>
                                    <Tooltip arrow
                                             title={
                                                 <React.Fragment>
                                                     <Typography color="inherit">WebStorm</Typography>
                                                 </React.Fragment>
                                             }
                                    >
                                    <img className={classes.logo}
                                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/WebStorm.png/1200px-WebStorm.png"/>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={2} style={{textAlign:"center"}}>
                                    <Tooltip arrow
                                             title={
                                                 <React.Fragment>
                                                     <Typography color="inherit">Android Studio</Typography>
                                                 </React.Fragment>
                                             }
                                    >
                                    <img className={classes.logo}
                                         src="https://i.pinimg.com/originals/4e/74/7c/4e747c82368d9681b75d54f56319dae7.png"/>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                            <Grid item container spacing={4} direction="row" justify="center" alignItems="center">
                                <Grid item  xs={2} style={{textAlign:"center"}}>
                                    <Tooltip arrow
                                             title={
                                                 <React.Fragment>
                                                     <Typography color="inherit">Heroku</Typography>
                                                 </React.Fragment>
                                             }
                                    >
                                    <img className={classes.logo}
                                         src="https://cdn.iconscout.com/icon/free/png-512/heroku-225989.png"/>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={2} style={{textAlign:"center"}}>
                                    <Tooltip arrow
                                             title={
                                                 <React.Fragment>
                                                     <Typography color="inherit">Slack</Typography>
                                                 </React.Fragment>
                                             }
                                    >
                                    <img className={classes.logo}
                                         src="https://cdn0.iconfinder.com/data/icons/tuts/256/slack_alt.png"/>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={2} style={{textAlign:"center"}}>
                                    <Tooltip arrow
                                             title={
                                                 <React.Fragment>
                                                     <Typography color="inherit">PyCharm</Typography>
                                                 </React.Fragment>
                                             }
                                    >
                                    <img className={classes.logo}
                                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/PyCharm_Logo.svg/2000px-PyCharm_Logo.svg.png"/>
                                    </Tooltip>
                                    </Grid>


                            </Grid>
                        </Grid>


                    </Container>

                </Grid>
            </Grid>
        </div>;
    }
}

export default withTranslation()(withStyles(classes, {withTheme: true})(ToolsComponent));
