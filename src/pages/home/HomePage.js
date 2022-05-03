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
                    <div className='new-store-card-header'>
                        <div className='new-store-title'>
                            <h2>New Stores</h2>
                            <p>Recently added stores.</p>
                        </div>
                        <div className='new-store-header-action'>
                            <i className="ri-arrow-right-up-line"></i>
                        </div>
                    </div>
                    <div className='new-store-card-body'>
                        {
                            [{id: 1, name: "Arya Clothing Store", address: "Tulsipur Chowk, Ghorahi, Dang"}, {id: 2, name: "Smarty Shoes Store", address: "Traffic Chowk, Ghorahi, Dang"}, {id: 3, name: "Arohi Botique", address: "Main Road, Lamahi, Dang"}].map(item => {
                                return (
                                    <div className='new-store' key={item.id}>
                                        <div className='new-store-details'>
                                            <img src="assets/images/logo.png" alt="logo" />
                                            <div className='new-store-title-and-address'>
                                                <h2>{ item.name }</h2>
                                                <p>{ item.address }</p>
                                            </div>
                                        </div>
                                        <i className='ri-arrow-drop-right-line'></i>
                                    </div>
                                );
                            })
                        }
                    </div>
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
                            <i className="ri-arrow-right-up-line"></i>
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
                                <td><i className="ri-more-2-fill"></i></td>
                            </tr>
                            <tr>
                                <td><div><img src="assets/images/pos.png" alt="wireless-earpods" />
                                    <span>Wireless Earpods</span></div></td>
                                <td>12/12/2022</td>
                                <td>$50</td>
                                <td><i className="ri-more-2-fill"></i></td>
                            </tr>
                            <tr>
                                <td><div><img src="assets/images/shoe.jpg" alt="converse-shoe" />
                                    <span>Converse Shoe</span></div></td>
                                <td>12/12/2022</td>
                                <td>$15</td>
                                <td><i className="ri-more-2-fill"></i></td>
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