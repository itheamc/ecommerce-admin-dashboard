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
    border: 1px solid ${props => props.theme.color.primary};
    border-radius: ${props => props.theme.border_radius.medium};
    overflow: hidden;
    gap: ${props => props.theme.gap.medium};
    padding: 0 ${props => props.theme.padding.medium};

    & > thead {
        & > tr {
            & > th {
                text-align: left;
                color: ${props => props.theme.color.secondary_text};
            }
        }
    }

    & > tbody {

        & > tr {

            & > td {
                justify-content: center;
                padding: ${props => props.theme.padding.x_small} 0;
                font-size: ${props => props.theme.font_size.small};
                border-bottom: 1px solid ${props => props.theme.color.divider};

                & > div {
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    gap: ${props => props.theme.gap.medium};

                    &  > img {
                        width: 30px;
                        height: 30px;
                        border-radius: ${props => props.theme.border_radius.circular};
                        object-fit: cover;
                    }
                }  
            }
        }
    }

`;