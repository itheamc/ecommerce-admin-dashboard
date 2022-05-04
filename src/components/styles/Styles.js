import styled from "styled-components";

// Card
export const Card = styled.div`
    background-color: ${props => props.theme.color.card_background};
    border-radius: ${props => props.theme.border_radius.medium};
    padding: ${props => props.theme.padding.medium};
`;


// Table
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    overflow: hidden;

    & > thead {
        & > tr {
            & > th {
                text-align: left;
                color: ${props => props.theme.color.primary_text};
                font-size: ${props => props.theme.font_size.medium};
                padding: ${props => props.theme.padding.small} 0;
            }
        }
    }

    & > tbody {

        & > tr {
            border-bottom: ${props => props.theme.border_width.small} solid ${props => props.theme.color.divider};

            & > td {
                justify-content: center;
                padding: ${props => props.theme.padding.x_small} 0;
                font-size: ${props => props.theme.font_size.small};

                & > div {
                    width: max-content;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    gap: ${props => props.theme.gap.medium};

                    &  > img {
                        width: 30px;
                        height: 30px;
                        border-radius: ${props => props.theme.border_radius.circular};
                        object-fit: cover;
                    }
                }
                
                & > span.order-number {
                    cursor: pointer;

                    &:hover {
                        color: ${props => props.theme.color.primary_text};
                        text-decoration: underline;
                        font-weight: bold;
                    }
                }

                & > i {
                    cursor: pointer;
                }
                & > div {
                    & > i {
                        color: ${props => props.theme.color.accent};
                        background-color: ${props => props.theme.color.divider};
                        border-radius: ${props => props.theme.border_radius.circular};
                        padding: 5px;
                        cursor: pointer;
                    }
                }

                & > p.status {
                    width: max-content;
                    color: ${props => props.theme.color.accent};
                    background-color: ${props => props.theme.color.divider};
                    border-radius: ${props => props.theme.border_radius.large};
                    padding: ${props => props.theme.padding.xxx_small} ${props => props.theme.padding.small};
                }

                & > p.active {
                    width: max-content;
                    color: white;
                    background-color: lightgreen;
                    border-radius: ${props => props.theme.border_radius.large};
                    padding: ${props => props.theme.padding.xxx_small} ${props => props.theme.padding.small};
                }
            }
        }
    }

`;