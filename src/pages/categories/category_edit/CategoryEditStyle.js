import styled from 'styled-components';
import { Card } from '../../../components/styles/Styles';


export const CategoryEditContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${props => props.theme.padding.medium};
    gap: ${props => props.theme.gap.large};

    & > div.buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > button {
            border: 1px solid ${props => props.theme.color.secondary_text};
            padding: ${props => props.theme.padding.small} ${props => props.theme.padding.x_large};
            border-radius: ${props => props.theme.border_radius.x_small};
            cursor: pointer;
            // background-color: ${props => props.theme.color.accent};
            // color: ${props => props.selected ? props.theme.color.selected_item_text : props.theme.color.selected_item_text};
        }
    }
`;

export const CategoryEditCard = styled(Card)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap.medium};
    padding: ${props => props.theme.padding.x_large} ${props => props.theme.padding.medium};

    & > h2 {
        font-size: ${props => props.theme.font_size.x_large};
        font-weight: 500;
        margin-bottom: ${props => props.theme.margin.small};

        & > span {
            color: ${props => props.theme.color.accent};
        }
    }

    & > label {
        font-size: ${props => props.theme.font_size.medium};
        font-weight: 500;
    }

    & > input, select {
        width: 100%;
        outline: none;
        border: none;
        padding: ${props => props.theme.padding.small};
        border-radius: ${props => props.theme.border_radius.medium};
        color: ${props => props.theme.color.secondary_text};
        background-color: ${props => props.selected ? props.theme.color.selected_item_text : props.theme.color.selected_item_text}
    }

    & > select > option {
        color: ${props => props.theme.color.secondary_text};
        outline: none;
        border: none;
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

`;