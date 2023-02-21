import PrivateRoute from "./authentication/PrivateRoute";
import UpdateProfile from "./authentication/UpdateProfile";
import Signup from "./authentication/Signup";
import Profile from "./authentication/Profile";
import Login from "./authentication/Login";
import ForgotPassword from "./authentication/ForgotPassword";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./google-drive/Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Drive */}
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Dashboard />} />
          </Route>
          {/* Profile */}
          <Route exact path="/user" element={<PrivateRoute />}>
            <Route exact path="/user" element={<Profile />} />
          </Route>
          <Route exact path="/update-profile" element={<PrivateRoute />}>
            <Route exact path="/update-profile" element={<UpdateProfile />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
