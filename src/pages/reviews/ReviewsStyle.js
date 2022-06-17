import styled from 'styled-components';
import { Card, Table } from '../../components/styles/Styles'

export const ReviewsPageContainer = styled.div`
    display: flex;
    width: 100%;
    padding: ${props => props.theme.padding.medium};
    gap: ${props => props.theme.gap.medium};
`;

export const ProductRatingCard = styled(Card)`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap.medium};

    & > h3 {
        font-size: ${props => props.theme.font_size.x_large};
        font-weight: 500;
        color: ${props => props.theme.color.secondary_text};
    }
`;

export const ProductReviewsTable = styled(Table)`
    & > tbody > tr > td {
        & > div.products {
            display: flex;
            align-items: center;
            gap: ${props => props.theme.gap.medium};
            
            & > img {
                width: 40px;
                height: 40px;
                border-radius: ${props => props.theme.border_radius.circular};
            }
        }
        & > div.rating, .reviews {
            display: flex;
            align-items: center;
            gap: ${props => props.theme.gap.x_small};

            & > i {
                color: #009999;
            }
        }

        & > div.reviews > span {
            cursor: pointer;
            color: ${props => props.theme.color.primary};
            text-decoration: underline;
        }
    }
`;

export const ProductReviewsCard = styled(Card)`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap.medium};

    & > h3 {
        font-size: ${props => props.theme.font_size.x_large};
        font-weight: 500;
        color: ${props => props.theme.color.secondary_text};
    }
`;