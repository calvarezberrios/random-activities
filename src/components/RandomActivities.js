import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityButton, CardContainer } from "./styled/activity";
import { ErrorWrapper, Spinner } from "./styled";
import { fetchRandomActivities } from "../actions/activityActions";
import ActivityCard from "./ActivityCard";

const RandomActivities = () => {
  const { random, isFetching, error } = useSelector(
    (state) => state.activities
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (random.length === 0) dispatch(fetchRandomActivities());
    // eslint-disable-next-line
  }, []);

  return (
    <CardContainer
      data-testid="activity-cards"
      style={{ flexDirection: isFetching ? "column" : "row" }}
    >
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
            <>
              <ActivityButton onClick={() => dispatch(fetchRandomActivities())}>
                Refresh Activities
              </ActivityButton>
              {random.map((activity, i) => (
                <ActivityCard
                  key={i}
                  activity={activity}
                  data-testid="activity-card"
                />
              ))}
            </>
          )}
        </>
      )}
    </CardContainer>
  );
};
export default RandomActivities;
