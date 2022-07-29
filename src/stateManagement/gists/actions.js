import {
  GET_GIST_LIST,
  SELECT_GIST,
  SET_LOGIN_STATE,
  SET_PAGE_NUMBER,
} from "stateManagement/actionTypes";

export const getGistList = (payload) => ({ type: GET_GIST_LIST, payload });

export const setSelectedGist = (payload) => ({ type: SELECT_GIST, payload });

export const setPageNumber = (payload) => ({ type: SET_PAGE_NUMBER, payload });

export const setLoggedInState = (payload) => ({
  type: SET_LOGIN_STATE,
  payload,
});
