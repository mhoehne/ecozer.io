import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Search from './Pages/Search';
import ProductDetail from './Pages/ProductDetail';
import Account from './Pages/Account';
import MyProducts from './Pages/MyProducts';
import AddProduct from './Pages/AddProduct';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import AdminApproval from './Pages/AdminApproval';
import AdminApprovalDetail from './Pages/AdminApprovalDetail';
import UserList from './Pages/UserList';
import Container from '@mui/material/Container';
import Footer from './Components/Footer';
import AppBarTop from './Components/AppBarTop';
import Dashboard from './Pages/Dashboard';
import Glossar from './Pages/Glossar';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import { AccountsType, GetAccountByEmail } from './API';

export default function App() {
  useCookies(['email']);
  const [accounts, setAccounts] = useState<AccountsType | null>(null);
  const [cookies, setCookie] = useCookies(['email']);
  // get email from cookie
  // get account by email

  useEffect(() => {
    console.log(cookies);
    if (cookies.email === null || cookies.email === undefined) {
      setAccounts(null);

      return;
    }

    GetAccountByEmail(cookies.email)
      .then((result) => {
        setAccounts(result.data.singleAccount);
      })
      .catch();
  }, [accounts, cookies]);

  return (
    <Router>
      <AppBarTop Account={accounts} />
      <Container maxWidth={false} disableGutters={true} sx={{ mt: 8 }}>
        {/* A <Switch> or <Routes> (in react-router-dom v6) looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Routes>
          {/* Visitor */}
          <Route path="/" element={<HomePage />} />
          <Route path="/glossar" element={<Glossar />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/product-detail" element={<ProductDetail />} />

          {/* Sign In/Up */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* User */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/my-products" element={<MyProducts />} />
          <Route path="/my-products/add-product" element={<AddProduct />} />

          {/* Admin */}
          <Route path="/approval" element={<AdminApproval />} />
          <Route path="/approval/detail" element={<AdminApprovalDetail />} />
          <Route path="/user-list" element={<UserList />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
