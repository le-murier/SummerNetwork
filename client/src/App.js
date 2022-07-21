import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Page404 from "./components/Page404/Page404";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/log-in" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
