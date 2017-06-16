import { combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallInProgress from './ajaxStatusReducer';
import cities from './cityReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallInProgress,
  cities
});

export default rootReducer;
