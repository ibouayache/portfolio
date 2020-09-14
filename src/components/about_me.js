import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import img2 from "../res/about2.png"
import img3 from "../res/about3.png"
import img4 from "../res/about4.png"
import img5 from "../res/about5.png"
import img6 from "../res/about6.png"
import Container from "@material-ui/core/Container";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import {withTranslation} from "react-i18next";
import {getSocialLinks} from "../actions/test";
import testReducer from "../reducers/test";
import {connect} from "react-redux";
import about from "../data/about";

const classes = (theme) => ({
    line: {
        background: '#0e0153',
        width: '200px',
        height: '5px'
    },
    img: {
        width: '100%',
        height: 'auto',
    }
});

class AboutMeComponent extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount(): void {
        console.log("BEFORE",this.props.SocialLinks);
        this.props.getSocialLinks();
        console.log("AFTER",this.props.SocialLinks);
    }

    render() {


        const {theme, classes, t} = this.props;
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: {max: 4000, min: 3000},
                items: 5
            },
            desktop: {
                breakpoint: {max: 3000, min: 1024},
                items: 3
            },
            tablet: {
                breakpoint: {max: 1024, min: 464},
                items: 2
            },
            mobile: {
                breakpoint: {max: 464, min: 0},
                items: 1
            }
        };
        return <div>
            <Grid
                container
                direction="column"
                justify="center"
                spacing={6}
                alignItems="stretch"
            >
                <Grid container item xs={12} direction="column"
                      justify="center" alignItems="center">
                    <Typography style={{color: '#0e0153'}} gutterBottom variant="h4">
                        {t("ABOUT_ME_MAJ")}
                    </Typography>
                    <div className={classes.line}></div>
                </Grid>

                <Grid item xs={12} container direction="row" justify="center" alignItems="center">

                    <Grid item xs={12}>
                        <div style={{width: '94vw'}}>
                            <Carousel  responsive={responsive}>
                                {about.map(item=>(
                                    <div>
                                        <Grid direction="column" spacing={1} container alignItems="center" justify="center">
                                            <Grid container xs={4} item>
                                                <Grid item>
                                                    <img src={item.image} style={{width:'100%'}}/>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Typography style={{color:'#3886c6'}} variant="h6">
                                                    {t(item.title)}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={7}>
                                                <Typography paragraph style={{textAlign: "center"}}>
                                                    {t(item.description)}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </div>
                                ))}


                                {/*<div>Item 2</div>*/}
                                {/*<div>Item 3</div>*/}
                                {/*<div>Item 4</div>*/}
                            </Carousel>
                        </div>


                    </Grid>


                </Grid>

            </Grid>
        </div>
    }
}


const mapStateToProps = state => ({
    SocialLinks: state.testReducer
});
const mapDispatchToProps = dispatch => ({
    getSocialLinks: () => dispatch(getSocialLinks())
});
export default connect(mapStateToProps, mapDispatchToProps)(
    withTranslation()(
    withStyles(classes, {withTheme: true})(
        AboutMeComponent)));
