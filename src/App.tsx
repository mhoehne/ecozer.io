import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TestSite from "./Pages/TestSite";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/testsite">Test Seite</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> or <Routes> (in react-router-dom v6) looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/testsite' element={<TestSite/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}
