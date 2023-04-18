import jwt from 'jsonwebtoken';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Container from '@mui/material/Container';

import { AccountType, GetAccountByEmail, renewToken } from './API';
import AppBarTop from './Components/AppBarTop';
import Footer from './Components/Footer';
import Account from './Pages/Account';
import AddProduct from './Pages/AddProduct';
import AdminApproval from './Pages/AdminApproval';
import AdminApprovalDetail from './Pages/AdminApprovalDetail';
import Glossar from './Pages/Glossar';
import HomePage from './Pages/HomePage';
import MyProducts from './Pages/MyProducts';
import MyProductsEdit from './Pages/MyProductsEdit';
import NotificationLog from './Pages/NotificationLog';
import PageNotFound from './Pages/PageNotFound';
import ProductDetail from './Pages/ProductDetail';
import ProductList from './Pages/ProductList';
import ReportingList from './Pages/ReportingList';
import Search from './Pages/Search';
import SignIn from './Pages/SignIn';
import SignUpFormik from './Pages/SignUpFormik';
import UserList from './Pages/UserList';

export default function App() {
  const [account, setAccount] = useState<AccountType | null>(null);
  const [cookies, setCookies] = useCookies(['token']);

  if (!cookies.token && account !== null) {
    setAccount(null);
  }
  useEffect(() => {
    if (account === null && cookies.token) {
      const jwttoken = jwt.decode(cookies.token);
      if (jwttoken)  {
        const payload = {emailaddress: ''}
        Object.assign(payload, jwttoken);
        GetAccountByEmail(payload.emailaddress)
        .then(({ data: { account } }) => setAccount(account))
        .catch();
      }
    }
  }, [account, cookies]);

  const [timer, setTimer] = useState<NodeJS.Timer | null>(null)
  if (timer == null) {
    const newTimer = setInterval(() => {
      renewToken().then((result) => {
        setCookies('token', result.data, { path: '/' });
      }).catch();
  }, 6000 );
    setTimer(newTimer);
  }


  return (
    <Router>
      <AppBarTop account={account} />
      <Container maxWidth={false} disableGutters={true} sx={{ mt: 8 }}>
        {/* A <Switch> or <Routes> (in react-router-dom v6) looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Routes>
          {/* Visitor */}
          <Route path="/" element={<HomePage />} />
          <Route path="/glossar" element={<Glossar />} />
          <Route path="/search" element={<Search account={account} />} />
          <Route
            path="/search/product-detail/:id"
            element={<ProductDetail />}
          />

          {/* Sign In/Up */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUpFormik />} />

          {account && (
            <>
              {/* User */}
              <Route path="/account" element={<Account account={account} />} />
              <Route
                path="/notification-log"
                element={<NotificationLog account={account} />}
              />
              <Route
                path="/my-products"
                element={<MyProducts tab="published" account={account} />}
              />
              <Route
                path="/my-products/rejection"
                element={<MyProducts tab="rejected" account={account} />}
              />
              <Route
                path="/my-products/add-product"
                element={<AddProduct account={account} />}
              />
              <Route
                path={`/my-products/:id/edit`}
                element={<MyProductsEdit account={account} />}
              />

              {/* Admin */}
              <Route
                path="/approval"
                element={<AdminApproval account={account} />}
              />
            </>
          )}

          <Route
            path={`/approval/detail/:id`}
            element={<AdminApprovalDetail />}
          />

          {account && (
            <>
              <Route path="/user-list" element={<UserList />} />
              <Route
                path="/product-list"
                element={<ProductList account={account} />}
              />
              <Route
                path="/reportings"
                element={<ReportingList account={account} />}
              />
            </>
          )}
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
