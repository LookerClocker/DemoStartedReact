import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionsTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action

describe('Course Action', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      // action

      const action = courseActions.createCourseSuccess(course);

      expect(action).toEqual(expectedAction);
    });
  });
});


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Action', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) =>{
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, {body: {course: [{id:1, firstName: 'Cory', lastName: 'House'}] }});

    const expectedAction = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS}
    ];

    const store = mockStore({courses: []}, expectedAction);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const action = store.getActions();
      expect(action[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(action[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });

  });

});
