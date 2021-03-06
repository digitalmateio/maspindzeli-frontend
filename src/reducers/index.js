import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import errorsReducer from './errors-reducer';
import tripStartReducer from './trip-start-reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  errors: errorsReducer,
  setTripStart: tripStartReducer,
});
