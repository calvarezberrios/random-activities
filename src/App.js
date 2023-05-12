import React from "react";
import { Container, Footer } from "./components/styled";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/Homepage";
import RandomActivities from "./components/RandomActivities";
import HeaderBar from "./components/HeaderBar";
import Login from "./components/Login";
import SavedActivities from "./components/SavedActivities";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";

function App() {
  return (
    <Container>
      <HeaderBar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/random-activities" element={<RandomActivities />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/saved-activities" element={<SavedActivities />} />
        </Route>
      </Routes>

      <Footer>
        <p>Made with ❤️ by Carlos "MANNIE" Alvarez-Berrios</p>
      </Footer>
    </Container>
  );
}

export default App;
