import styled from 'styled-components';
import { Card } from '../../components/styles/Styles';


export const OrderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: ${props => props.theme.padding.medium};
`

export const OrdersTableCard = styled(Card)`
    width: 100%;
`

