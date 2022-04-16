import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import TeamPage from "./pages/TeamPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/team" element={<TeamPage />} />

        {/* TODO: Göra om till en "Error Page?" */}
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
