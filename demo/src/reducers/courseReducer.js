import * as actionTypes from '../actions/actionTypes';

export default function courseReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.INIT_NEW_COURSE:
      return {
        title: '',
        length: '',
        category: '',
        isNew: true,
      };

    case actionTypes.EDIT_COURSE:
      return Object.assign({}, {
        isNew: false,
        hasUnsavedChanges: false,
      }, action.course);

    case actionTypes.CHANGE_COURSE_TITLE:
      return Object.assign({}, state, {
        title: action.title,
        hasUnsavedChanges: true,
      });

    case actionTypes.CHANGE_COURSE_LENGTH:
      return Object.assign({}, state, {
        length: action.length,
        hasUnsavedChanges: true,
      });

    case actionTypes.CHANGE_COURSE_CATEGORY:
      return Object.assign({}, state, {
        category: action.category,
        hasUnsavedChanges: true,
      });

    case actionTypes.RESET_COURSE_CHANGES:
      return Object.assign({}, state, {
        hasUnsavedChanges: false,
      });

    default:
      return state;
  }
}
