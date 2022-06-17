import React, { useState } from 'react'
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

  const [selected, setSelected] = useState(0);
  const [catalogExpanded, setCatalogExpanded] = useState(false);

  return (
    <>
      <MenuHeaderContainer>
        <LogoContainer>
          <LogoImage src="/assets/images/logo.png" alt='logo' />
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
          <MenuItem expanded={catalogExpanded}>
            <MenuItemLink to="#" expanded={catalogExpanded} onClick={() => setSelected(() => setCatalogExpanded(!catalogExpanded))}>
              <i className="ri-briefcase-line"></i>
              <span>Catalouge</span>
              <div className="dropdown-arrow">
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </MenuItemLink>
            <div className='drop-down-menu'>
              <MenuItemLink to="categories" selected={selected === 8} onClick={() => setSelected(8)}>
                <span className='drop-down-item'>Categories</span>
              </MenuItemLink>
              <MenuItemLink to="products" selected={selected === 9} onClick={() => setSelected(9)}>
                <span className='drop-down-item'>Products</span>
              </MenuItemLink>
              <MenuItemLink to="attributes" selected={selected === 10} onClick={() => setSelected(10)}>
                <span className='drop-down-item'>Attributes</span>
              </MenuItemLink>
              <MenuItemLink to="variation-attributes" selected={selected === 11} onClick={() => setSelected(11)}>
                <span className='drop-down-item'>Variation Attributes</span>
              </MenuItemLink>
              <MenuItemLink to="reviews" selected={selected === 12} onClick={() => setSelected(12)}>
                <span className='drop-down-item'>Reviews</span>
              </MenuItemLink>
            </div>
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
            <MenuItemLink to="/transactions" selected={selected === 5} onClick={() => setSelected(5)}>
              <i className="ri-exchange-dollar-line"></i>
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