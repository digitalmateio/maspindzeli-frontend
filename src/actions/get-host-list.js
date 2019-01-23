import { GET_HOSTS } from './types';
import Api from '../services/Api';

import React from 'react';
import axios from 'axios';

export const getHosts = callback => async dispatch => {
  try {
    // let res = axios.get(Api);
    // console.log(res);
    // localStorage.setItem('tripStart', true);
    dispatch({ type: TRIP_START, payload: true });
    // callback for route redirect
    callback();
  } catch (e) {
    console.log(e);
  }
};
