import { SUCCESSAUTH, FAILAUTH } from './AuthActionType';

export const sucessAuth = (user) => {
    return {
        type: SUCCESSAUTH,
        payload:user
    }
}

export const failAuth=(noUser)=>{
    return{
        type:FAILAUTH,
        payload:noUser
    }
}