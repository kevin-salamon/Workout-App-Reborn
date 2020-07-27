import { GET_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../../types/Types';
import { getSavedWorkouts } from "../../utils/API";


export const getItems = () => dispatch => {
    getSavedWorkouts()
        .then(res => res.json())
        .then(workouts =>
            dispatch({
                type: GET_ITEMS,
                payload: workouts
            })
        )
}