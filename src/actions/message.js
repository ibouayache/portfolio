import {postNewMessage} from "../services";

export const MESSAGE_ACTION_TYPES = {
    POST_MESSAGE: "SEND_MESSAGE",
    MESSAGE_SEND_LOADING: "MESSAGE_SEND_LOADING",
    MESSAGE_SENT: "MESSAGE_SENT",
    MESSAGE_SEND_ERROR: "MESSAGE_SEND_ERROR"
};

export const MessageSent = () => ({
    type: MESSAGE_ACTION_TYPES.MESSAGE_SENT,
    message: ''
});
export const MessageSendLoading = (isLoading) => ({
    type: MESSAGE_ACTION_TYPES.MESSAGE_SEND_LOADING,
    isLoading
});
export const MessageSentError = (message) => ({
    type: MESSAGE_ACTION_TYPES.MESSAGE_SEND_ERROR,
    message
});

export const sendMessage = (name,email,content, sucessCallback, errorCallback) => {
    return dispatch => {
        dispatch(MessageSendLoading(true));
        postNewMessage(name,email,content).then(res => {
            dispatch(MessageSent());
            sucessCallback();
        })
            .catch(e => {
                console.log(e);
                errorCallback();
                dispatch(MessageSentError("ERROR"))
            })
    }
};


