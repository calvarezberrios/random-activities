import React, { useEffect, useState } from "react";
import { ActivityButton, CardContainer } from "./styled/activity";
import { useNavigate } from "react-router-dom";
import ActivityCard from "./ActivityCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSavedActivities } from "../actions/activityActions";
import { ErrorWrapper, Spinner } from "./styled";
import {
  ContentWrapper,
  FilterInput,
  FilterSelect,
  Filters,
  Heading,
  IntroText,
  Preview,
  Table,
  TableHead,
  TableRow,
  Wrapper,
} from "./styled/savedactivities";

export default function SavedActivities() {
  const { saved, isFetching, error } = useSelector((state) => state.activities);
  const { user } = useSelector((state) => state.auth);
  const [selectedActivity, setSelectedActivity] = useState(saved[0]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSavedActivities(user));
    //eslint-disable-next-line
  }, []);

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
  };

  return (
    <Wrapper>
      <IntroText>
        Here are the activities you have saved. You can filter them by type
        and/or participants.
      </IntroText>

      <Filters>
        <FilterInput placeholder="Search by name..." />
        <FilterSelect>
          <option value="">All Types</option>
          <option value="education">Education</option>
          <option value="recreational">Recreational</option>
          <option value="social">Social</option>
          <option value="diy">DIY</option>
          <option value="charity">Charity</option>
          <option value="cooking">Cooking</option>
          <option value="relaxation">Relaxation</option>
          <option value="music">Music</option>
          <option value="busywork">Busywork</option>
        </FilterSelect>
        <FilterSelect>
          <option value="">All Participants</option>
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="3">3 People</option>
          <option value="4">4 People</option>
          <option value="5">5 People</option>
          <option value="6">6 People</option>
          <option value="7">7 People</option>
          <option value="8">8 People</option>
        </FilterSelect>
      </Filters>
      <ContentWrapper>
        <Table>
          <thead>
            <tr>
              <th>Bookmarked Activities</th>
            </tr>
          </thead>
          <tbody>
            {saved.map((activity) => (
              <TableRow
                key={activity.key}
                onClick={() => handleActivityClick(activity)}
                active={
                  selectedActivity && selectedActivity.key === activity.key
                }
              >
                <td>{activity.activity}</td>
              </TableRow>
            ))}
          </tbody>
        </Table>

        {selectedActivity && (
          <Preview>
            <ActivityCard activity={selectedActivity} />
          </Preview>
        )}
      </ContentWrapper>
    </Wrapper>
  );
}
