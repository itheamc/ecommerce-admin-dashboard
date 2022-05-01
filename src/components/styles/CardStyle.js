import styled from "styled-components";

export const Card = styled.div`
    width: ${props => props.width || "100%"};
    height: ${props => props.height || "100%"};
    flex: ${props => props.flex || "1"};
    display: ${props => props.display || "flex"};
    flex-direction: ${props => props.flexDirection || "column"};
    align-items: ${props => props.alignItems || "flex-start"};
    justify-content: ${props => props.justifyContent || "flex-start"};
    background-color: ${props => props.theme.color.card_background};
    border-radius: ${props => props.theme.border_radius.medium};
    padding: ${props => props.theme.padding.medium};
`;