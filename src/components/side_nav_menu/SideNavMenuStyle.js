import styled from "styled-components";
import { NavLink } from 'react-router-dom';

/**
 * Menu Header Container
 */
export const MenuHeaderContainer = styled.div`
 width: 100%;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: flex-start;
 padding: 0 ${props => props.theme.padding.medium};
`

/**
* Logo Container
*/
export const LogoContainer = styled.div`
 display: flex;
 flex-direction: row;
 align-items: flex-start;
 justify-content: flex-start;
`

/**
* Logo Image
*/
export const LogoImage = styled.img`
 height: 100px;
 position: relative;
 object-fit: fill;
 src: url(${props => props.src});
`

export const MenuItemsContainer = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: space-between;
`

export const PrimaryMenuItems = styled.ul`
 width: 100%;
 position: relative;
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: flex-start;
 list-style: none;
`

export const MenuItem = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.3s ease-in-out;

    & > div.drop-down-menu {
        width: 100%;
        height: ${props => props.expanded ? '15rem' : '0px'};
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        opacity: ${props => props.expanded ? '1' : '0'};
        margin-left: ${props => props.theme.margin.xxx_large};
        transition: all 0.3s ease-in-out;
    }

`;


export const MenuItemLink = styled(NavLink)`
    width: 100%;
    height: 3rem;
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    padding: ${props => props.theme.padding.medium || "20px"};
    transition: all 0.35s ease-in-out;
    cursor: pointer;

    &:hover {
        // background: ${props => props.selected ? props.theme.color.selected_item_text : props.theme.color.selected_item_text};
        color: ${props => props.theme.color.primary};
        transform: translateX(0.5rem);

        &::before {
           transform: translateX(-0.5rem);
        }
    }

    & > i {
        margin-right: ${props => props.theme.margin.small};
        color: ${props => props.selected ? props.theme.color.primary : props.theme.color.menu_item_text};
        font-size: ${props => props.theme.font_size.large};
    }

    & > span {
        color: ${props => props.selected ? props.theme.color.primary : props.theme.color.menu_item_text};
        font-weight: ${props => props.selected ? props.theme.font_weight.medium : props.theme.font_weight.regular};
        font-size: ${props => props.theme.font_size.large};
    }
    
    & > span.sub-item { 
        font-size: ${props => props.theme.font_size.medium};
        color: ${props => props.selected ? props.theme.color.primary : props.theme.color.menu_item_text};
    }

    & > div.dropdown-arrow {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;

        & > i {
            color: ${props => props.selected ? props.theme.color.primary : props.theme.color.menu_item_text};
            font-size: ${props => props.theme.font_size.x_large};
            transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
            transition: all 0.35s ease-in-out;
        }
    }

    // &::before {
    //     height: 80%;
    //     position: absolute;
    //     content: '';
    //     right: 0;
    //     width: ${props => props.theme.border_width.medium};
    //     border-radius: ${props => props.theme.border_radius.medium};
    //     background-color: ${props => props.selected ? props.theme.color.primary : "transparent"};
    //     transition: all 0.35s ease-in-out;
    // }

`;


export const SecondaryMenuItems = styled.ul`
 width: 100%;
 position: relative;
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: flex-start;
 list-style: none;
`