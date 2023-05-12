import React from "react";
import {
  ActionIcon,
  Card,
  CardDetail,
  CardLink,
  CardTitle,
} from "./styled/activity";
import { FaSave } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateActivities } from "../actions/activityActions";

export default function ActivityCard({ activity }) {
  const location = useLocation();
  const { saved } = useSelector((state) => state.activities);
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const found = saved.some((el) => el.activity === activity.activity);

  const handleSaveActivity = () => {
    if (!found) {
      dispatch(updateActivities([...saved, activity], user));
    }
  };

  const handleRemoveSaved = () => {
    const updatedActivities = saved.filter(
      (item) => item.activity !== activity.activity
    );
    dispatch(updateActivities(updatedActivities, user));
  };

  return (
    <Card key={activity.key} data-testid="activity-card">
      {isLoggedIn && location.pathname === "/random-activities" && !found && (
        <ActionIcon onClick={handleSaveActivity}>
          <FaSave />
        </ActionIcon>
      )}
      {location.pathname === "/saved-activities" && (
        <ActionIcon onClick={handleRemoveSaved}>
          <AiFillDelete />
        </ActionIcon>
      )}
      <CardTitle>{activity.activity}</CardTitle>
      <CardDetail>Type: {activity.type}</CardDetail>
      <CardDetail>Participants: {activity.participants}</CardDetail>
      <CardDetail>Price: {activity.price}</CardDetail>
      {activity.link && (
        <CardLink
          href={activity.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </CardLink>
      )}
    </Card>
  );
}
