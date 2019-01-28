import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import errorsReducer from './errors-reducer';
import tripStartReducer from './trip-start-reducer';
import hostListReducer from './host-list-reducer';
import hostSliderReducer from './host-slider-reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  errors: errorsReducer,
  setTripStart: tripStartReducer,
  hosts: hostListReducer,
  slideState: hostSliderReducer,
});
