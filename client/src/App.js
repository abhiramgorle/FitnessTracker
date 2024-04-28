import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Excercises from "./pages/Excercises";
import ChestExcercise from "./pages/ChestExcercise";
import AbsExcercise from "./pages/AbsExcercise";
import ShoulderExcercise from "./pages/ShoulderExcercise";
import BackExcercise from "./pages/BackExcercise";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.2s ease;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {currentUser ? (
          <Container>
            <Navbar currentUser={currentUser} />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/workouts" exact element={<Workouts />} />
              <Route path="/excercises" exact element={<Excercises />} />
              <Route path= "/excercises/chest"  element={<ChestExcercise />} />
              <Route path="/excercises/abs"  element={<AbsExcercise />} />
              <Route path="/excercises/shoulder" element={<ShoulderExcercise />} />
              <Route path="/excercises/back" element={<BackExcercise />} />
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
