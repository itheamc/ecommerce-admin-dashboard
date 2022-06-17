import styled from 'styled-components';
import {Card} from '../../components/styles/Styles.js'

export const TransactionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px ${props => props.theme.padding.medium};
    gap: ${props => props.theme.padding.medium};

`;

export const TopTransactionsContainer = styled.div`
    display: flex;
    width: 100%;
    gap: ${props => props.theme.padding.medium};
    
`;

export const TotalTransactionsCard = styled(Card)`
    display: flex;
    flex: 2;
    flex-direction: column;

    & > h3 {
        font-size: ${props => props.theme.font_size.large};
        font-weight: 600;
        color: ${props => props.theme.color.secondary_text};
    }
`;

export const SellerTransactionsCard = styled(Card)`
    display: flex;  
    flex: 1;
    flex-direction: column;

    & > h3 {
        font-size: ${props => props.theme.font_size.large};
        font-weight: 600;
        color: ${props => props.theme.color.secondary_text};
    }
`;

export const BottomTransactionsContainer = styled.div`
    display: flex;
    width: 100%;
    gap: ${props => props.theme.padding.medium};
`;

export const TransactionsCard = styled(Card)`
    display: flex;
    flex: 2;
`;

export const CustomerTransactionsCard = styled(Card)`
    display: flex;
    flex: 1;
    flex-direction: column;

    & > h3 {
        font-size: ${props => props.theme.font_size.large};
        font-weight: 600;
        color: ${props => props.theme.color.secondary_text};
    }
`;