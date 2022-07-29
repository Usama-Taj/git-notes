import {
  GET_GIST_LIST,
  SELECT_GIST,
  SET_LOGIN_STATE,
  SET_PAGE_NUMBER,
} from "stateManagement/actionTypes";

const initial_state = {
  gists_list: [],
  selected_gist: {},
  page_number: 1,
  logged_in: JSON.parse(localStorage.getItem("gist_app"))?.logged_in || false,
};
export default (state = initial_state, action) => {
  switch (action.type) {
    case GET_GIST_LIST:
      return { ...state, gists_list: action.payload };
    case SELECT_GIST:
      return { ...state, selected_gist: action.payload };
    case SET_PAGE_NUMBER:
      return action.payload <= 30 && action.payload >= 1
        ? { ...state, page_number: action.payload }
        : { ...state };
    case SET_LOGIN_STATE:
      return { ...state, logged_in: action.payload };
    default:
      return state;
  }
};
