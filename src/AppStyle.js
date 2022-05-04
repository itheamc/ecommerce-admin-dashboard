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
  overflow-y: hidden;
`


/**
  * Side menu container
  */
export const SideMenuContainer = styled.div`
  flex: 1;
  height: 100vh;
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
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  scroll-behavior: smooth;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: ${props => props.theme.scrollbar_width.small};
    border-radius: ${props => props.theme.border_radius.medium};
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.color.divider};
  }

  &::-webkit-scrollbar-thumb {
    width: ${props => props.theme.scrollbar_width.x_small};
    background: ${props => props.theme.color.secondary_text};
    border-radius: ${props => props.theme.border_radius.medium};
  }
`
