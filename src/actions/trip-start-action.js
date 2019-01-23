import { TRIP_START } from './types';

export const setTripStart = callback => async dispatch => {
  try {
    localStorage.setItem('tripStart', true);
    dispatch({ type: TRIP_START, payload: true });
    // callback for route redirect
    callback();
  } catch (e) {
    console.log(e);
  }
};
