import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../states/theme/themeSlice.js';
import {
  MenuHeaderContainer,
  LogoContainer,
  LogoImage,
  MenuItemsContainer,
  PrimaryMenuItems,
  MenuItem,
  MenuItemLink,
  SecondaryMenuItems
} from './SideNavMenuStyle.js'

const SideNavMenu = () => {

  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);

  return (
    <>
      <MenuHeaderContainer>
        <LogoContainer>
          <LogoImage src="/assets/images/logo.png" alt='logo' onClick={() => dispatch(toggleTheme())} />
        </LogoContainer>
      </MenuHeaderContainer>
      <MenuItemsContainer>
        <PrimaryMenuItems>
          <MenuItem>
            <MenuItemLink to="/" selected={selected === 0} onClick={() => setSelected(0)}>
              <i className="ri-dashboard-line"></i>
              <span>Dashboard</span>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/stores" selected={selected === 1} onClick={() => setSelected(1)}>
              <i className="ri-store-3-line"></i>
              <span>Stores</span>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="products" selected={selected === 2} onClick={() => setSelected(2)}>
              <i className="ri-briefcase-line"></i>
              <span>Products</span>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="orders" selected={selected === 3} onClick={() => setSelected(3)}>
              <i className="ri-shopping-cart-line"></i>
              <span>Orders</span>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/customers" selected={selected === 4} onClick={() => setSelected(4)}>
              <i className="ri-group-line"></i>
              <span>Customers</span>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/customers" selected={selected === 5} onClick={() => setSelected(5)}>
              <i class="ri-exchange-dollar-line"></i>
              <span>Transactions</span>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/reports" selected={selected === 6} onClick={() => setSelected(6)}>
              <i className="ri-line-chart-line"></i>
              <span>Reports</span>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/settings" selected={selected === 7} onClick={() => setSelected(7)}>
              <i className="ri-settings-3-line"></i>
              <span>Settings</span>
            </MenuItemLink>
          </MenuItem>
        </PrimaryMenuItems>
        <SecondaryMenuItems>
          <MenuItem>
            <MenuItemLink to="/settings">
              <i className="ri-logout-circle-r-line"></i>
              <span>Logout</span>
            </MenuItemLink>
          </MenuItem>
        </SecondaryMenuItems>
      </MenuItemsContainer>
    </>
  )
}

export default SideNavMenu