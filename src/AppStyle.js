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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

