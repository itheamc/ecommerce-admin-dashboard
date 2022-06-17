import React from 'react'
import { useSelector } from 'react-redux';
import { themeValueSelector } from '../../states/theme/themeSlice.js';
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
    TopProductsTable,
    CustomersCard,
} from './HomeStyle.js'

import { AChart, Table } from '../../components/styles/Styles.js'

const option = {
    series: [{
      name: 'Sales',
      data: [800, 500, 1200, 300, 900, 100, 600]
    }],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
    chart: {
        background: 'transparent',
        stacked: false,
        zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
        },
        toolbar: {
            show: false
        },
    },
  yaxis: {
    labels: {
      formatter: function (val) {
        return (val / 1000) + "k";
      }
    }
  },
  markers: {
    size: 0
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.8,
      opacityTo: 0.2,
      stops: [0, 90, 100]
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false, 
  },
  xaxis: {
    categories: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
  },
};



const HomePage = () => {
    const _theme = useSelector(themeValueSelector);

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
                    <AChart options={{ ...option, theme: { mode: _theme, palette: 'palette1' } }} series={option.series} type="area" width="100%" height="250px"/>
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
                            [
                                { id: 1, name: "Arya Clothing Store", address: "Tulsipur Chowk, Ghorahi, Dang", image: "assets/images/users/ana.jpg" },
                                { id: 2, name: "Smarty Shoes Store", address: "Traffic Chowk, Ghorahi, Dang", image: "assets/images/users/jack.jpg" },
                                { id: 3, name: "Arohi Botique", address: "Main Road, Lamahi, Dang", image: "assets/images/users/john.jpg" },
                                { id: 4, name: "Jagdamba Bastralaya", address: "Koilabas Road, Lamahi, Dang", image: "assets/images/users/jenny.jpg" }
                            ].map(item => {
                                return (
                                    <div className='new-store' key={item.id}>
                                        <div className='new-store-details'>
                                            <img src={item.image} alt="store-logo" />
                                            <div className='new-store-title-and-address'>
                                                <h2>{item.name}</h2>
                                                <p>{item.address}</p>
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
                    <TopProductsTable>
                        <thead>
                            <tr>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Total Sold</th>
                                <th>Product Availity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <img src="assets/images/nike1.png" alt="nike shoe" />
                                        <span>Sneakers Skate Shoe</span>
                                    </div>
                                </td>
                                <td>$100</td>
                                <td>9500</td>
                                <td><p>In stock</p></td>
                                <td>
                                    <i className="ri-more-2-fill"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <img src="assets/images/nike2.png" alt="nike shoe" />
                                        <span>Running Nike Shoe</span>
                                    </div>
                                </td>
                                <td>$10</td>
                                <td>7400</td>
                                <td><p>In stock</p></td>
                                <td>
                                    <i className="ri-more-2-fill"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <img src="assets/images/shoe.jpg" alt="converse-shoe" />
                                        <span>Converse Shoe</span>
                                    </div>
                                </td>
                                <td>$15</td>
                                <td>4500</td>
                                <td><p className='out-of-stock'>Out of stock</p></td>
                                <td>
                                    <i className="ri-more-2-fill"></i>
                                </td>
                            </tr>
                        </tbody>
                    </TopProductsTable>
                </TopProductsListCard>
                <CustomersCard>
                    <div className='transaction-header'>
                        <div className='transaction-title'>
                            <h2>Latest Transaction</h2>
                            <p>Transaction by customers</p>
                        </div>
                        <div className='transaction-header-action'>
                            <i className="ri-arrow-right-up-line"></i>
                        </div>
                    </div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Customers</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <img src="assets/images/users/ana.jpg" alt="anna" />
                                        <span>Ana</span>
                                    </div>
                                </td>
                                <td>12/12/2021</td>
                                <td>$100</td>
                                <td><p className='received'>Received</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <img src="assets/images/users/jack.jpg" alt="jack" />
                                        <span>Jack</span>
                                    </div>
                                </td>
                                <td>12/12/2021</td>
                                <td>$100</td>
                                <td><p className='received'>Received</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <img src="assets/images/users/john.jpg" alt="john" />
                                        <span>John</span>
                                    </div>
                                </td>
                                <td>12/12/2021</td>
                                <td>$100</td>
                                <td><p className='received'>Received</p></td>
                            </tr>
                        </tbody>
                    </Table>
                </CustomersCard>
            </CustomersProductsCardsContainer>
        </HomeContainer>
    )
}

export default HomePage