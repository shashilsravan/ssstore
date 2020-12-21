import axios from 'axios';
import { SLIDE_CREATE_FAIL, SLIDE_CREATE_REQUEST, SLIDE_CREATE_SUCCESS, SLIDE_DELETE_FAIL, SLIDE_DELETE_REQUEST, SLIDE_DELETE_SUCCESS, SLIDE_DETAILS_FAIL, SLIDE_DETAILS_REQUEST, SLIDE_DETAILS_SUCCESS } from '../constants/slideConstants';

export const creatingSlide = ( image ) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SLIDE_CREATE_REQUEST,
        })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${userInfo.token}`
            },
        }
        await axios.post('/api/slideshow', image , config)
        dispatch({
            type: SLIDE_CREATE_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: SLIDE_CREATE_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message
        })
    }
}

export const gettingSlides = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: SLIDE_DETAILS_REQUEST,
        })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${userInfo.token}`
            },
        }
        const { data } = await axios.get(`/api/slideshow`, config)
        dispatch({
            type: SLIDE_DETAILS_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: SLIDE_DETAILS_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message
        })
    }
}

export const deletingSlide = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SLIDE_DELETE_REQUEST,
        })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${userInfo.token}`
            },
        }
        await axios.delete(`/api/slideshow/${id}`, config)
        dispatch({
            type: SLIDE_DELETE_SUCCESS
        })
        
    } catch (error) {
        dispatch({
            type: SLIDE_DELETE_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message
        })
    }
}

