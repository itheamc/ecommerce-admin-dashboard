import React, {useState} from 'react'
import {
    NavContainer,
    TitleContainer,
    NavContentContainer,
    SearchContainer,
    NotificationIconContainer,
    ProfileIconContainer,
    ProfileMenuItem,
    MenuItem,
    MenuItemLink
} from './NavbarStyle.js'



const Navbar = () => {
    const [notificationVisible, setNotificationVisible] = useState(false)
    const [profileVisible, setProfileVisible] = useState(false)

    // function to toggle notification visibility
    const toggleNotification = () => {
        if (profileVisible) {
            setProfileVisible(false)
        }
        setNotificationVisible(!notificationVisible)
    }

    // function to toggle profile visibility
    const toggleProfile = () => {
        if (notificationVisible) {
            setNotificationVisible(false)
        }
        setProfileVisible(!profileVisible)
    }
    
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
                <NotificationIconContainer show={notificationVisible}>
                    <i className="ri-notification-2-fill" onClick={toggleNotification}></i>
                    <div className='notification-card'>
                        <div className='notification-header'>
                            <h3>Notifications</h3>
                        </div>
                        <div className='notification-body'>
                            <div className='image-section'>
                                <img src="/assets/images/photo.jpg" alt="profile" />
                            </div>
                            <div className='notification-text'>
                                <p><span>John smith</span> update his profile photo.</p>
                                <p>2 minutes ago</p>
                            </div>
                            <div className='notification-actions'>
                                <i class="ri-more-fill"></i>
                            </div>
                        </div>
                        
                    </div>
                </NotificationIconContainer>
                <ProfileIconContainer show={profileVisible}>
                    <img src="/assets/images/photo.jpg" onClick={toggleProfile} alt="profile" />
                    <div className='profile-card'>
                        <div className='profile-header'>
                            <img src="/assets/images/photo.jpg" alt="profile" />
                            <h3>John smith</h3>
                        </div>
                        <div className='profile-body'>
                            <ProfileMenuItem>
                                <MenuItem>
                                    <MenuItemLink to="/profile">
                                        <i class="ri-user-line"></i>
                                        <span>My Profile</span>
                                    </MenuItemLink>
                                </MenuItem>
                                <MenuItem>
                                    <MenuItemLink to="/profile">
                                        <i class="ri-edit-box-line"></i>
                                        <span>Edit Profile</span>
                                    </MenuItemLink>
                                </MenuItem>
                                <MenuItem>
                                    <MenuItemLink to="/settings">
                                        <i class="ri-settings-3-line"></i>
                                        <span>Setting</span>
                                    </MenuItemLink>
                                </MenuItem>
                                <MenuItem>
                                    <MenuItemLink to="/profile">
                                        <i class="ri-logout-circle-r-line"></i>
                                        <span>Logout</span>
                                    </MenuItemLink>
                                </MenuItem>
                            </ProfileMenuItem>
                        </div>
                    </div>
                </ProfileIconContainer>
            </NavContentContainer>
        </NavContainer>

    )
}

export default Navbar