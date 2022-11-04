import styled from "styled-components";
import { Link } from "react-router-dom";

/**
 * Nav Container
 */
export const NavContainer = styled.nav`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.theme.padding.large} ${props => props.theme.padding.medium};
    background-color: ${props => props.theme.color.nav_background};
`;

/**
 * Title container
 */
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: felx-start;
    justify-content: center;

    & > h2 {
        font-size: ${props => props.theme.font_size.x_large};
        color: ${props => props.theme.color.primary_text};
    }

    & > p {
        font-size: ${props => props.theme.font_size.small};
        color: ${props => props.theme.color.secondary_text};
    }
`;

/**
 * Nav Content Container
 */
export const NavContentContainer = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: ${props => props.theme.gap.medium};
`;


/**
 * Search container
 */
export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: ${props => props.theme.border_radius.xx_large};
    gap: ${props => props.theme.gap.x_small};
    padding: calc(${props => props.theme.padding.x_small} + 2px) ${props => props.theme.padding.medium};
    background-color: ${props => props.theme.color.card_background};

    & > input[type="search"] {
        outline: none;
        background: transparent;
        border: none;
        color: ${props => props.theme.color.secondary_text};
    }
`;


export const ThemeToggler = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & > i.ri-moon-line {
        position: relative;
        font-size: ${props => props.theme.font_size.x_large};
        visibility: ${props => props.isLight ? 'visible' : 'hidden'};
    }

    & > i.ri-sun-fill {
        position: absolute;
        font-size: ${props => props.theme.font_size.x_large};
        visibility: ${props => props.isLight ? 'hidden' : 'visible'};
    } 
`;

/**
 * Notification Icon container
 */
export const NotificationIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    aspect-ratio: 1;
    border-radius: ${props => props.theme.border_radius.circular};

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 5px;
        height: 5px;
        border-radius: ${props => props.theme.border_radius.circular};
        border: ${props => props.theme.border_width.medium} solid #fff;
        background-color: ${props => props.theme.color.primary};
    }
    

    &:hover {
        cursor: pointer;
        &::before {
            display: none;
        }
    }

    & > i {
        font-size: ${props => props.theme.font_size.x_large};
        color: ${props => props.theme.color.primary};
    }

    & > div.notification-card {
        position: absolute;
        top: 40px;
        right: -20px;
        width: 300px;
        height: max-content;
        border-radius: ${props => props.theme.border_radius.medium};
        background-color: ${props => props.theme.color.card_background};
        display: flex;
        flex-direction: column;
        gap: ${props => props.theme.gap.medium};
        padding: ${props => props.theme.padding.medium};
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
        visibility: ${props => props.show ? 'visible' : 'hidden'};
        z-index: 1;

        &::before {
            content: '';
            position: absolute;
            top: -9px;
            right: 20px;
            width: 20px;
            height: 20px;
            border-radius: ${props => props.theme.border_radius.x_small};
            background-color: ${props => props.theme.color.card_background};
            transform: rotate(45deg);
        }


        & > div.notification-header {
            border-bottom: 1px solid ${props => props.theme.color.secondary_text};

            & > h3 {
                margin-bottom: ${props => props.theme.padding.x_small};
            }
        }

        & > div.notification-body {
            display: flex;
            gap: ${props => props.theme.gap.medium};

            & > div.image-section {
                & > img {
                    width: 30px;
                    height: 30px;
                    border-radius: ${props => props.theme.border_radius.circular};
                    object-fit: cover;
                }
            }
            & > div.notification-text {
                & > p {
                    font-size: ${props => props.theme.font_size.small};
                    color: ${props => props.theme.color.secondary_text};

                    & > span {
                        font-weight: bold;
                    }

                }
            }
        }
    }
`;


/**
 * Profile Icon container
 */
export const ProfileIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    & > img {
        display: block;
        width: 34px;
        height: 34px;
        border-radius: ${props => props.theme.border_radius.circular};

        &:hover {
            cursor: pointer;
        }
    }

    & > div.profile-card {
        position: absolute;
        top: 50px;
        right: 0;
        width: 300px;
        height: max-content;
        border-radius: ${props => props.theme.border_radius.medium};
        background-color: ${props => props.theme.color.card_background};
        display: flex;
        flex-direction: column;
        gap: ${props => props.theme.gap.medium};
        padding: ${props => props.theme.padding.medium};
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
        visibility: ${props => props.show ? 'visible' : 'hidden'};
        z-index: 1;

        &::before {
            content: '';
            position: absolute;
            top: -9px;
            right: 10px;
            width: 20px;
            height: 20px;
            border-radius: ${props => props.theme.border_radius.x_small};
            background-color: ${props => props.theme.color.card_background};
            transform: rotate(45deg);
        }

        & > div.profile-header {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            & > img {
                width: 80px;
                height: 80px;
                border-radius: ${props => props.theme.border_radius.circular};
                object-fit: cover;

            }

            & > h3 {
                font-size: ${props => props.theme.font_size.medium};
                color: ${props => props.theme.color.secondary_text};
                font-weight: 600;
            }
        }
    }
`;


export const ProfileMenuItem = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
`;

export const MenuItem = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${props => props.theme.color.divider};
`;

export const MenuItemLink = styled(Link)`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    gap: ${props => props.theme.gap.medium};
    color: ${props => props.theme.color.secondary_text};
    font-size: ${props => props.theme.font_size.medium};
    transition: all 0.1s ease-in;

    &:hover {
        transform: translateX(4px);
        color: ${props => props.theme.color.primary};
        font-weight: 600;
    }

`;


