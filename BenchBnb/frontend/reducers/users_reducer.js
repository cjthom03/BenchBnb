import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';
const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let userId = action.currentUser.id;
      return merge({}, state, {[userId]: action.currentUser});
    default:
      return state;
  }
};

export default usersReducer;
