import styled from 'styled-components';
import { Card, Table } from '../../components/styles/Styles'

export const ReviewsPageContainer = styled.div`
    display: flex;
    width: 100%;
    padding: ${props => props.theme.padding.medium};
    gap: ${props => props.theme.gap.medium};
`;

export const ProductRatingCard = styled(Card)`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap.medium};

    & > h3 {
        font-size: ${props => props.theme.font_size.x_large};
        font-weight: 500;
        color: ${props => props.theme.color.secondary_text};
    }
`;

export const ProductReviewsTable = styled(Table)`
    & > tbody > tr > td {
        & > div.products {
            display: flex;
            align-items: center;
            gap: ${props => props.theme.gap.medium};
            
            & > img {
                width: 40px;
                height: 40px;
                border-radius: ${props => props.theme.border_radius.circular};
            }
        }
        & > div.rating, .reviews {
            display: flex;
            align-items: center;
            gap: ${props => props.theme.gap.x_small};

            & > i {
                color: #009999;
            }
        }

        & > div.reviews > span {
            cursor: pointer;
            color: ${props => props.theme.color.primary};
            text-decoration: underline;
        }
    }
`;

export const ProductReviewsCard = styled(Card)`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap.medium};
    

    & > h3 {
        font-size: ${props => props.theme.font_size.x_large};
        font-weight: 500;
        color: ${props => props.theme.color.secondary_text};
    }

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: ${props => props.theme.margin.medium};

        & > h2 {
            font-size: ${props => props.theme.font_size.xx_large};
            font-weight: 800;
            background: linear-gradient(to right, ${props => props.theme.color.primary} , ${props => props.theme.color.accent});
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        & > span {
            font-size: ${props => props.theme.font_size.xx_large};
            font-weight: 800;
            color: ${props => props.theme.color.accent};
        }
    }

    & > div.reviews-container {
        display: flex;
        gap: ${props => props.theme.gap.medium};
        padding-bottom: ${props => props.theme.padding.medium};
        border-bottom: 0.5px solid ${props => props.theme.color.divider};

        & > div.profile-pic {

            & > img {
                width: 40px;
                height: 40px;
                border-radius: ${props => props.theme.border_radius.circular};
                object-fit: cover;
            }
        }

        & > div.review-content {
            display: flex;
            flex-direction: column;
            gap: ${props => props.theme.gap.xxx_small};
            

            & > div.reviews-header {
                display: flex;
                justify-content: space-between;
                align-items: center;

                & > div.reviews-header-left > span {
                    font-size: ${props => props.theme.font_size.large};
                    font-weight: 500;
                }

                & > div.reviews-header-right > i {
                    color: #009999;
                }
            }

            & > div.date {
                font-size: ${props => props.theme.font_size.medium};
                color: ${props => props.theme.color.secondary_text};
            }

            & > div.products-image {
                display: flex;
                gap: ${props => props.theme.gap.medium};
                align-items: center;
                margin-top: ${props => props.theme.margin.medium};

                & > div.left-product-image, .middle-product-image, .right-product-image {
                    border: 0.5px dashed ${props => props.theme.color.divider};

                    & > img {
                        width: 60px;
                        height: 60px;
                        object-fit: cover;
                    }
                }
            }

            & > div.reviews-body {
                text-align: justify;
                margin-top: ${props => props.theme.margin.medium};
                font-size: ${props => props.theme.font_size.medium};
                color: ${props => props.theme.color.secondary_text};
            }
        }
    }
`;