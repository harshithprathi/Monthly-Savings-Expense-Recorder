import React from "react";
import Home from "./pages/Home";
import Aboutpage from "./pages/Aboutpage";
import Reachuspage from "./pages/Reachuspage";
import SignUpPage from "./pages/signuppage";
import Login from "./pages/Loginpage";
import Dashboardpage from "./pages/dashboardpage";
import Piepage from "./pages/Piepage";
import GraphPage from "./pages/GraphPage";
import Profilepage from "./pages/ProfilePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<Aboutpage />} />
        <Route exact path="/reachus" element={<Reachuspage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboardpage />} />
        <Route exact path="/piepage" element={<Piepage />} />
        <Route exact path="/savingsgraph" element={<GraphPage />} />
        <Route exact path="/profile" element={<Profilepage />} />
        {/* <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />} */}
        {/* /> */}
      </Routes>
    </Router>
  );
}

export default App;