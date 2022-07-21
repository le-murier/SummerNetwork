import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Page404 from "./components/Page404/Page404";
import { Route, Routes } from 'react-router-dom';
import { AppPath } from "./common/enums/enums";

function App() {
  return (
    // We might need this StackOverflow answer later to display some components 
    // across all pages except for login/signup/something else: shorturl.at/deHNW
    <Routes>
      <Route path={AppPath.SIGN_IN} element={<Login />} />
      {/* Replace root one with <Home /> when we implement home component */}
      <Route path={AppPath.ROOT} element={<Login />} />
      <Route path={AppPath.ANY} element={<Page404 />} />
    </Routes>
  );
}

export default App;
