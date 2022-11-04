import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, ErrorPage, NotFound, Repos } from "./pages";
import { RepoProvider } from "./context/repos/RepoContext";
import { UserProvider } from "./context/users/UserContext";
import "./App.css";

function App() {
  return (
    <>
      <RepoProvider>
        <UserProvider>
          <div className="App">
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/repo-list/*" element={<Repos />} />
                <Route path="/error-boundary-page" element={<ErrorPage />} />
                <Route path="/not-found" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </div>
          <Footer />
        </UserProvider>
      </RepoProvider>
    </>
  );
}

export default App;
