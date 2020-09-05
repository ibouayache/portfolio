import React, {Component} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {withStyles} from "@material-ui/core";
import topImg from '../res/top_img.jpg';
import meProfileImg from '../res/me.png';

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import classNames from 'classnames'
import AboutMeComponent from "./about_me";
import MyProjectsComponent from "./my_projects";
import ContactComponent from "./contact";
import Container from "@material-ui/core/Container";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SendIcon from '@material-ui/icons/Send';
import french from '../res/french.png'
import english from '../res/english.png'
import arabic from '../res/arabi.PNG'
import {
    ArrowDropDown,
    AssignmentInd,
    ContactMail,
    BusinessCenter,
    PlayArrow,
    ChevronLeft,
    GetApp
} from '@material-ui/icons';
import {withTranslation} from "react-i18next";
import CVDialog from "./cv_dialog";
import cv from "../res/about1.png";
const drawerWidth = 240;
const classes = (theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {

        [theme.breakpoints.up('sm')]: {
            // width: `calc(100% - ${drawerWidth}px)`,
            width: '100%'
            // marginLeft: drawerWidth,
        },
    },
    bgNoneAppBar: {
        background: 'transparent',
        boxShadow: 'none',
    },
    bgAppBar: {
        background: '#12093eee',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        background: 'white'
        // padding: theme.spacing(3),
    },
    topImg: {
        width: '100%',
        height: '85vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        background: 'url(' + topImg + ')'
    },
    meProfile: {
        width: '100%',
        height: 'auto'
    },
    name: {
        color: 'white',
        fontSize: '34pt',
        [theme.breakpoints.down('xs')]: {
            fontSize: '24pt'
        },
        // [theme.breakpoints.up('sm')]: {
        //     fontSize: '20pt'
        // },
        // [theme.breakpoints.up('md')]: {
        //     fontSize: '28pt'
        // }
    },
    engineer: {
        fontSize: '14pt',
        // [theme.breakpoints.down('sm')]: {
        //     fontSize: '12pt',
        // },

    },
    headerBtn: {
        color: 'white'
    },
    headerEN: {
        marginLeft: '40%'
    },
    headerAR: {
        marginRight: '40%'
    },
    flag: {
        width: '24px',
        height: '24px',
        borderRadius: '15px',
        backgroundSize: '100%'
    }
});


class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false,
            coloredHeader: false,
            anchorEl: null,
            anchorEl2: null,
            cvDialogOpened: false
        }
    }

    setCVDialogOpen = (value) =>{
        this.setState({
            cvDialogOpened: value
        })
    };
    openCVDialog = () => {
        this.setCVDialogOpen(true);
    };
    closeCVDialog = () => {
        this.setCVDialogOpen(false);
    };

    setMobileOpen = (value) => {
        this.setState({
            mobileOpen: value,
            coloredHeader: false
        })
    };

    setAnchorEl = (value) => {
        this.setState({
            anchorEl: value
        });
    };

    setAnchorEl2 = (value) => {
        this.setState({
            anchorEl2: value
        });
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = event => {
        let scrollTop = window.scrollY;
        console.log(scrollTop);
        this.setState({
            coloredHeader: scrollTop > 100
        });
    };

    changeLangage = (lang) => {
        const {i18n} = this.props;
        i18n.changeLanguage(lang);
        this.setAnchorEl(null);
        this.setAnchorEl2(null);
    };

    // handleCloseMenu = () => {
    //     this.setAnchorEl(null);
    // };


    handleClick = (event) => {
        this.setAnchorEl(null);
    };
    handleClick2 = (event) => {
        this.setAnchorEl2(null);
    };

    handleOpenMenu = (event) => {
        this.setAnchorEl(event.currentTarget);
    };
    handleOpenMenu2 = (event) => {
        this.setAnchorEl2(event.currentTarget);
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.props.t !== prevProps.t) {
            console.log("LANG: : " + this.props.i18n.language);
        }
    }

    render() {
        const {window} = this.props;
        const {classes, theme, t, i18n} = this.props;
        // const [, ] = React.useState(false);

        const handleDrawerToggle = () => {
            this.setMobileOpen(!this.state.mobileOpen);
        };
        const container = window !== undefined ? () => window().document.body : undefined;
        const menuItems = [
            {
                key: "ABOUT_ME",
                icon: <AssignmentInd></AssignmentInd>
            },
            {
                key: "MY_PROJECTS_MAJ",
                icon: <BusinessCenter></BusinessCenter>
            }, {
                key: "CONTACT_MAJ",
                icon: <ContactMail></ContactMail>
            }
        ];

        const drawer = (
            <div>
                <div className={classes.toolbar}/>
                <Divider/>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem button key={item.key}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={t(item.key)}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {[t("LANGAGE")].map((text, index) => (
                        <ListItem aria-controls="simple1-menu"
                                  aria-haspopup="true"
                                  onClick={this.handleOpenMenu2} button key={text}>
                            <ListItemIcon>
                                    <ChevronLeft></ChevronLeft>
                                <img src={i18n.language === 'fr' ? french :
                                    (i18n.language === 'en' ? english : arabic)} className={classes.flag}/>
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                    <ListItem button href="https://drive.google.com/file/d/1Z5ztUG_xSGms4oUL_-vRCZpYxNaF5fh1/view?usp=sharing">
                        <ListItemIcon>
                            <GetApp color="white"></GetApp>
                        </ListItemIcon>
                        <ListItemText primary={t("CV")}/>
                    </ListItem>
                    <Menu
                        id="simple1-menu"
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        anchorEl={this.state.anchorEl2}
                        keepMounted
                        getContentAnchorEl={null}
                        open={Boolean(this.state.anchorEl2)}
                        onClose={this.handleClick2}
                    > <MenuItem onClick={() => this.changeLangage('fr')}>
                        <ListItemIcon>
                            <img src={french} className={classes.flag}/>
                        </ListItemIcon>
                        <ListItemText primary="French - Français"/>
                    </MenuItem>
                        <MenuItem onClick={() => this.changeLangage('en')}>
                            <ListItemIcon>
                                <img src={english} className={classes.flag}/>
                            </ListItemIcon>
                            <ListItemText primary="English - Anglais"/>
                        </MenuItem>
                        <MenuItem onClick={() => this.changeLangage('ar')}>
                            <ListItemIcon>
                                <img src={arabic} className={classes.flag}/>
                            </ListItemIcon>
                            <ListItemText primary="Arabic - العربية"/>
                        </MenuItem>
                    </Menu>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classNames(classes.appBar,
                    this.state.coloredHeader ? classes.bgAppBar : classes.bgNoneAppBar)}>
                    <Toolbar>
                        <Grid className={i18n.language === 'ar' ? classes.headerAR : classes.headerEN}
                              container
                              direction="row"
                              justify="flex-end"
                              alignItems="center"
                        >
                            <Hidden smDown>
                                <Grid item md={2}>
                                    <Button className={classes.headerBtn}>
                                        {t("ABOUT_ME")}
                                    </Button>
                                </Grid>
                                <Grid item md={2}>
                                    <Button className={classes.headerBtn}>
                                        {t("MY_PROJECTS_MAJ")}
                                    </Button>
                                </Grid>
                                <Grid item md={2}>
                                    <Button className={classes.headerBtn}>
                                        {t("CONTACT_MAJ")}
                                    </Button>
                                </Grid>
                                <Grid item xs={1}>

                                    <Button href={cv} className={classes.headerBtn}>
                                        <GetApp color="white"></GetApp> {t("CV")}
                                    </Button>
                                    <CVDialog open={this.state.cvDialogOpened} closeCVDialog={this.closeCVDialog}></CVDialog>
                                </Grid>
                                <Grid item xs={1}>

                                    <Button className={classes.headerBtn} aria-controls="simple-menu"
                                            aria-haspopup="true"
                                            onClick={this.handleOpenMenu}>
                                        <img src={i18n.language === 'fr' ? french :
                                            (i18n.language === 'en' ? english : arabic)} className={classes.flag}/>
                                        <ArrowDropDown color="white"></ArrowDropDown>
                                    </Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        anchorEl={this.state.anchorEl}
                                        keepMounted
                                        getContentAnchorEl={null}
                                        open={Boolean(this.state.anchorEl)}
                                        onClose={this.handleClick}
                                    >
                                        <MenuItem onClick={() => this.changeLangage('fr')}>
                                            <ListItemIcon>
                                                <img src={french} className={classes.flag}/>
                                            </ListItemIcon>
                                            <ListItemText primary="French - Français"/>
                                        </MenuItem>
                                        <MenuItem onClick={() => this.changeLangage('en')}>
                                            <ListItemIcon>
                                                <img src={english} className={classes.flag}/>
                                            </ListItemIcon>
                                            <ListItemText primary="English - Anglais"/>
                                        </MenuItem>
                                        <MenuItem onClick={() => this.changeLangage('ar')}>
                                            <ListItemIcon>
                                                <img src={arabic} className={classes.flag}/>
                                            </ListItemIcon>
                                            <ListItemText primary="Arabic - العربية"/>
                                        </MenuItem>
                                    </Menu>
                                </Grid>
                            </Hidden>

                            {/*<Typography edge="end" variant="h6" noWrap>*/}
                            {/*    Responsive drawer*/}
                            {/*</Typography>*/}
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                className={classes.menuButton}
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Grid>


                    </Toolbar>
                </AppBar>
                <nav aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'left' : 'right'}
                            open={this.state.mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        {/*<Drawer*/}
                        {/*    classes={{*/}
                        {/*        paper: classes.drawerPaper,*/}
                        {/*    }}*/}
                        {/*    variant="permanent"*/}
                        {/*    open*/}
                        {/*>*/}
                        {/*    {drawer}*/}
                        {/*</Drawer>*/}
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.topImg}>
                        <Container maxWidth="xl" style={{height: '90%'}}>

                            <Grid style={{height: '90%'}}
                                  container
                                  spacing={2}
                                  direction="row"
                                  justify="center"
                                  alignItems="center"
                            >
                                <Grid item xs={2} md={2} sm={1}></Grid>
                                <Grid item xs={7} sm={4} md={3}>
                                    <img src={meProfileImg} className={classes.meProfile}/>
                                </Grid>
                                <Hidden smUp>
                                    <Grid item xs={3}></Grid>
                                    <Grid item xs={2}></Grid>
                                </Hidden>


                                <Grid item container justify="center" alignItems="flex-start" direction="column"
                                      xs={10} md={6} sm={6}>
                                    <Typography className={classes.name} variant="h1" component="h2" gutterBottom>
                                        {t("BMI")}
                                    </Typography>
                                    <Typography className={classes.engineer} style={{color: '#3886c6'}} variant="h5"
                                                gutterBottom>
                                        {t("ENGINEER")}
                                    </Typography>
                                </Grid>


                            </Grid>
                        </Container>

                    </div>
                    <div style={{marginTop: '20px'}}></div>

                    <Container maxWidth="xl">

                        <Grid
                            container

                            direction="column"
                            justify="center"
                            alignItems="stretch"
                        >
                            <Grid item xs={12} style={{marginBottom: '50px'}}>
                                <AboutMeComponent></AboutMeComponent>
                            </Grid>
                            <Grid item xs={12} style={{marginBottom: '50px'}}>
                                <MyProjectsComponent></MyProjectsComponent>
                            </Grid>
                            <Grid item xs={12}>

                            </Grid>

                        </Grid>
                    </Container>
                    <div style={{backgroundColor: '#12093e'}}>
                        <Container maxWidth="xl">
                            <ContactComponent></ContactComponent>
                        </Container>
                    </div>

                    {/*<div className={classes.toolbar} ></div>*/}


                    {/*<Typography paragraph>*/}
                    {/*    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla*/}
                    {/*    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac*/}
                    {/*    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat*/}
                    {/*    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed*/}
                    {/*    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In*/}
                    {/*    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et*/}
                    {/*    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin*/}
                    {/*    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas*/}
                    {/*    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.*/}
                    {/*</Typography>*/}

                </main>
            </div>
        );
    }
}

export default withTranslation()(withStyles(classes, {withTheme: true})(HomeComponent));

