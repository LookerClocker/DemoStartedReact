import { combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallInProgress from './ajaxStatusReducer';
import cities from './cityReducer';
import photographers from './photographerReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallInProgress,
  cities,
  photographers
});

export default rootReducer;
