import React from 'react'
import {
    HomeContainer,
    SummaryCardContainer,
    SummaryCard,
    SummaryCardIconContainer,
    SummaryCardContentContainer
} from './HomeStyle.js'

const HomePage = () => {
    return (
        <HomeContainer>
            <SummaryCardContainer>
                <SummaryCard height="100px" flexDirection="row" alignItems="center" justifyContent="center">
                    <SummaryCardIconContainer color="#f44336">
                        <i className="ri-shopping-cart-fill"></i>
                    </SummaryCardIconContainer>
                    <SummaryCardContentContainer>
                        <p>Orders Completed</p>
                        <h2>1.200k</h2>
                    </SummaryCardContentContainer>
                </SummaryCard>
                <SummaryCard height="100px" flexDirection="row" alignItems="center" justifyContent="center">
                    <SummaryCardIconContainer color="#f44336">
                        <i className="ri-arrow-up-down-fill"></i>
                    </SummaryCardIconContainer>
                    <SummaryCardContentContainer>
                        <p>Total Revenue</p>
                        <h2>128k</h2>
                    </SummaryCardContentContainer>
                </SummaryCard>
                <SummaryCard height="100px" flexDirection="row" alignItems="center" justifyContent="center">
                    <SummaryCardIconContainer color="#f44336">
                        <i className="ri-user-3-fill"></i>
                    </SummaryCardIconContainer>
                    <SummaryCardContentContainer>
                        <p>Total Store Visit</p>
                        <h2>3.6m</h2>
                    </SummaryCardContentContainer>
                </SummaryCard>
                <SummaryCard height="100px" flexDirection="row" alignItems="center" justifyContent="center">
                    <SummaryCardIconContainer color="#f44336">
                        <i className="ri-pie-chart-2-fill"></i>
                    </SummaryCardIconContainer>
                    <SummaryCardContentContainer>
                        <p>Total Sales</p>
                        <h2>40,567</h2>
                    </SummaryCardContentContainer>
                </SummaryCard>
            </SummaryCardContainer>
        </HomeContainer>
    )
}

export default HomePage