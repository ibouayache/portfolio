import {fetchSocials} from "../services";

export const ACTION_TYPES = {
    GET_SOCIALS: "GET_SOCIALS",
    SOCIALS_LOADED: "SOCIALS_LOADED"
};

export const getSocialLinks = () => {
    return dispatch => {
        fetchSocials().then(res=>{

            console.log("fetch socials res");
            console.log(res);
            dispatch(SocialLinksLoaded(res.data.a))
        })
            .catch(e=>{
                console.log(e);
            dispatch(SocialLinksLoaded("ERROR"))
        })
    }
};


export const SocialLinksLoaded = (content) => ({
    type: ACTION_TYPES.SOCIALS_LOADED,
    content: content
});
