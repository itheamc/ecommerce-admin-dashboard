import styled from "styled-components";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";

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
                color: ${props => props.theme.color.secondary_text};
                font-size: ${props => props.theme.font_size.small};
                padding: ${props => props.theme.padding.small} 0;
                text-transform: uppercase;
            }
        }
    }

    & > tbody {

        & > tr {
            border-bottom: ${props => props.theme.border_width.small} solid ${props => props.theme.color.divider};

            & > td {
                padding: ${props => props.theme.padding.x_small} 0;
                font-size: ${props => props.theme.font_size.small};

                & > i {
                    cursor: pointer;
                }
            }
        }
    }

`;


export const AChart = styled(Chart)`
    width: 100%;
    height: 100%;
    background-color: transparent;
`;

export const ActionLink = styled(Link)`
    text-decoration: none;
`;