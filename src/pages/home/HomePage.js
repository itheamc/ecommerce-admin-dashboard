import React from 'react'
import {
    HomeContainer,
    SummaryCardContainer,
    SummaryCard,
    SummaryCardIconContainer,
    SummaryCardContentContainer,
    MiddleHomeCardContainer,
    DailySalesCard,
    NewlyRegisteredStoreCard,
    CustomersProductsCardsContainer,
    TopProductsListCard,
    CustomersCard
} from './HomeStyle.js'
import { Table } from '../../components/styles/Styles.js'

const HomePage = () => {
    return (
        <HomeContainer>
            <SummaryCardContainer>
                <SummaryCard>
                    <SummaryCardIconContainer>
                        <i className="ri-shopping-cart-fill"></i>
                    </SummaryCardIconContainer>
                    <SummaryCardContentContainer>
                        <p>Orders Completed</p>
                        <h2>1.200k</h2>
                    </SummaryCardContentContainer>
                </SummaryCard>
                <SummaryCard>
                    <SummaryCardIconContainer>
                        <i className="ri-arrow-up-down-fill"></i>
                    </SummaryCardIconContainer>
                    <SummaryCardContentContainer>
                        <p>Total Revenue</p>
                        <h2>128k</h2>
                    </SummaryCardContentContainer>
                </SummaryCard>
                <SummaryCard>
                    <SummaryCardIconContainer>
                        <i className="ri-user-3-fill"></i>
                    </SummaryCardIconContainer>
                    <SummaryCardContentContainer>
                        <p>Total Store Visit</p>
                        <h2>3.6m</h2>
                    </SummaryCardContentContainer>
                </SummaryCard>
                <SummaryCard>
                    <SummaryCardIconContainer>
                        <i className="ri-pie-chart-2-fill"></i>
                    </SummaryCardIconContainer>
                    <SummaryCardContentContainer>
                        <p>Total Sales</p>
                        <h2>40,567</h2>
                    </SummaryCardContentContainer>
                </SummaryCard>
            </SummaryCardContainer>
            <MiddleHomeCardContainer>
                <DailySalesCard>
                    <h2>Daily Sales</h2>
                    <p>Today</p>
                    <p>$1.200</p>
                </DailySalesCard>
                <NewlyRegisteredStoreCard>
                    <h2>Store Registered</h2>
                    <p>Today</p>
                    <p>3</p>
                </NewlyRegisteredStoreCard>
            </MiddleHomeCardContainer>
            <CustomersProductsCardsContainer>
                <TopProductsListCard>
                    <div className='top-products-list-card-header'>
                        <div className='top-products-list-card-header-title'>
                            <h2>Top Products</h2>
                            <p>Best selling products in your store</p>
                        </div>
                        <div className='top-products-list-card-header-action'>
                            <i class="ri-arrow-right-up-line"></i>
                        </div>
                    </div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Products</th>
                                <th>Date added</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><div><img src="assets/images/R.jpg" alt="wireless-headphone" />
                                    <span>Wireless HeadPhone</span></div></td>
                                <td>12/12/2022</td>
                                <td>$100</td>
                                <td><i class="ri-more-2-fill"></i></td>
                            </tr>
                            <tr>
                                <td><div><img src="assets/images/pos.png" alt="wireless-earpods" />
                                    <span>Wireless Earpods</span></div></td>
                                <td>12/12/2022</td>
                                <td>$50</td>
                                <td><i class="ri-more-2-fill"></i></td>
                            </tr>
                            <tr>
                                <td><div><img src="assets/images/shoe.jpg" alt="converse-shoe" />
                                    <span>Converse Shoe</span></div></td>
                                <td>12/12/2022</td>
                                <td>$15</td>
                                <td><i class="ri-more-2-fill"></i></td>
                            </tr>
                        </tbody>
                    </Table>
                </TopProductsListCard>
                <CustomersCard>
                    <h2>Customers</h2>
                    <p>Today</p>
                    <p>3</p>
                </CustomersCard>
            </CustomersProductsCardsContainer>
        </HomeContainer>
    )
}

export default HomePage