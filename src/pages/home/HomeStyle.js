import styled from "styled-components"
import { Card } from '../../components/styles/CardStyle.js';

/**
 * Home Container
 */
export const HomeContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`;


/**
 * Summary Card container
 */
export const SummaryCardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    gap: 1.2rem;
    padding: ${props => props.theme.padding.medium};
`


/**
 * Summary Card
 */
export const SummaryCard = styled(Card)`
    gap: 1.2rem;
`;


/**
 * Icon Container
 */
export const SummaryCardIconContainer = styled.div`
    width: 38px;
    aspect-ratio: 1;
    border-radius: ${props => props.theme.border_radius.medium};
    display: flex;
    justify-content: center;
    align-items: center;


    & > i {
        font-size: ${props => props.theme.font_size.large};
        color: ${props => props.theme.color.primary};
    }

    &::before {
        content: "";
        width: 38px;
        position: absolute;
        aspect-ratio: 1;
        background-color: ${props => props.color || props.theme.color.primary};
        border-radius: ${props => props.theme.border_radius.medium};
        opacity: 0.10;
    }
`;


/**
 * SummaryCard Content Container
 */
export const SummaryCardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    & > p {
        font-size: ${props => props.theme.font_size.small};
        font-weight: ${props => props.theme.font_weight.bold};
        color: ${props => props.theme.color.secondary_text};
    }

    & > h2 {
        font-size: ${props => props.theme.font_size.large};
        color: ${props => props.theme.color.primary};
    }
`;