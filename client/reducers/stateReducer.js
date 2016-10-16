import { SUBMIT_FORM } from '../constants/ActionTypes'

const initialState = {
    submitStatus: ""
}

export function stateReducer (state = initialState, action) {
    switch (action.type) {

        case SUBMIT_FORM:

            console.log("action.firstName", action.firstName);

            return Object.assign({}, state, {
                firstName: action.firstName,
                submitStatus: "success"
            });

        default:
            return state;

    }



}
