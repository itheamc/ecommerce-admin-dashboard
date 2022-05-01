import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import './AppStyle.js';
import {
  MainContainer,
  MenuHeaderContainer,
  LogoContainer,
  LogoImage,
  SideMenuContainer,
  MenuItemsContainer,
  PrimaryMenuItems,
  MenuItem,
  ContentContainer
} from './AppStyle.js';
import HomePage from './pages/home/HomePage';
import OrdersPage from './pages/orders/OrdersPage';
import ProductsPage from './pages/products/ProductsPage';
import { lightTheme, darkTheme } from './themes/Themes'
import { useSelector, useDispatch } from 'react-redux';
import { themeValueSelector, toggleTheme } from './states/theme/themeSlice.js';

function App() {

  const theme = useSelector(themeValueSelector);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);

  return (
    <ThemeProvider theme={theme == "dark" ? darkTheme : lightTheme}>
      <Router>
        <MainContainer>
          <SideMenuContainer>
            <MenuHeaderContainer>
              <LogoContainer>
                <LogoImage src="assets/images/logo.png" alt='logo' onClick={() => dispatch(toggleTheme())} />
              </LogoContainer>
            </MenuHeaderContainer>
            <MenuItemsContainer>
              <PrimaryMenuItems>
                <MenuItem selected={selected == 0} onClick={() => setSelected(0)}>
                  <NavLink to="/">Home</NavLink>
                </MenuItem>
                <MenuItem selected={selected == 1} onClick={() => setSelected(1)}>
                  <NavLink to="/orders">Orders</NavLink>
                </MenuItem>
                <MenuItem selected={selected == 2} onClick={() => setSelected(2)}>
                  <NavLink to="/products">Products</NavLink>
                </MenuItem>
              </PrimaryMenuItems>
            </MenuItemsContainer>
          </SideMenuContainer>
          <ContentContainer>
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
