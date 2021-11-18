import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> or <Routes> (in react-router-dom v6) looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/page1' element={<Page1/>}></Route>
          <Route path='/page2' element={<Page2/>}></Route>
          <Route path='/page3' element={<Page3/>}></Route>
          <Route path='/page4' element={<Page4/>}></Route>
          <Route path='/page5' element={<Page5/>}></Route>
          <Route path='/page6' element={<Page6/>}></Route>
          <Route path='/page7' element={<Page7/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}
