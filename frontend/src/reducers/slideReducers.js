import { SLIDE_DETAILS_FAIL, SLIDE_DETAILS_REQUEST, 
    SLIDE_DETAILS_RESET, SLIDE_DETAILS_SUCCESS, SLIDE_CREATE_FAIL,
    SLIDE_CREATE_REQUEST, SLIDE_CREATE_SUCCESS, SLIDE_DELETE_REQUEST, SLIDE_DELETE_SUCCESS, SLIDE_DELETE_FAIL } from "../constants/slideConstants"

export const getSlidesReducer = (state = { slides : [] }, action) => {
    switch (action.type) {
        case SLIDE_DETAILS_REQUEST:
            return { loading: true }
        case SLIDE_DETAILS_SUCCESS:
            return { loading: false, slides: action.payload }
        case SLIDE_DETAILS_FAIL:
            return { loading:false, error: action.payload }
        case SLIDE_DETAILS_RESET:
            return { slides: [] }
        default:
            return state
    }
}

export const createSlideReducer = (state = {}, action) => {
    switch (action.type) {
        case SLIDE_CREATE_REQUEST:
            return { loading: true }
        case SLIDE_CREATE_SUCCESS:
            return { loading: false, success: true }
        case SLIDE_CREATE_FAIL:
            return { loading:false, error: action.payload }
        default:
            return state
    }
}

export const deleteSlideReducer = (state = {}, action) => {
    switch (action.type) {
        case SLIDE_DELETE_REQUEST:
            return { loading: true }
        case SLIDE_DELETE_SUCCESS:
            return { loading: false, success: true }
        case SLIDE_DELETE_FAIL:
            return { loading:false, error: action.payload }
        default:
            return state
    }
}