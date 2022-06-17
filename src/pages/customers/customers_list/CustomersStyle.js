import styled from 'styled-components';
import { Card, Table } from '../../../components/styles/Styles';


export const CustomersContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: ${props => props.theme.padding.medium};
    overflow-y: hidden;
`

export const CustomersTableCard = styled(Card)`
    flex: 1;
    width: 100%;
    overflow-y: hidden;

    & > div.customers-card-header {
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
`

export const CustomersTable = styled(Table)`

    & > tbody {

        & > tr {

            & > td {
                padding: ${props => props.theme.padding.medium} 0;
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
                        object-fit: cover;
                    }

                    & > span#customer-name {
                        font-weight: ${props => props.theme.font_weight.bold};
                    }
                }

                & > span#customer-id {
                    cursor: pointer;

                    &:hover {
                        color: ${props => props.theme.color.primary};
                        text-decoration: underline;
                    }
                }

                & > span#status {
                    width: max-content;
                    color: ${props => props.theme.color.accent};
                    background-color: ${props => props.theme.color.divider};
                    border-radius: ${props => props.theme.border_radius.large};
                    padding: ${props => props.theme.padding.xxx_small} ${props => props.theme.padding.small};
                }
            }
        }
    }

    @media (max-width: 884px) {
        & > thead > tr > th.serial-number,.phone,.email { 
            display: none;
        }
        & > tbody > tr > td.serial-number {
            display: none;
        }
    }
`

