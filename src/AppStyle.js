import styled from "styled-components";

/**
  * Main Container
*/
export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${props => props.theme.color.background};
`


/**
  * Side menu container
  */
export const SideMenuContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${props => props.theme.color.sidebar_background};
`


/**
  * Body content container
  */
export const ContentContainer = styled.div`
  flex: 6;
  height: 100%;
`

/**
 * Menu Header Container
 */
export const MenuHeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #f5f5f5;
`

/**
 * Logo Container
 */
export const LogoContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  justify-content: flex-start;
`

export const PrimaryMenuItems = styled.ul`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: bisque;
  list-style: none;
`

export const MenuItem = styled.li`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: ${props => props.theme.padding.medium || "20px"};
  background-color: ${props => props.selected ? props.theme.color.selected_item : "transparent"};
`