import {
    ADD_COMPLAINT,
    ADD_COMPLAINT_SUCCESS,
    ADD_COMPLAINT_FAIL,
} from './actionTypes';

// Action pour ajouter une plainte
export const addComplaint = (complaint) => ({
    type: ADD_COMPLAINT,
    payload: complaint,
});

// Action pour réussir l'ajout d'une plainte
export const addComplaintSuccess = (complaint) => ({
    type: ADD_COMPLAINT_SUCCESS,
    payload: complaint,
});

// Action pour échec de l'ajout d'une plainte
export const addComplaintFail = (error) => ({
    type: ADD_COMPLAINT_FAIL,
    payload: error,
});
