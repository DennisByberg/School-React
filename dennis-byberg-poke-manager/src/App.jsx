import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import TeamPage from "./pages/TeamPage";
import Layout from "./components/layout/Layout";
import { useState } from "react";

function App() {
  const [team, setTeam] = useState([]);

  const addToTeamHandler = (name) => {
    setTeam([...team, { name }]);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/search"
          element={
            <SearchPage
              team={team}
              setTeam={setTeam}
              addToTeam={addToTeamHandler}
            />
          }
        />
        <Route
          path="/team"
          element={<TeamPage team={team} setTeam={setTeam} />}
        />
        {/* TODO: Göra om till en "Error Page?" */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
