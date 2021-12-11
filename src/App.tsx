import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Overview from "./Pages/Overview";
import Search from "./Pages/Search";
import ProductDetail from "./Pages/ProductDetail";
import Account from "./Pages/Account";
import MyProducts from "./Pages/MyProducts";
import AddProduct from "./Pages/AddProduct";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import AdminApproval from "./Pages/AdminApproval";
import AdminApprovalDetail from "./Pages/AdminApprovalDetail";
import UserList from "./Pages/UserList";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> or <Routes> (in react-router-dom v6) looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/overview' element={<Overview/>}>
            <Route path='/overview/product-detail' element={<ProductDetail/>} />
          </Route>
          <Route path='/search' element={<Search/>}>
            <Route path='/search/product-detail' element={<ProductDetail/>} />
          </Route>
          
          <Route path='/account' element={<Account/>}></Route>
          <Route path='/my-products' element={<MyProducts/>}>
            <Route path='/my-products/add-product' element={<AddProduct/>} />
          </Route>
            
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/approval' element={<AdminApproval/>}></Route>
            <Route path='/approval/approval-detail' element={<AdminApprovalDetail/>} />
          <Route path='/user-list' element={<UserList/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}
