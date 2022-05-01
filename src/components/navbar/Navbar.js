import React from 'react'
import { 
    NavContainer,
    TitleContainer,
    NavContentContainer,
    SearchContainer,
    NotificationIconContainer,
    ProfileIconContainer
} from './NavbarStyle.js'

const Navbar = () => {
  return (
      <NavContainer>
          <TitleContainer>
              <h2>Dashboard</h2>
              <p>Welcome to your dashboard</p>
          </TitleContainer>
          <NavContentContainer>
              <SearchContainer>
                  <i className="ri-search-line"></i>
                  <input type="search" placeholder="Search" />
              </SearchContainer>
              <NotificationIconContainer>
                  <i className="ri-notification-2-fill"></i>
              </NotificationIconContainer>
              <ProfileIconContainer>
                  <img src="assets/images/photo.jpg" alt="profile" />
              </ProfileIconContainer>
          </NavContentContainer>
      </NavContainer>
      
  )
}

export default Navbar