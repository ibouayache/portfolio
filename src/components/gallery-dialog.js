import {withTranslation} from "react-i18next";
import {withStyles} from "@material-ui/core/styles";
import React, {Component} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ReactBnbGallery from 'react-bnb-gallery';


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

class GalleryDialog extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        const images = [
            {
                photo: 'https://picsum.photos/id/1018/1000/600/',
                thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
                photo: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
                photo: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },
        ];

        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
                    <DialogContent>
                        <ReactBnbGallery
                            show={this.props.open}
                            photos={images}
                            onClose={() => this.props.handleClose(false)}
                        />
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default withTranslation()(withStyles(classes, {withTheme: true})(GalleryDialog));
