import {ACTION_TYPES} from "../actions/test";

const testReducer =(state={GITHUB: "a"}, action)=>{
    switch (action.type) {
        case ACTION_TYPES.SOCIALS_LOADED: {
            return {
                GITHUB: action.content,
                LINKEDIN: 'linkedin',
                MAIL: 'mail'
            }
        }
        default: {
            return state
        }
    }
};
export default testReducer
