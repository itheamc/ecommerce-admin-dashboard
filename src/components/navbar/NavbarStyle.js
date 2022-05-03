import styled from "styled-components";

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
    background-color: #fff;

    & > input[type="search"] {
        outline: none;
        background: transparent;
        border: none;
        color: ${props => props.theme.color.secondary_text};
    }
`

/**
 * Notification Icon container
 */
export const NotificationIconContainer = styled.div`
    display: flex;
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
    }

    & > i {
        font-size: ${props => props.theme.font_size.x_large};
        color: ${props => props.theme.color.primary};
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
`;


