import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Title } from "./styled";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavLinks } from "./styled";
import { logoutUser } from "../actions/authActions";

export default function HeaderBar() {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");

    if (confirmed) {
      dispatch(logoutUser());
    }
  };

  return (
    <Header>
      <Title onClick={() => navigate("/")}>
        {location.pathname === "/random-activities"
          ? "Random Activities"
          : location.pathname === "/saved-activities"
          ? `${user ? user.name : "User"}'s Bookmarked Activities`
          : ""}
      </Title>
      <NavLinks>
        {location.pathname !== "/" && <Link to="/">Home</Link>}

        {location.pathname !== "/random-activities" && (
          <Link to="/random-activities">Random Activities</Link>
        )}

        {isLoggedIn && location.pathname !== "/saved-activities" && (
          <Link to="/saved-activities">My Bookmarks</Link>
        )}
        <Link
          to={!isLoggedIn ? "/login" : "#"}
          onClick={isLoggedIn && handleLogOut}
        >
          {!isLoggedIn ? "Login" : "Logout"}
        </Link>
        {!isLoggedIn && <Link to="/register">Register</Link>}
      </NavLinks>
    </Header>
  );
}
