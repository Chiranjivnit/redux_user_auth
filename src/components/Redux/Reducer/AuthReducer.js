import { SUCCESSAUTH,FAILAUTH } from '../actions/AuthActionType';

const initialState = {
    user: []
}
const AuthReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case SUCCESSAUTH:
            return {...state, user: [actions.payload]}
        case FAILAUTH:
            return {user:actions.payload}
        default:
            return initialState
    }

}
export default AuthReducer