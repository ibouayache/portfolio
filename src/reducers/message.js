import {MESSAGE_ACTION_TYPES} from "../actions/message";

const initialState = {
    isLoading: false,
    error: ''
};
const  messageReducer  =(state=initialState, action)=>{
    switch (action.type) {
        case MESSAGE_ACTION_TYPES.MESSAGE_SENT: {
            return {
                isLoading: false,
                error: ''
            }
        }
        case MESSAGE_ACTION_TYPES.MESSAGE_SEND_ERROR: {
            return {
                isLoading: false,
                error: action.message
            }
        }
        case MESSAGE_ACTION_TYPES.MESSAGE_SEND_LOADING: {
            return {
                isLoading: action.isLoading,
                error: ''
            }
        }
        default: {
            return state
        }
    }
};
export default messageReducer
