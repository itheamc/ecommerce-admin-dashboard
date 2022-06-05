import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import {
  MainContainer,
  SideMenuContainer,
  ContentContainer
} from './AppStyle.js';
import HomePage from './pages/home/HomePage';
import OrdersPage from './pages/orders/orders_list/OrdersPage';
import ProductsPage from './pages/products/products_list/ProductsPage';
import { lightTheme, darkTheme } from './themes/Themes'
import { useSelector } from 'react-redux';
import { themeValueSelector } from './states/theme/themeSlice.js';
import SideNavMenu from './components/side_nav_menu/SideNavMenu.js';
import Navbar from './components/navbar/Navbar.js';
import CustomersPage from './pages/customers/customers_list/CustomersPage.js';
import CustomerPage from './pages/customers/customer/CustomerPage.js';
import StoresPage from './pages/stores/stores_list/StoresPage.js';
import StorePage from './pages/stores/store/StorePage.js';
import OrderPage from './pages/orders/order/OrderPage.js';
import ProductPage from './pages/products/product/ProductPage.js';
import ReportPage from './pages/reports/ReportPage.js';
import GlobalStyles from './themes/GlobalStyles.js';

function App() {

  const theme = useSelector(themeValueSelector);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <MainContainer>
          <SideMenuContainer>
            <SideNavMenu />
          </SideMenuContainer>
          <ContentContainer>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/orders/:id" element={<OrderPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/customers" element={<CustomersPage />} />
              <Route path="/customers/:id" element={<CustomerPage />} />
              <Route path="/stores" element={<StoresPage />} />
              <Route path="/stores/:id" element={<StorePage />} />
              <Route path="/reports" element={<ReportPage />} />
            </Routes>
          </ContentContainer>
        </MainContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
