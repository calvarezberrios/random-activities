import React, { useEffect } from "react";
import { ActivityButton, CardContainer } from "./styled/activity";
import { useNavigate } from "react-router-dom";
import ActivityCard from "./ActivityCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSavedActivities } from "../actions/activityActions";
import { ErrorWrapper, Spinner } from "./styled";
import { Heading, IntroText } from "./styled/savedactivities";

export default function SavedActivities() {
  const { saved, isFetching, error } = useSelector((state) => state.activities);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSavedActivities(user));
    //eslint-disable-next-line
  }, []);

  return (
    <CardContainer>
      {isFetching ? (
        <>
          <h3>Fetching your activities...</h3>
          <Spinner />
        </>
      ) : (
        <>
          {error ? (
            <ErrorWrapper>
              <p>{error}</p>
            </ErrorWrapper>
          ) : (
            <div>
              <IntroText>
                Here are the activities you have saved. You can filter them by
                type and/or participants.
              </IntroText>

              <ActivityButton onClick={() => navigate("/random-activities")}>
                Find New Activities
              </ActivityButton>
              {saved.map((activity, i) => (
                <ActivityCard
                  key={i}
                  activity={activity}
                  data-testid="activity-card"
                />
              ))}
            </div>
          )}
        </>
      )}
    </CardContainer>
  );
}
