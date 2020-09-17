import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Tooltip from "@material-ui/core/Tooltip";
import github from "../res/tools/github.png";
import xd from "../res/tools/xd.png";
import webstorm from "../res/tools/webstorm.png";
import androids from "../res/tools/as.png";
import slack from "../res/tools/slack.png";
import postman from "../res/tools/postman.png";
import heroku from "../res/tools/heroku.png";
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
                        {t("TOOLS")}
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
                                        <a href="https://github.com/">
                                            <img className={classes.logo} alt="Github"
                                                 src={github}/>
                                        </a>

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
                                        <a href="https://www.adobe.com/products/xd.html">
                                            <img className={classes.logo} alt="AdobeXD"
                                                 src={xd}/>
                                        </a>

                                    </Tooltip>
                                    </Grid>
                                <Grid item xs={2} style={{textAlign:"center"}}>
                                    <Tooltip  arrow
                                             title={
                                                 <React.Fragment>
                                                     <Typography color="inherit">Slack</Typography>
                                                 </React.Fragment>
                                             }
                                    >
                                        <a href="https://slack.com">
                                            <img className={classes.logo} alt="Slack"
                                                 src={slack}/>
                                        </a>

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
                                        <a href="https://www.jetbrains.com/webstorm/">
                                            <img className={classes.logo} alt="WebStorm"
                                                 src={webstorm}/>

                                        </a>
                                    </Tooltip>
                                </Grid>

                            </Grid>
                            <Grid item container spacing={4} direction="row" justify="center" alignItems="center">

                                <Grid item xs={2} style={{textAlign:"center"}}>
                                    <Tooltip arrow
                                             title={
                                                 <React.Fragment>
                                                     <Typography color="inherit">Android Studio</Typography>
                                                 </React.Fragment>
                                             }
                                    >
                                        <a href="https://developer.android.com/studio">
                                            <img className={classes.logo} alt="AndroidStudio"
                                                 src={androids}/>

                                        </a>
                                       </Tooltip>
                                </Grid>

                                <Grid item  xs={2} style={{textAlign:"center"}}>
                                    <Tooltip arrow
                                             title={
                                                 <React.Fragment>
                                                     <Typography color="inherit">Postman</Typography>
                                                 </React.Fragment>
                                             }
                                    >
                                        <a href="https://www.postman.com/">
                                        <img className={classes.logo}
                                             src={postman}/>
                                        </a>
                                    </Tooltip>
                                </Grid>
                                <Grid item  xs={2} style={{textAlign:"center"}}>
                                    <Tooltip arrow
                                             title={
                                                 <React.Fragment>
                                                     <Typography color="inherit">Heroku</Typography>
                                                 </React.Fragment>
                                             }
                                    >
                                        <a href="https://www.heroku.com">
                                            <img className={classes.logo}
                                                 src={heroku}/>
                                        </a>

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
