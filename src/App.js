import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Routes, Route, Link } from "react-router-dom";
import "./css/style.css";
import Login from "./pages/Login";
import News from "./pages/News";
import Maps from "./pages/Maps";
import Agents from "./pages/Agents";
import MainLayout from "./pages/layout/MainLayout";
import Profile from "./pages/Profile";


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<News />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <Footer></Footer>

      {/* <Route path="/profile" element={<Profile />} /> */}
    </>
  );
}

export default App;
