import { getPublicGists } from "api/gist.service";
import { getGistList, setPageNumber } from "./actions";

export const fetchGistList = (page) => (dispatch) => {
  dispatch(setPageNumber(page));
  getPublicGists(page).then((res) => dispatch(getGistList(res)));
};
