import styled from "styled-components";
import heroImg from "../../assets/images/joanna-kosinska-1_CMoFsPfso-unsplash.jpg";

const HomePageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f2f2f2;
`;

const HeroBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  button {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    background-color: #25ced1;
    border: none;
    padding: 1.5rem 3rem;
    border-radius: 5rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #219a9b;
      transform: translateY(-0.2rem);
    }
  }
`;

const FeaturesSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  color: #444;
  text-align: center;

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;

    li {
      flex: 1;
      margin: 1rem;

      h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
    }
  }
`;

export { HomePageContainer, HeroBanner, FeaturesSection };
