import { createSTore } from 'redux'

let initialState = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
}

export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_ADDRESS = "UPDATE_ADDRESS"
export const UPDATE_CITY = "UPDATE_CITY"
export const UPDATE_STATE = "UPDATE_STATE"
export const UPDATE_ZIP = "UPDATE_ZIP"

export const RESET_STATE = "RESET_STATE"

funciton reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case UPDATE_NAME:
            return { ...state, name: payload }
        case UPDATE_ADDRESS:
            return { ...state, ADDRESS: payload }
        case UPDATE_CITY:
            return { ...state, city: payload }
        case UPDATE_STATE:
            return { ...state, state: payload }
        case UPDATE_ZIP:
            return { ...state, zip: payload }
        case RESET_STATE:
            return {
                name: "",
                address: "",
                city: "",
                state: "",
                zip: "",
            }
        default: return state
    }
}

export default createSTore(reducer)