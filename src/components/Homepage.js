import React from "react";
import {
  FeaturesSection,
  HeroBanner,
  HomePageContainer,
} from "./styled/homepage";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <HomePageContainer>
      <HeroBanner>
        <div>
          <h1>Welcome to Random Activities</h1>
          <p>Discover amazing activities for your free time</p>
          <button onClick={() => navigate("/random-activities")}>
            Get Started
          </button>
        </div>
      </HeroBanner>
      <FeaturesSection>
        <div>
          <h2>Our Features</h2>
          <ul>
            <li>
              <h3>Find Your Next Adventure</h3>
              <p>Discover exciting new activities with just a click</p>
            </li>
            <li>
              <h3>Save Your Favorites</h3>
              <p>Bookmark your favorite activities and come back anytime</p>
            </li>
            <li>
              <h3>Share with Friends</h3>
              <p>
                Share your activities with friends and get inspired together
              </p>
            </li>
          </ul>
        </div>
      </FeaturesSection>
    </HomePageContainer>
  );
};

export default HomePage;
