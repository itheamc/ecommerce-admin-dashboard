import styled from 'styled-components';
import { Card } from '../../../components/styles/Styles';


export const CustomerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${props => props.theme.padding.medium};
    gap: ${props => props.theme.gap.medium};

`

export const CustomerInformationContainer = styled.div`
    width: 100%;
    display: flex;
    gap: ${props => props.theme.gap.medium};
`;


export const CustomerInfoCard = styled(Card)`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap.medium};

    & > h3 {
        font-size: ${props => props.theme.font_size.large};
        font-weight: 600;
        color: ${props => props.theme.color.secondary_text};
    }

    & > div.customer-card {
        display: flex;
        gap: ${props => props.theme.gap.large};
        margin-top: ${props => props.theme.margin.medium};

        & > div.customer-image-section {
            width: 80px;
            height: 80px;
            border-radius: ${props => props.theme.border_radius.circular};
            overflow: hidden;

            & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        & > div.customer-details {

            & > h3 {
                font-size: ${props => props.theme.font_size.large};
                font-weight: 600;
                margin-bottom: ${props => props.theme.margin.small};
            }

            & > p {
                line-height: 2.5;
                color: ${props => props.theme.color.secondary_text};
                font-size: ${props => props.theme.font_size.medium};

                & > span {
                    font-weight: ${props => props.theme.font_weight.bold};
                }

            }
        }
    }

`

export const CustomerExpensesCard = styled(Card)`
    flex: 1;
    gap: ${props => props.theme.gap.medium};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;


    & > h3 {
        font-size: ${props => props.theme.font_size.large};
        font-weight: 600;
        color: ${props => props.theme.color.secondary_text};
    }


`;

export const CustomerRatingAndReviewsCard = styled(Card)`
    flex: 1;

    & > h3 {
        font-size: ${props => props.theme.font_size.large};
        font-weight: 600;
        color: ${props => props.theme.color.secondary_text};
    }

    & > div.customer-rating-reviews {
        display: flex;
        gap: ${props => props.theme.gap.medium};
        justify-content: space-between;
        align-items: center;
        margin-top: ${props => props.theme.margin.medium};
        border-bottom: 1px solid ${props => props.theme.color.divider};
        padding-bottom: ${props => props.theme.padding.medium};

        & > div.image-section {
            width: 50px;
            height: 50px;
            border-radius: ${props => props.theme.border_radius.circular};
            overflow: hidden;

            & > img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        
        & > div.reviews-section {
            display: flex;
            flex-direction: column;

            & > h3 {
                font-size: ${props => props.theme.font_size.large};
                font-weight: 600;
            }
            & > p {
                font-size: ${props => props.theme.font_size.small};
                color: ${props => props.theme.color.secondary_text};
            }
        }
        & > div.star-section {
            display: flex;

            & > i {
                color: #009999;
            }
        }
    }
`;

export const CustomerTransactionContainer = styled.div`
    width: 100%;
    display: flex;
    gap: ${props => props.theme.gap.medium};

`;

export const CustomerTransactionCard = styled(Card)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap.medium};

    & > h3 {
        font-size: ${props => props.theme.font_size.large};
        font-weight: 600;
        color: ${props => props.theme.color.secondary_text};
    }

    & > table {
        & > tbody > tr > td {
            & > div {
                display: flex;
                align-items: center;
                gap: ${props => props.theme.gap.small};


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