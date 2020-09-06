import bootstrapLogo from "../res/bootstrap.png"
import jqueryLogo from "../res/jquery.png"
import nodeLogo from "../res/node.png"
import kotlinLogo from "../res/kotlin.png"
import herokuLogo from "../res/heroku.png"
import angularLogo from "../res/angular.png"
import djangoLogo from "../res/django.png"
import hereLogo from "../res/here.png"
import materialLogo from "../res/material.png"
import laptop from "../res/macbookpro.png"
import sayaradz from "../res/sayaradz.png"
import dznow from "../res/dznow.png"
import myparking from "../res/myparking.png"
import myparking_img1 from "./captures/myparking/myparking_img1.jpg";
import myparking_img2 from "./captures/myparking/myparking_img2.jpg";
import myparking_img3 from "./captures/myparking/myparking_img3.jpg";
import myparking_img4 from "./captures/myparking/myparking_img4.jpg";
import myparking_img5 from "./captures/myparking/myparking_img5.jpg";
import dznow_img1 from "./captures/dznow/dznow_img1.jpg";
import dznow_img2 from "./captures/dznow/dznow_img2.jpg";
import dznow_img3 from "./captures/dznow/dznow_img3.jpg";
import sayaradz_img1 from "./captures/sayaradz/sayaradz_img1.png";
import sayaradz_img2 from "./captures/sayaradz/sayaradz_img2.PNG";
import sayaradz_img3 from "./captures/sayaradz/sayaradz_img3.PNG";
import sayaradz_img4 from "./captures/sayaradz/sayaradz_img4.PNG";
import sayaradz_img5 from "./captures/sayaradz/sayaradz_img5.PNG";
import sayaradz_img6 from "./captures/sayaradz/sayaradz_img6.PNG";
import sayaradz_img7 from "./captures/sayaradz/sayaradz_img7.PNG";
import sayaradz_img8 from "./captures/sayaradz/sayaradz_img8.PNG";
import sayaradz_img9 from "./captures/sayaradz/sayaradz_img9.PNG";
import sayaradz_img10 from "./captures/sayaradz/sayaradz_img10.PNG";
import sayaradz_img11 from "./captures/sayaradz/sayaradz_img11.PNG";
import sayaradz_img12 from "./captures/sayaradz/sayaradz_img12.jpg";
import sayaradz_img13 from "./captures/sayaradz/sayaradz_img13.jpg";

const projects = [ {
    title: 'PROJECTS.MYPARKING.TITLE',
    desciption: '',
    year: '2020',
    picture: myparking,
    technologies: [kotlinLogo,djangoLogo, hereLogo, herokuLogo],
    captures: [ {
        photo: myparking_img1, //'https://picsum.photos/id/1015/1000/600/',
        thumbnail: myparking_img1, //'https://picsum.photos/id/1015/250/150/',
    },
        {
            photo: myparking_img2, //'https://picsum.photos/id/1015/1000/600/',
            thumbnail: myparking_img2, //'https://picsum.photos/id/1015/250/150/',
        },
        {
            photo: myparking_img3, //'https://picsum.photos/id/1015/1000/600/',
            thumbnail: myparking_img3, //'https://picsum.photos/id/1015/250/150/',
        },
        {
            photo: myparking_img4, //'https://picsum.photos/id/1015/1000/600/',
            thumbnail: myparking_img4, //'https://picsum.photos/id/1015/250/150/',
        },
        {
            photo: myparking_img5, //'https://picsum.photos/id/1015/1000/600/',
            thumbnail: myparking_img5, //'https://picsum.photos/id/1015/250/150/',
        },
        // {
        //     photo: 'https://picsum.photos/id/1019/1000/600/',
        //     thumbnail: 'https://picsum.photos/id/1019/250/150/',
        // },
    ]
},  {
    title: 'PROJECTS.SAYARADZ.TITLE',
    desciption: 'PROJECTS.SAYARADZ.DESCRIPTION',
    picture: sayaradz,
    year: '2018',
    technologies: [angularLogo,nodeLogo , materialLogo],
    captures: [ {photo: sayaradz_img1, thumbnail: sayaradz_img1 },
        {photo: sayaradz_img2, thumbnail: sayaradz_img2 },
        {photo: sayaradz_img3, thumbnail: sayaradz_img3 },
        {photo: sayaradz_img4, thumbnail: sayaradz_img4 },
        {photo: sayaradz_img5, thumbnail: sayaradz_img5 },
        {photo: sayaradz_img6, thumbnail: sayaradz_img6 },
        {photo: sayaradz_img7, thumbnail: sayaradz_img7 },
        {photo: sayaradz_img8, thumbnail: sayaradz_img8 },
        {photo: sayaradz_img9, thumbnail: sayaradz_img9 },
        {photo: sayaradz_img10, thumbnail: sayaradz_img10 },
        {photo: sayaradz_img11, thumbnail: sayaradz_img11 },
        {photo: sayaradz_img12, thumbnail: sayaradz_img12 },
        {photo: sayaradz_img13, thumbnail: sayaradz_img13 },
    ]
},  {
    title: 'PROJECTS.DZNOW.TITLE',
    desciption: 'PROJECTS.DZNOW.DESCRIPTION',
    picture: dznow,
    year: '2019',
    technologies: [kotlinLogo ,nodeLogo, materialLogo, herokuLogo],
    captures: [
        {
            photo: dznow_img1, //'https://picsum.photos/id/1015/1000/600/',
            thumbnail: dznow_img1, //'https://picsum.photos/id/1015/250/150/',
        },{
            photo: dznow_img2, //'https://picsum.photos/id/1015/1000/600/',
            thumbnail: dznow_img2, //'https://picsum.photos/id/1015/250/150/',
        },{
            photo: dznow_img3, //'https://picsum.photos/id/1015/1000/600/',
            thumbnail: dznow_img3, //'https://picsum.photos/id/1015/250/150/',
        },
    ]
},{
    title: 'PROJECTS.LOGISTIQUE.TITLE',
    desciption: '',
    year: '2020',
    picture: laptop,
    technologies: [jqueryLogo,nodeLogo],
    captures: []
},];
export default projects;
