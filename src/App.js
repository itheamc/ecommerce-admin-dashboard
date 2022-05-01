import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import {
  MainContainer,
  SideMenuContainer,
  ContentContainer
} from './AppStyle.js';
import HomePage from './pages/home/HomePage';
import OrdersPage from './pages/orders/OrdersPage';
import ProductsPage from './pages/products/ProductsPage';
import { lightTheme, darkTheme } from './themes/Themes'
import { useSelector } from 'react-redux';
import { themeValueSelector } from './states/theme/themeSlice.js';
import SideNavMenu from './components/side_nav_menu/SideNavMenu.js';
import Navbar from './components/navbar/Navbar.js';

function App() {

  const theme = useSelector(themeValueSelector);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
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
              <Route path="/products" element={<ProductsPage />} />
            </Routes>
          </ContentContainer>
        </MainContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
