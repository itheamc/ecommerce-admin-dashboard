import styled from 'styled-components';
import { Card } from '../../../components/styles/Styles.js';

export const ProductsContainer = styled.div`
    width: 100%;
    display: flex;
    gap: ${props => props.theme.gap.medium};
    padding: ${props => props.theme.padding.medium};
`

export const ProductContainer = styled(Card)`
    flex: 3;
    width: 100%;

    & > div.product {
        display: flex;
        justify-content: space-evenly;
        gap: ${props => props.theme.gap.large};

        & > div.image {
            display: flex;
            align-items: center;
            gap: ${props => props.theme.gap.medium};

            & > img {
                flex: 1;
                position: relative;
                width: 280px;
                height: 280px;
                object-fit: contain;
                cursor: pointer;
                
            }

        }

        & > div.product-details-section {
            border-radius: ${props => props.theme.border_radius.large};
            line-height: ${props => props.theme.line_height.small};

            & > div.star-section {
                display: flex;
                color: ${props => props.theme.color.accent};
            }

            & > h3 {
                font-size: ${props => props.theme.font_size.xxx_large};
                color: ${props => props.theme.color.secondary_text};
            }
            
            & > p {
                font-weight: 400;
                color: ${props => props.theme.color.secondary_text};
                font-size: ${props => props.theme.font_size.small};
            }
            & > p.product-price {
                margin: ${props => props.theme.margin.medium} 0;
                color: ${props => props.theme.color.primary_text};
                font-size: ${props => props.theme.font_size.xx_large};
                opacity: 0.8;
                font-weight: 700;
            }
            & > div.image-section {
                display: flex;
                gap: ${props => props.theme.gap.medium};
                margin-top: ${props => props.theme.margin.medium};

                & > img {
                    height: 60px;
                    width: 60px;
                    object-fit: contain;
                    background-color: ${props => props.theme.color.divider};
                    cursor: pointer;
                }
            }
        }
    }
    & > div.product-description {
        width: 100%;
        margin-top: ${props => props.theme.margin.medium};
        & > h3 {
            margin-bottom: ${props => props.theme.gap.x_small};
            font-size: ${props => props.theme.font_size.large};
            font-weight: ${props => props.theme.font_weight.medium};
            color: ${props => props.theme.color.secondary_text};
        }
        & > p {
            text-align: justify;
            color: ${props => props.theme.color.secondary_text};
            font-size: ${props => props.theme.font_size.medium};

        }
    }
`

export const ProductRatingAndReviewsContainer = styled(Card)`
    flex: 2;

    & > div.product-rating-container {
        margin-top: ${props => props.theme.margin.medium};
        display: flex;
        flex-direction: column;
        gap: ${props => props.theme.gap.large};

        & > div.rating-container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: ${props => props.theme.gap.small};

            & > div.rating-points {
                display: flex;
                align-items: baseline;
                gap: ${props => props.theme.gap.xx_small};

                & > h3 {
                    font-size: ${props => props.theme.font_size.xxx_large};
                    font-weight: 700;
                }

                & > p {
                    font-size: ${props => props.theme.font_size.medium};
                    color: ${props => props.theme.color.secondary_text};
                    font-weight: 500;
                }
            }
            & div.star-section {
                display: flex;
                color: ${props => props.theme.color.accent};
            }

            & > div.total-reviews {
                display: flex;
                align-items: center;
                gap: ${props => props.theme.gap.xx_small};

                & > i {
                    color: ${props => props.theme.color.primary};
                    font-size: ${props => props.theme.font_size.large};
                }
                & > p {
                    color: ${props => props.theme.color.secondary_text};
                    font-size: ${props => props.theme.font_size.medium};
                }
            }
        }

        & > div.rating-progress {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            gap: ${props => props.theme.gap.small};
        }

        & > div.user-review-container {
            margin-top: ${props => props.theme.margin.medium};

            & > h3 {
                font-size: ${props => props.theme.font_size.large};
                font-weight: ${props => props.theme.font_weight.medium};
                color: ${props => props.theme.color.secondary_text};
            }

            & > div.user-reviews {

                & > div.user-review {
                    display: flex;
                    gap: ${props => props.theme.gap.small};
                    margin-top: ${props => props.theme.margin.medium};
                    border-bottom: 1px solid ${props => props.theme.color.divider};
                    padding-bottom: ${props => props.theme.padding.small};

                & > div.image-section {
                    & > img {
                        width: 30px;
                        height: 30px;
                        object-fit: cover;
                        border-radius: 50%;
                    }
                }

                    & > div.review-section {
                        display: flex;
                        flex-direction: column;

                        & > div.header {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            & > h3 {
                                font-size: ${props => props.theme.font_size.large};
                                font-weight: 700;
                            }

                            & > div.star-section {

                                & > i {
                                    color: ${props => props.theme.color.accent};
                                }
                            }
                            
                        }

                        & div.reviews {
                            & > p {
                                text-align: justify;
                                font-size: ${props => props.theme.font_size.medium};
                                color: ${props => props.theme.color.secondary_text};
                            }
                        }
                    }
                }
            }
        }
    }
`   


export const RatingProgressBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: ${props => props.theme.gap.small};
                

    & > div.star-info {
        display: flex;
        align-items: center;
        gap: ${props => props.theme.gap.x_small};

        & > p {
            font-size: ${props => props.theme.font_size.large};
            font-weight: 600;
        }

        & > i {
            color: ${props => props.theme.color.accent};
        }
    }

    & > div.progress-bar {
        position: relative;
        display: flex;
        width: 100%;
        height: 10px;
        align-items: center;
        justify-content: flex-start;
        background-color: ${props => props.theme.color.divider};
        border-radius: ${props => props.theme.border_radius.small};

        & > span {
            position: absolute;
            height: 100%;
            width: ${props => props.value ? props.value : 0}%;
            background-color: ${props => props.color || props.theme.color.accent};
            border-radius: ${props => props.theme.border_radius.small};

            &::before {
                content: '';
                position: absolute;
                top: -10px;
                right: 0;
                width: 0;
                height: 0;
                border: 7px solid transparent;
                border-bottom-width: 0px;
                border-right-width: 0px;
                border-top-color: ${props => props.theme.color.primary};

            }

            &::after {
                position: absolute;
                content: '${props => props.value}%';
                right: -16px;
                top: -27px;
                font-size: ${props => props.theme.font_size.x_small};
                background-color: ${props => props.theme.color.primary};
                color: #fff;
                border-radius: ${props => props.theme.border_radius.small};
                padding: ${props => props.theme.padding.xxx_small} ${props => props.theme.padding.x_small};
            }
        }
    }
`