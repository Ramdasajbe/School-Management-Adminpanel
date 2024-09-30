import "./App.css";
//import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import LoginPage from "./Authentication/LoginPage";
import DashBoard from "./Pages/DashBoard";

function App() {
  //const { currentRole } = useSelector((state) => state.user);

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/" element={<DashBoard />} />
        {/* Redirect for any other routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
