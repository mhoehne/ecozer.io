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
import ProductList from './Pages/ProductList';
import NotificationLog from './Pages/NotificationLog';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import { AccountType, ProductType, GetAccountByEmail, getProduct } from './API';
import { mixed } from 'yup/lib/locale';
import MyProductsEdit from './Pages/MyProductsEdit';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

export default function App() {
  const [account, setAccount] = useState<AccountType | null>(null);
  const [cookies, setCookies] = useCookies(['email']);

  useEffect(() => {
    console.log(cookies);
    if (cookies.email === null || cookies.email === undefined) {
      setAccount(null);

      return;
    }

    if (account === null) {
      GetAccountByEmail(cookies.email)
        .then((result) => {
          setAccount(result.data.account);
          console.log(result);
        })
        .catch();
    }
  }, [account, cookies]);

  return (
    <Router>
      <AppBarTop Account={account} />
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
          <Route path="/signup" element={<SignUp />} />

          {/* User */}
          <Route path="/account" element={<Account />} />
          <Route path="/notification-log" element={<NotificationLog />} />
          {account ? (
            <Route
              path="/my-products"
              element={<MyProducts account={account} />}
            />
          ) : null}
          {account ? (
            <Route
              path="/my-products/add-product"
              element={<AddProduct account={account} />}
            />
          ) : null}
          {account ? (
            <Route
              path={`/my-products/:id/edit`}
              element={<MyProductsEdit account={account} />}
            />
          ) : null}

          {/* Admin */}
          {account ? (
            <Route
              path="/approval"
              element={<AdminApproval account={account} />}
            />
          ) : null}

          <Route
            path={`/approval/detail/:id`}
            element={<AdminApprovalDetail account={account} />}
          />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/product-list" element={<ProductList />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
