import contactReducer from './contactReducer'
import settingReducer from './settingReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  contact: contactReducer,
  setting: settingReducer,
});

export default rootReducer