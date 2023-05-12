import axios from "axios";
import {
  fetchError,
  fetchRandomSuccess,
  fetchSavedSuccess,
  saveActivity,
  setIsFetching,
} from "../reducers/activitiesSlice";
import axiosWithAuth from "../utils/axiosWithAuth";

export const fetchRandomActivities = () => async (dispatch) => {
  dispatch(setIsFetching());

  const newActivities = [];
  let error = null;

  for (let i = 0; i < 9; i++) {
    await axios
      .get("https://www.boredapi.com/api/activity") // eslint-disable-next-line
      .then((res) => {
        if (!res.data.error) {
          if (
            !newActivities.some(
              (activity) => activity.activity === res.data.activity
            )
          ) {
            newActivities.push(res.data);
          } else {
            i--;
          }
        } else error = res.data.error;
      }) // eslint-disable-next-line
      .catch(() => (error = "There was an error fetching activities."));
  }

  if (!error) {
    dispatch(fetchRandomSuccess(newActivities));
  } else {
    dispatch(fetchError(error));
  }
};

export const fetchSavedActivities = (user) => (dispatch) => {
  dispatch(setIsFetching());
  axiosWithAuth(user.token)
    .get(`/api/saved-activities/${user.id}`)
    .then((res) => {
      if (res.data.error) {
        dispatch(fetchError(res.data.error));
      } else {
        dispatch(fetchSavedSuccess(res.data));
      }
    })
    .catch((err) =>
      dispatch(fetchError("There was an error fetching your saved activities"))
    );
};

export const updateActivities = (activities, user) => (dispatch) => {
  axiosWithAuth(user.token)
    .patch(`/api/saved-activities/${user.id}`, activities)
    .then((res) => {
      dispatch(saveActivity(res.data.bookmarks));
    })
    .catch((err) => console.log(err));
};
