import Home from "./components/Home/Home";
import Login from "./components/Sign/Login/Login";
import Page404 from "./components/Page404/Page404";
import Registration from "./components/Sign/Registration/Registration";
import { Route, Routes } from 'react-router-dom';
import { AppPath } from "./common/enums/enums";

function App() {
  return (
    // We might need this StackOverflow answer later to display some components 
    // across all pages except for login/signup/something else: shorturl.at/deHNW
    <Routes>
      <Route path={AppPath.SIGN_IN} element={<Login />} />
      <Route path={AppPath.SIGN_UP} element={<Registration />}/>
      {/* Replace root one with <Home /> when we implement home component */}
      <Route path={AppPath.ROOT} element={<Login />} />
      <Route path={AppPath.ANY} element={<Page404 />} />
    </Routes>
  );
}

export default App;
