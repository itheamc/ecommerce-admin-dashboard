import styled from 'styled-components';

import { Card } from '../../../components/styles/Styles.js';

export const OrderDetailsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;

    & > div.order-date {

        & > p {
            font-size: ${props => props.theme.font_size.x_small};
            color: ${props => props.theme.color.secondary_text};
        }
    }
`

export const OrderHeader = styled.div`
    font-size: 0.7rem;
    display: flex;
    gap: 0.8rem;
    opacity: 0.8;

    & > h2.order-number {
        color: ${props => props.theme.color.accent};
    }
`

export const OrderDetailsContents = styled.div`
    width: 100%;
    display: flex;
    gap: ${props => props.theme.gap.medium};
    margin-top: ${props => props.theme.gap.small};

    @media (max-width: 884px) {
        flex-direction: column;
    }
`

export const OrderItemsCard = styled(Card)`
    flex: 5;

    & > div.order-items-header {      
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > h3 {
            font-size: 1rem;
            font-weight: 600;
            color: ${props => props.theme.color.secondary_text};
        }
    }

    & > div.order-items-body {
        display: flex;
        flex-direction: column;
        gap: ${props => props.theme.gap.x_large};
        margin-top: ${props => props.theme.gap.medium};

        & > div.order-items-container {
            display: flex;
            width: 100%;
            gap: ${props => props.theme.gap.x_large};

            & > div.image-section {

                & > img {
                    width: 80px;
                    height: 100px;
                    object-fit: cover;
                    border-radius: ${props => props.theme.border_radius.medium};

                }
            }

            & > div.details-section {
                display: flex;
                height: 100px;
                width: 100%;
                gap: ${props => props.theme.gap.large};
                border-bottom: 2px solid ${props => props.theme.color.divider};
                

                & > div.product-details {
                    margin-top: ${props => props.theme.gap.xx_small};
                    line-height: ${props => props.theme.line_height.small};

                    & > h4 {
                        font-size: 0.8rem;
                        font-weight: 600;
                    }

                    & > p {
                        font-size: ${props => props.theme.font_size.small};
                        color: ${props => props.theme.color.secondary_text};

                        span {
                            font-weight: 600;
                        }
                    }
                }


                & > div.product-values {
                    flex: 1;
                    display: flex;
                    justify-content: space-between;
                    margin-top: ${props => props.theme.gap.xx_small};

                    & > p {
                        font-size: 0.8rem;
                        font-weight: 400;
                    }
                }
            }
        }
    }

`

export const OrderSummaryCard = styled(Card)`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap.small};

    & > div.order-summary-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > h3 {
            font-size: 1rem;
            font-weight: 600;
            color: ${props => props.theme.color.secondary_text};
            
        }

        & > p {
            font-size: 0.7rem;
            background: ${props => props.theme.color.divider};
            padding: ${props => props.theme.gap.xxx_small} ${props => props.theme.gap.x_small};
            border-radius: ${props => props.theme.border_radius.medium};
            color: ${props => props.theme.color.accent};
            font-weight: bold;
        }
    }

    & > div.order-summary-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: ${props => props.theme.line_height.x_large};
        font-size: ${props => props.theme.font_size.small};


        & > div.order-summary-values {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;

        }
        
    }

    & > div.order-summary-amount {
        margin-top: ${props => props.theme.gap.large};
        font-size: 0.9rem;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: ${props => props.theme.gap.medium};
        border-top: 1px solid ${props => props.theme.color.divider};
    }
`

export const CustomerAndOrderDetailsContainer = styled.div`
    display: flex;
    width: 100%;
    gap: ${props => props.theme.gap.medium};
    margin-top: ${props => props.theme.gap.medium};

    @media (max-width: 884px) {
        display: grid;
        grid-template-columns: 2fr 2fr;
    }
`

export const CustomerAndOrderHeaderContainer = styled.div`
    margin-bottom: ${props => props.theme.gap.medium};
    & > h3 {
        font-size: 1rem;
        color: ${props => props.theme.color.secondary_text};
        font-weight: 600;
    }
`

export const CustomerDetailsCard = styled(Card)`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap.small};

    & > h3 {
        font-size: ${props => props.theme.font_size.large};
        font-weight: ${props => props.theme.font_weight.medium};
        color: ${props => props.theme.color.secondary_text};
    }
    
    & > div.customer-details {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        line-height: ${props => props.theme.line_height.x_large};
        font-size: ${props => props.theme.font_size.small};

        & > p {
            display: inline-flex;
            gap: ${props => props.theme.gap.small};

            & > span.customer-details-label {
                font-weight: ${props => props.theme.font_weight.medium};
            }

            & > span.customer-details-value {
                color: ${props => props.theme.color.secondary_text};
            }
        }
        
    }
`

export const DeliveryAddressCard = styled(Card)`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap.small};

    & > h3 {
        font-size: ${props => props.theme.font_size.large};
        font-weight: ${props => props.theme.font_weight.medium};
        color: ${props => props.theme.color.secondary_text};
    }
    
    & > div.customer-address-details {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        line-height: ${props => props.theme.line_height.x_large};
        font-size: ${props => props.theme.font_size.small};

        & > p {
            display: inline-flex;
            gap: ${props => props.theme.gap.small};

            & > span.address-labels {
                font-weight: ${props => props.theme.font_weight.medium};
            }

            & > span.address-values {
                color: ${props => props.theme.color.secondary_text};
            }
        }
    }
`

export const CourierDetailsCard = styled(Card)`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap.small};

    & > h3 {
        font-size: ${props => props.theme.font_size.large};
        font-weight: ${props => props.theme.font_weight.medium};
        color: ${props => props.theme.color.secondary_text};
    }

    & > div.courier-address {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        line-height: ${props => props.theme.line_height.x_large};
        font-size: ${props => props.theme.font_size.small};

        & > p {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            & > span {
                margin-right: ${props => props.theme.gap.small};
                & > img {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    object-fit: cover;
                }
            }
            & > span.change {
                color: ${props => props.theme.color.secondary_text};
            }
        }
    }
`