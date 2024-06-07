import {
    ADD_COMPLAINT,
    ADD_COMPLAINT_SUCCESS,
    ADD_COMPLAINT_FAIL,
} from './actionTypes';

const initialState = {
    complaints: [],
    loading: false,
    error: null,
};

const complaintsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMPLAINT:
            return {
                ...state,
                loading: true,
            };
        case ADD_COMPLAINT_SUCCESS:
            return {
                ...state,
                loading: false,
                complaints: [...state.complaints, action.payload],
            };
        case ADD_COMPLAINT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default complaintsReducer;
