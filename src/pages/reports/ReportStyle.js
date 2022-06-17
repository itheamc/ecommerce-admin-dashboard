import styled from 'styled-components';
import { Card } from '../../components/styles/Styles.js';


export const ReportContainer = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 0 0 ${props => props.theme.padding.medium} 0;
    gap: ${props => props.theme.gap.medium};
`;
export const SummaryReportContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    gap: ${props => props.theme.gap.medium};
    padding: 0 ${props => props.theme.padding.medium};

`;

export const SummaryReport = styled(Card)`
    flex: 1;
    height: 100px;
    gap: ${props => props.theme.gap.medium};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & > div.summary-report-icon {
        width: 38px;
        aspect-ratio: 1;
        border-radius: ${props => props.theme.border_radius.medium};
        display: flex;
        justify-content: center;
        align-items: center;


        & > i {
            font-size: ${props => props.theme.font_size.large};
            color: ${props => props.theme.color.primary};
        }

        &::before {
            content: "";
            width: 38px;
            position: absolute;
            aspect-ratio: 1;
            background-color: ${props => props.color || props.theme.color.primary};
            border-radius: ${props => props.theme.border_radius.medium};
            opacity: 0.10;
        }
    }

    & > div.summary-report-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        & > p {
            font-size: ${props => props.theme.font_size.small};
            font-weight: ${props => props.theme.font_weight.bold};
            color: ${props => props.theme.color.secondary_text};
        }

        & > h2 {
            font-size: ${props => props.theme.font_size.large};
            color: ${props => props.theme.color.primary};
        }
    }
`;


export const MiddleReportContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    gap: ${props => props.theme.gap.medium};
    padding: 0 ${props => props.theme.padding.medium};

    @media (max-width: 884px) {
        flex-direction: column;
    }
`;

export const RevenueCard = styled(Card)`
    flex: 2;
    gap: ${props => props.theme.gap.medium};
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > h2 {
        font-size: ${props => props.theme.font_size.x_large};
        font-weight: 600;
        color: ${props => props.theme.color.secondary_text};
    }
`;


export const SellerCard = styled(Card)`
    flex: 1;
    gap: ${props => props.theme.gap.medium};
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > h2 {
        font-size: ${props => props.theme.font_size.x_large};
        font-weight: 600;
        color: ${props => props.theme.color.secondary_text};
    }
    & > div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const CustomerRatingAndReviewsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: ${props => props.theme.gap.medium};
    padding: 0 ${props => props.theme.padding.medium};

    @media (max-width: 884px) {
        display: grid;
        grid-template-columns: 2fr 2fr;
    }
`;

export const CustomerCard = styled(Card)`
    height: 100%;
    flex: 1;
    gap: ${props => props.theme.gap.medium};
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > h2 {
        font-size: ${props => props.theme.font_size.x_large};
        font-weight: 600;
        color: ${props => props.theme.color.secondary_text};
    }

    & > div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const RatingCard = styled(Card)`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap.medium};

    & > h2 {
        font-size: ${props => props.theme.font_size.x_large};
        font-weight: 600;
        color: ${props => props.theme.color.secondary_text};
    }

    & > div.rating-container {

        & > div.rating-section {
            display: flex;
            justify-content: space-between;
            margin-bottom: ${props => props.theme.margin.medium};


            & > div.star-section {
                display: flex;
                align-items: center;

                & > i {
                    color: #009999;
                }

                & > p {
                    font-size: ${props => props.theme.font_size.small};
                    margin-left: ${props => props.theme.margin.x_small};
                }
            }
            & > div.total-rating {
                & > p {
                    font-size: ${props => props.theme.font_size.small};
                    color: ${props => props.theme.color.secondary_text};
                }
            }
        }
    }
`;



export const RatingBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: ${props => props.theme.gap.large};
    line-height: 2.4;

    & > div.star-info {
        display: flex;

        & > p {
            width: max-contain;
            font-size: ${props => props.theme.font_size.small};
            color: ${props => props.theme.color.secondary_text};
        }
    }
    & > div.progress-bar {
        position: relative;
        width: 100%;
        height: 5px;
        border-radius: ${props => props.theme.border_radius.small};
        background-color: ${props => props.theme.color.divider};

        & > span {
            position: absolute;
            width: ${props => props.value ? props.value : 0}%;
            height: 5px;
            border-radius: ${props => props.theme.border_radius.small};
            background-color: #009999;
        }
        
    }

    & > p {
        position: relative;
        font-size: ${props => props.theme.font_size.small};
        color: ${props => props.theme.color.secondary_text};

        &:after {
            position: absolute;
            transform: translate(-50%, -50%);
            content: '${props => props.value}%';
        }
    }
`;

export const TotalReviewsCard = styled(Card)`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${props => props.theme.gap.medium};

    & > h2 {
        font-size: ${props => props.theme.font_size.x_large};
        font-weight: 600;
        color: ${props => props.theme.color.secondary_text};
    }
    & > div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
