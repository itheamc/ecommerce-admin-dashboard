import styled from 'styled-components';
import { Card } from '../../../components/styles/Styles';


export const ProductEditPageContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: ${props => props.theme.padding.medium};
    gap: ${props => props.theme.gap.medium};

    & > div.buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > button {
            border: 1px solid ${props => props.theme.color.secondary_text};
            padding: ${props => props.theme.padding.small} ${props => props.theme.padding.x_large};
            border-radius: ${props => props.theme.border_radius.x_small};
            // background-color: ${props => props.theme.color.accent};
            // color: ${props => props.selected ? props.theme.color.selected_item_text : props.theme.color.selected_item_text};
            cursor: pointer;
        }
    }

    & > form {
        width: 100%;
        display: flex;
        gap: ${props => props.theme.gap.medium};

        
        @media (max-width: 884px) {
            flex-direction: column;
        }
    }
`;

export const ProductDetailsCard = styled(Card)`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap.medium};
    padding: ${props => props.theme.padding.large} ${props => props.theme.padding.medium};

    & > label {
        font-size: ${props => props.theme.font_size.medium};
        font-weight: 500;
    }

    & > div.product-price {
        display: flex;
        justify-content: space-between;
        gap: ${props => props.theme.gap.large};

        & > div.maximum-price, .selling-price {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: ${props => props.theme.gap.medium};

            & > label {
                font-size: ${props => props.theme.font_size.medium};
                font-weight: 500;
            }
        }
    }

    & > div.product-price > input, input , select {
        width: 100%;
        outline: none;
        border: none;
        padding: ${props => props.theme.padding.small};
        border-radius: ${props => props.theme.border_radius.medium};
        color: ${props => props.theme.color.secondary_text};
        background-color: ${props => props.selected ? props.theme.color.selected_item_text : props.theme.color.selected_item_text};
    }

    & > textarea {
        width: 100%;
        height: 150px;
        outline: none;
        border: none;
        padding: ${props => props.theme.padding.small};
        border-radius: ${props => props.theme.border_radius.medium};
        color: ${props => props.theme.color.secondary_text};
        resize: none;
        background-color: ${props => props.selected ? props.theme.color.selected_item_text : props.theme.color.selected_item_text};

    }

`;

export const ProductAttributesCard = styled(Card)`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap.medium};

    & > label {
        font-size: ${props => props.theme.font_size.medium};
        font-weight: 500;

    }

    & > select {
        width: 100%;
        outline: none;
        border: none;
        padding: ${props => props.theme.padding.small};
        border-radius: ${props => props.theme.border_radius.medium};
        color: ${props => props.theme.color.secondary_text};
        background-color: ${props => props.selected ? props.theme.color.selected_item_text : props.theme.color.selected_item_text};
    }

    & > h3 {
        font-size: ${props => props.theme.font_size.medium};
        font-weight: 500;
        margin-top: ${props => props.theme.margin.small};

    }

    & > p {
        font-size: ${props => props.theme.font_size.medium};
        color: ${props => props.theme.color.secondary_text};
        text-align: justify;
    }

    & > div.buttons {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: ${props => props.theme.margin.large};

        & > button {
            border: 1px solid ${props => props.theme.color.secondary_text};
            padding: ${props => props.theme.padding.small} ${props => props.theme.padding.x_large};
            border-radius: ${props => props.theme.border_radius.x_small};
        }

        
        & > button.active {
            background-color: ${props => props.theme.color.primary};
            color: ${props => props.selected ? props.theme.color.selected_item_text : props.theme.color.selected_item_text};
        }
    }

    & > div.product-image-container {
        display: flex;
        gap: ${props => props.theme.gap.medium};

        & > div.left-product-image, .middle-product-image, .right-product-image {
            flex: 1;
            width: 100px;
            height: 150px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            border: 2px dashed ${props => props.theme.color.divider};
            border-radius: ${props => props.theme.border_radius.medium};


            & > p {
                font-size: ${props => props.theme.font_size.small};
                color: ${props => props.theme.color.secondary_text};
                font-weight: 500;

                & > input[type="file"] {
                    display: none;
                }
            }

            & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

        }
    }
`;