import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ActivityCard from "./ActivityCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSavedActivities } from "../actions/activityActions";
import { ErrorWrapper, Spinner } from "./styled";
import {
  Button,
  ContentWrapper,
  FilterInput,
  FilterSelect,
  Filters,
  IntroText,
  Preview,
  Table,
  TableRow,
  Wrapper,
} from "./styled/savedactivities";

const initialValues = {
  filterName: "",
  filterType: "all",
  filterParticipants: "all",
};
export default function SavedActivities() {
  const { saved, isFetching, error } = useSelector((state) => state.activities);
  const { user } = useSelector((state) => state.auth);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [filters, setFilters] = useState(initialValues);
  const [filteredActivitities, setFilteredActivities] = useState(saved);

  const types = [...new Set(saved.map((activity) => activity.type))];
  const numOfParticipants = [
    ...new Set(saved.map((activity) => activity.participants)),
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSavedActivities(user));
    //eslint-disable-next-line
  }, []);

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
  };

  const handleFilterChange = (e) => {
    e.preventDefault();
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setSelectedActivity(saved[0]);
  }, [saved]);

  useEffect(() => {
    if (filteredActivitities.length === 0) setFilteredActivities(saved);

    setFilteredActivities(
      saved.filter((activity) => {
        if (
          !activity.activity
            .toLowerCase()
            .includes(filters.filterName.trim().toLowerCase())
        ) {
          return false;
        }
        if (
          filters.filterType !== "all" &&
          activity.type !== filters.filterType
        ) {
          return false;
        }
        if (
          filters.filterParticipants !== "all" &&
          activity.participants !== Number(filters.filterParticipants)
        ) {
          return false;
        }
        return true;
      })
    );

    // eslint-disable-next-line
  }, [filters, saved]);

  if (isFetching) {
    return (
      <Wrapper>
        <h3>Fetching your activities...</h3>
        <Spinner />
      </Wrapper>
    );
  } else if (error) {
    return (
      <Wrapper>
        <ErrorWrapper>
          <p>{error}</p>
        </ErrorWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <IntroText>
        Here are the activities you have saved. You can filter them by name,
        type and/or participants.
      </IntroText>

      <Filters>
        <FilterInput
          type="text"
          name="filterName"
          value={filters.filterName}
          onChange={handleFilterChange}
          placeholder="Search by activity name..."
        />
        <FilterSelect
          name="filterType"
          value={filters.filterType}
          onChange={handleFilterChange}
        >
          <option value="all">All Types</option>
          {types.map((value, i) => (
            <option value={value} key={i}>
              {value
                .split("")
                .map((c, i) => (i === 0 ? c.toUpperCase() : c))
                .join("")}
            </option>
          ))}
        </FilterSelect>
        <FilterSelect
          name="filterParticipants"
          value={filters.filterParticipants}
          onChange={handleFilterChange}
        >
          <option value="all">All Participants</option>
          {numOfParticipants.map((value, i) => (
            <option value={value} key={i}>
              {value} Participant{parseInt(value) > 1 && "s"}
            </option>
          ))}
        </FilterSelect>
        <Button onClick={() => navigate("/random-activities")}>
          Find new Activities
        </Button>
      </Filters>
      <ContentWrapper>
        <Table>
          <thead>
            <tr>
              <th>Bookmarked Activities</th>
            </tr>
          </thead>
          <tbody>
            {filteredActivitities.map((activity) => (
              <TableRow
                key={activity.key}
                onClick={() => handleActivityClick(activity)}
                active={
                  selectedActivity && selectedActivity.key === activity.key
                    ? "active"
                    : ""
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
