import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, ErrorPage, Repo, NotFound, Settings } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="repo/:repoName" element={<Repo />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
          <Route path="/error-boundary-page" element={<ErrorPage />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
