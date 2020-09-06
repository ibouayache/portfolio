import {withTranslation} from "react-i18next";
import {withStyles} from "@material-ui/core/styles";
import React, {Component} from "react";
import ReactBnbGallery from 'react-bnb-gallery';
import myparking_img1 from "../data/captures/myparking/myparking_img1.jpg"
import myparking_img2 from "../data/captures/myparking/myparking_img2.jpg"
import myparking_img3 from "../data/captures/myparking/myparking_img3.jpg"
import myparking_img4 from "../data/captures/myparking/myparking_img4.jpg"
import myparking_img5 from "../data/captures/myparking/myparking_img5.jpg"
import FsLightbox from 'fslightbox-react';
import dznow_img1 from "../data/captures/dznow/dznow_img1.jpg";
import dznow_img2 from "../data/captures/dznow/dznow_img2.jpg";
import dznow_img3 from "../data/captures/dznow/dznow_img3.jpg";


const  GalleryDialog = props => {
        // const {classes} = props;
        // const {images} =  props;
        // const captures =  [dznow_img1, dznow_img2, dznow_img3];

        return (
            <div>
                        <ReactBnbGallery
                            show={props.open}
                            photos={props.images}
                            onClose={() => props.handleClose(false)}
                        />

            </div>
        );
};

export default GalleryDialog;
