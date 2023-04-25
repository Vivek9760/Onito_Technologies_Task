import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersData from "./Components/UsersData";
import UserForm from "./Components/UserForm";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/usersData" element={<UsersData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
