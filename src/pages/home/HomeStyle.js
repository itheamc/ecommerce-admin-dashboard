import styled from "styled-components"
import { Card } from '../../components/styles/Styles.js';

/**
 * Home Container
 */
export const HomeContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 0 0 ${props => props.theme.padding.medium} 0;
    gap: ${props => props.theme.gap.medium};

`;


/**
 * Summary Card container
 */
export const SummaryCardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    gap: ${props => props.theme.gap.medium};
    padding: 0 ${props => props.theme.padding.medium};
`


/**
 * Summary Card
 */
export const SummaryCard = styled(Card)`
    flex: 1;
    height: 100px;
    gap: ${props => props.theme.gap.medium};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

export const MiddleHomeCardContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    gap: ${props => props.theme.gap.medium};
    padding: 0 ${props => props.theme.padding.medium};
`;

export const DailySalesCard = styled(Card)`
    flex: 2;
    gap: ${props => props.theme.gap.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const NewlyRegisteredStoreCard = styled(Card)`
    flex: 1;
    gap: ${props => props.theme.gap.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export const CustomersProductsCardsContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: ${props => props.theme.gap.medium};
    padding: 0 ${props => props.theme.padding.medium};
`
export const TopProductsListCard = styled(Card)`
    height: 100%;
    flex: 2;
    gap: ${props => props.theme.gap.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    & div.top-products-list-card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 ${props => props.theme.padding.medium} 0 0;

        & div.top-products-list-card-header-title {
            & > p {
                color: ${props => props.theme.color.secondary_text};
                font-size: ${props => props.theme.font_size.small};
            }
        }
    }

`

export const CustomersCard = styled(Card)`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${props => props.theme.gap.medium};

`