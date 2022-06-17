import styled from 'styled-components';
import { Card, Table } from '../../components/styles/Styles';


export const CategoriesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${props => props.theme.padding.medium};
    gap: ${props => props.theme.gap.medium};

    & > h2 {
        font-size: ${props => props.theme.font_size.large};
        font-weight: 500;
        color: ${props => props.theme.color.secondary_text};
    }
`;

export const CategoriesTableCard = styled(Card)`
    width: 100%;
    display: flex;
    flex-direction: column;

    & > div.categories-card-header {
        gap: ${props => props.theme.gap.medium};
        margin-bottom: ${props => props.theme.padding.medium};

        & > h2 {
            font-size: ${props => props.theme.font_size.x_large};
        }

        & > p {
            color: ${props => props.theme.color.secondary_text};
            font-size: ${props => props.theme.font_size.small};
        }
    }
`;

export const CategoriesTable = styled(Table)`
    & > tbody {

        & > tr {

            & > td {
                padding: ${props => props.theme.padding.medium} 0;

                & > span#category-id {
                    cursor: pointer;

                    &:hover {
                        color: ${props => props.theme.color.primary};
                        text-decoration: underline;
                    }
                }

                & > span#status {
                    width: max-content;
                    color: white;
                    background-color: lightgreen;
                    border-radius: ${props => props.theme.border_radius.large};
                    padding: ${props => props.theme.padding.xxx_small} ${props => props.theme.padding.small};
                }

                & > div {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    gap: ${props => props.theme.gap.small};

                    & > img {
                        width: 30px;
                        height: 30px;
                        border-radius: ${props => props.theme.border_radius.circular};
                        object-fit: contain;
                    }

                    & > span#category-name {
                        font-weight: ${props => props.theme.font_weight.bold};
                    }
                }
            }
        }
    }
`;