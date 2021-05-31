import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <div className="container">
      <NavigationBar />
      <br/>
      <br/>
      <MainPage/>
      
    </div>
  );
};

export default App;
