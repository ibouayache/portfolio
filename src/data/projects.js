import bootstrapLogo from "../res/bootstrap.png"
import jqueryLogo from "../res/jquery.png"
import nodeLogo from "../res/node.png"
import laptop from "../res/macbookpro.png"
import sayaradz from "../res/sayaradz.png"
import dznow from "../res/dznow.png"
import myparking from "../res/myparking.png"

const projects = [ {
    title: 'PROJECTS.MYPARKING.TITLE',
    desciption: '',
    year: '2020',
    picture: myparking,
    technologies: [jqueryLogo,nodeLogo]
},  {
    title: 'PROJECTS.SAYARADZ.TITLE',
    desciption: 'PROJECTS.SAYARADZ.DESCRIPTION',
    picture: sayaradz,
    year: '2018',
    technologies: [bootstrapLogo,jqueryLogo,nodeLogo]
},  {
    title: 'PROJECTS.DZNOW.TITLE',
    desciption: 'PROJECTS.DZNOW.DESCRIPTION',
    picture: dznow,
    year: '2019',
    technologies: [bootstrapLogo,jqueryLogo,nodeLogo]
},{
    title: 'PROJECTS.LOGISTIQUE.TITLE',
    desciption: '',
    year: '2020',
    picture: laptop,
    technologies: [jqueryLogo,nodeLogo]
},];
export default projects;
