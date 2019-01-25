import { GET_HOSTS } from './types';
import Api from '../services/Api';

import React from 'react';

export const callHostList = () => async dispatch => {
  try {
    let res = await Api().get();
    dispatch({ type: GET_HOSTS, payload: res.data.images });
  } catch (e) {
    console.log(e);
  }
};
