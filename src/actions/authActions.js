import { userDB } from '../db/users';

export const updateLogInInfo = (fieldType, data) => {
    //console.log(data)
    let filterdData = data.match('([A-Za-z0-9ÅÄÖåäö]*)')[1]
    console.log(filterdData)
    return {
        type: 'UPDATE_LOGIN_INFO',
        payload: { key: fieldType, value: filterdData },
    };
}

export const validateUser = (name, passwd) => dispatch => {
    console.log(name)
    let user = userDB[name];
    if (user && user.passwd === passwd) {
        dispatch({
            type: 'LOGIN_SUCCESS',
        });
        dispatch({
            type: 'GAME_START',
            payload: user.img,
        });
    } else {
        dispatch({
            type: 'LOGIN_FAILED',
        });
    }
}
export const closeError = () => {
    return {
        type: 'ERROR_HANDELD',
    };
}
