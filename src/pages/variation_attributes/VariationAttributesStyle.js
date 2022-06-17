import styled from 'styled-components';
import { Card, Table } from '../../components/styles/Styles';


export const VariationAttributesContainer = styled.div`
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

export const VariationAttributesTableCard = styled(Card)`
    width: 100%;
    display: flex;
    flex-direction: column;

    & > div.variation-attributes-card-header {
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

export const VariationAttributesTable = styled(Table)`
    & > tbody {

        & > tr {

            & > td {
                padding: ${props => props.theme.padding.medium} 0;
                
                & > span#variation-attribute-name {
                    font-weight: ${props => props.theme.font_weight.bold};
                }

                & > span#variation-attribute-id {
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
                }
            }
        }
    }
`;