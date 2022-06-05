import styled from 'styled-components';

import { Card } from '../../../components/styles/Styles.js';

export const StoreContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap.medium};
`;

export const StoreInformationContainer = styled.div`
    display: flex;
    gap: ${props => props.theme.gap.medium};
    width: 100%;
    padding: ${props => props.theme.gap.medium};
`;

export const StoreCard = styled(Card)`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap.medium};

    & > h3 {
            font-size: ${props => props.theme.font_size.large};
            font-weight: 600;
            color: ${props => props.theme.color.secondary_text};
        }

    & > div.store-information-container {
        display: flex;
        gap: ${props => props.theme.gap.large};

        & > div.image-section {
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: ${props => props.theme.border_radius.medium};
            overflow: hidden;

            & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        & > div.information-section {
            display: flex;
            flex-direction: column;

            & > h2 {
                font-size: ${props => props.theme.font_size.x_large};
                font-weight: 600;
                margin-bottom: ${props => props.theme.gap.small};
            }

            & > P {
                font-size: ${props => props.theme.font_size.medium};
                line-height: 2.5;
                color: ${props => props.theme.color.secondary_text};

                & > span {
                    font-weight: ${props => props.theme.font_weight.bold};
                }
            }

        }
    }
`;

export const StoreSellingCard = styled(Card)`
    flex: 1;

    & > h3 {
        font-size: ${props => props.theme.font_size.large};
        font-weight: 600;
        color: ${props => props.theme.color.secondary_text};
    }
`;

export const StoreTopProductsCard = styled(Card)`
    flex: 1;
    display: flex;
    flex-direction: column;

    & > h3 {
        font-size: ${props => props.theme.font_size.large};
        font-weight: 600;
        color: ${props => props.theme.color.secondary_text};
    }

    & > Table { 
        & > tbody > tr > td {
            & > div {
                display: flex;
                align-items: center;
                gap: ${props => props.theme.gap.medium};

                & > img {
                    width: 40px;
                    height: 40px;
                    object-fit: cover;
                    border-radius: ${props => props.theme.border_radius.circular};
                }
            }
        }
    }
`;

export const StoreTransactionContainer = styled.div`
    display: flex;
    gap: ${props => props.theme.gap.medium};
    width: 100%;
`;

export const StoreTransactionCard = styled(Card)`
    width: 100%;
    display: flex;
    flex-direction: column;

    & > h3 {
        font-size: ${props => props.theme.font_size.large};
        font-weight: 600;
        color: ${props => props.theme.color.secondary_text};
        margin-bottom: ${props => props.theme.gap.medium};
    }

    & > Table {
        & > tbody > tr > td {
            & > div {
                display: flex;
                align-items: center;
                gap: ${props => props.theme.gap.medium};

                & > img {
                    width: 40px;
                    height: 40px;
                    object-fit: cover;
                    border-radius: ${props => props.theme.border_radius.circular};
                }
            }
        }
    }

`;

