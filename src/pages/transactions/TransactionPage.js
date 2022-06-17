import React from 'react'
import {
  TransactionsContainer,
  TopTransactionsContainer,
  TotalTransactionsCard,
  SellerTransactionsCard,
  BottomTransactionsContainer,
  TransactionsCard,
  CustomerTransactionsCard
} from './TransactionStyle'
import { AChart, Table } from '../../components/styles/Styles';

const option = {
  series: [{
    name: 'Transactions',
    data: [12000, 14529, 7343, 15000, 9034, 17000]
  }],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  chart: {
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
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  yaxis: {
    labels: {
      formatter: (val) => (val / 1000) + "k",
    }
  },
  markers: {
    size: 0
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      gradientToColors: false,
      opacityFrom: 0.8,
      opacityTo: 0.2,
      stops: [0, 90, 100]
    } 
  },
  grid: {
    show: false,
  },
}

const s_option = {
  series: [{
    name: 'Transactions',
    data: [9000, 4529, 2343, 8000, 5034, 3000]
  }],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  chart: {
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
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  yaxis: {
    show: false,
  },
  markers: {
    size: 0
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      gradientToColors: false,
      opacityFrom: 0.8,
      opacityTo: 0.2,
      stops: [0, 90, 100]
    } 
  },
  grid: {
    show: false,
  },
}

const c_option = {
  series: [{
    name: 'Transactions',
    data: [500, 1429, 743, 200, 1034, 660, 1100]
  }],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  chart: {
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
  xaxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
  yaxis: {
    show: false,
  },
  markers: {
    size: 0
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      gradientToColors: false,
      opacityFrom: 0.8,
      opacityTo: 0.2,
      stops: [0, 90, 100]
    }
  },
  grid: {
    show: false,
  },
}

const TransactionPage = () => {
  return (
    <TransactionsContainer>
      <TopTransactionsContainer>
        <TotalTransactionsCard>
          <h3>Total Transactions (last six months)</h3>
          <AChart options={option} series={option.series} type="area" width="100%" height="250px" />
        </TotalTransactionsCard>
        <SellerTransactionsCard>
          <h3>Seller Transactions(last six months)</h3>
          <AChart options={s_option} series={s_option.series} type="area" width="100%" height="250px" />
        </SellerTransactionsCard>
      </TopTransactionsContainer>
      <BottomTransactionsContainer>
        <TransactionsCard>
          <h3>Transactions</h3>
          

        </TransactionsCard>
        <CustomerTransactionsCard>
          <h3>Customer Transactions (last six months)</h3>
          <AChart options={c_option} series={c_option.series} type="area" width="100%" height="250px" />
        </CustomerTransactionsCard>
      </BottomTransactionsContainer>
    </TransactionsContainer>
  )
}

export default TransactionPage