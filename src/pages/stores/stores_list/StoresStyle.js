import styled from 'styled-components';
import { Card, Table } from '../../../components/styles/Styles';


export const StoresContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: ${props => props.theme.padding.medium};
    overflow-y: hidden;
`

export const StoresTableCard = styled(Card)`
    flex: 1;
    width: 100%;
    overflow-y: hidden;

    & > div.stores-card-header {
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

export const StoresTable = styled(Table)`

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

                    & > span#store-name {
                        font-weight: ${props => props.theme.font_weight.bold};
                    }

                    & > i.ri-map-pin-user-fill {
                        color: ${props => props.theme.color.accent};
                        background-color: ${props => props.theme.color.divider};
                        border-radius: ${props => props.theme.border_radius.circular};
                        padding: ${props => props.theme.padding.xx_small};
                        cursor: pointer;
                    }
                }

                & > span#store-id {
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
        & > thead > tr > th.serial-number,.email,.phone {
            display: none;
        }
        & > tbody > tr > td.serial-number {
            display: none;
        }
    }
`

export const IconActionContainer = styled.div`
    position: relative;

    & > div.icon-action {
        position: absolute;
        right: 30px;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: max-content;
        height: max-content;
        padding: ${props => props.theme.padding.small};
        background-color: ${props => props.theme.color.card_background};
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
        border-radius: ${props => props.theme.border_radius.medium};
        visibility: ${props => props.show ? 'visible' : 'hidden'};
        z-index: 1;
    }
`;

