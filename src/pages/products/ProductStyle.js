import styled from 'styled-components';
import { Card } from '../../components/styles/Styles';

export const ProductsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: ${props => props.theme.padding.medium};
`
export const ProductsCard = styled(Card)`
    width: 100%;

    & > div.products-card-header {
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