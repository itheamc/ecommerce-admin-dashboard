import styled from "styled-components"
import { Card, Table } from '../../components/styles/Styles.js';

/**
 * Home Container
 */
export const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    position: relative;
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
    position: relative;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    gap: ${props => props.theme.gap.medium};
    padding: 0 ${props => props.theme.padding.medium};

    @media (max-width: 884px) {
        display: grid;
        grid-template-columns: 2fr 2fr;
    }
`


/**
 * Summary Card
 */
export const SummaryCard = styled(Card)`
    flex: 1;
    height: 100px;
    gap: ${props => props.theme.gap.medium};
    display: flex;
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
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    gap: ${props => props.theme.gap.medium};
    padding: 0 ${props => props.theme.padding.medium};

    @media (max-width: 884px) {
        display: flex;
        flex-direction: column;
    }
`;

export const DailySalesCard = styled(Card)`
    flex: 2;
    gap: ${props => props.theme.gap.medium};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > h2 {
        font-size: ${props => props.theme.font_size.large};
        font-weight: ${props => props.theme.font_weight.bold};
        color: ${props => props.theme.color.secondary_text};
    }
`

export const NewlyRegisteredStoreCard = styled(Card)`
    flex: 1;
    gap: ${props => props.theme.gap.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    & > div.new-store-card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        & > div.new-store-title {

            & > h2 {
                font-size: ${props => props.theme.font_size.x_large};
                color: ${props => props.theme.color.primary_text};
            }

            & > p {
                font-size: ${props => props.theme.font_size.small};
                color: ${props => props.theme.color.secondary_text};
            }
        }

        & > div.new-store-header-action {
            & > i {
                cursor: pointer;
            }
        }
    }

    & > div.new-store-card-body {
        width: 100%;
        display: flex;
        flex-direction: column;

        & > div.new-store {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            border-bottom: ${props => props.theme.border_width.x_small} solid ${props => props.theme.color.divider};
            padding: ${props => props.theme.padding.x_small} 0;

            & > div.new-store-details {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: ${props => props.theme.gap.medium};

                & > img {
                    width: 30px;
                    height: 30px;
                    border-radius: ${props => props.theme.border_radius.circular};
                    object-fit: cover;
                }

                & > div.new-store-title-and-address {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;

                    & > h2 {
                        font-size: ${props => props.theme.font_size.medium};
                        color: ${props => props.theme.color.primary_text};
                        font-weight: ${props => props.theme.font_weight.medium};
                    }

                    & > p {
                        font-size: ${props => props.theme.font_size.x_small};
                        color: ${props => props.theme.color.secondary_text};
                    }
                }
            }

            & > i {
                font-size: ${props => props.theme.font_size.xxx_large};
                color: ${props => props.theme.color.secondary_text};
                cursor: pointer;
            }
        }

    }

`


export const CustomersProductsCardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: ${props => props.theme.gap.medium};
    padding: 0 ${props => props.theme.padding.medium};

    @media (max-width: 884px) {
        display: flex;
        flex-direction: column;


    }
`
export const TopProductsListCard = styled(Card)`
    width: 100%;
    flex: 1;
    gap: ${props => props.theme.gap.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 1.5rem;

    & > div.top-products-list-card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 ${props => props.theme.padding.medium} 0 0;

        & > div.top-products-list-card-header-title {
            & > h2 {
                font-size: ${props => props.theme.font_size.x_large};
                color: ${props => props.theme.color.primary_text};
            }

            & > p {
                font-size: ${props => props.theme.font_size.small};
                color: ${props => props.theme.color.secondary_text};
            }
        }

        & > div.top-products-list-card-header-action {
            display: flex;
            align-items: center;
            gap: ${props => props.theme.gap.medium};

            & > i {
                cursor: pointer;
            }
        }
    }

`

export const TopProductsTable = styled(Table)`
    & > tbody {

        & > tr {

            & > td {
                & > div {
                    width: max-content;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    gap: ${props => props.theme.gap.medium};

                    & > img {
                        width: 30px;
                        height: 30px;
                        border-radius: ${props => props.theme.border_radius.circular};
                        object-fit: contain;
                    }
                }
                & > p {
                    width: max-content;
                    color: blue;
                    background-color: ${props => props.theme.color.divider};
                    padding: ${props => props.theme.padding.xx_small} ${props => props.theme.padding.medium};
                    border-radius: ${props => props.theme.border_radius.large};
                }
                & > p.out-of-stock {
                    width: max-content;
                    color: ${props => props.theme.color.accent};
                    background-color: ${props => props.theme.color.divider};
                    padding: ${props => props.theme.padding.xx_small} ${props => props.theme.padding.medium};
                    border-radius: ${props => props.theme.border_radius.large};
                }
            }
        }
    }
`

export const CustomersCard = styled(Card)`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap.medium};

    & > div.transaction-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        & > div.transaction-title {

            & > h2 {
                font-size: ${props => props.theme.font_size.x_large};
            }

            & > p {
                font-size: ${props => props.theme.font_size.small};
                color: ${props => props.theme.color.secondary_text};

            }
        }

    

    }

    & > Table {
        & > tbody > tr > td > div {
            width: max-content;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: ${props => props.theme.gap.medium};

            & > img {
                width: 30px;
                height: 30px;
                border-radius: ${props => props.theme.border_radius.circular};
                object-fit: cover;
            }
        }
    }

`