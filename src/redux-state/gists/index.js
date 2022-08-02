import {
  getGistsByUser,
  getPublicGists,
  getPublicStarredGists,
} from "api/gist.service";
import { getGistList, setPageNumber } from "./actions";

export const fetchGistList =
  (page, profile = "", starred = false) =>
  (dispatch) => {
    if (profile) {
      getGistsByUser(profile).then((res) => dispatch(getGistList(res)));
    } else if (starred) {
      dispatch(setPageNumber(page));
      getPublicStarredGists(page).then((res) => dispatch(getGistList(res)));
    } else {
      dispatch(setPageNumber(page));
      getPublicGists(page).then((res) => dispatch(getGistList(res)));
    }
  };
