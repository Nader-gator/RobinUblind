import React from 'react'
import { connect } from 'react-redux'
import Header from '../header/header_container'
import {fetchTransactionsMain} from '../../actions/transaction_actions'
import Loading from '../loading_page/full_page_load'

class History extends React.Component {

  componentWillMount(){
    if (this.props.transactions.length === 0){
      this.props.fetchTransactionsMain(this.props.user.id, "1y")
    }
  }

  mappedTransactions(transactions){
    return transactions.map((el,i)=>{
      if (el.category === 'buy-in'){
        return []
      }
      return(
        <li key={i}>
          <span style={{ color: '#f46242' }}> Category:</span> {el.category}, <span style={{ color: '#6a8aed' }}> Amount:</span> {el.amount}, <span style={{ color: '#6aed9a' }}>Price: </span>${el.price}, <span style={{color: '#ede86a'}}>Date:</span> {el.date.slice(0,10)}
        </li>
      )
    })
  }

  contentClosed(){
    return Object.keys(this.props.transactions[1][1].closed).map((code,i)=>{
      return (
        <div key={`closed${i}`}>
          <h1>{code}</h1>
          <ul>
            {this.mappedTransactions(this.props.transactions[1][1].closed[code].data)}
          </ul>
        </div>
      )
    })
  }
  contentOpen(){
    return Object.keys(this.props.transactions[1][1].open).map((code,i)=>{
      return (
        <div key={`open${i}`}>
          <h1>{code}</h1>
          <ul>
            {this.mappedTransactions(this.props.transactions[1][1].open[code].data)}
          </ul>
          <div>
            <h2>Total holding: {this.props.transactions[1][1].open[code].stats.holding}</h2>
          </div>
        </div>
      )
    })

  }

  render() {
    if (this.props.loading){
      return (
        <Loading/>
      )
    } else {

      return(
        <div>
        <Header/>
        <div className="main-body-history">
          <h1 className="trans-history">Transaction History</h1>
          <div className='line-div'></div>
            <ul>
              <h1>Open Positions</h1>
              {this.contentOpen()}
            </ul>
          <div className='line-div'></div>
          <ul>
            <h1>Closed Positions:</h1>
            {this.contentClosed()}
          </ul>
        </div>
      </div>
    )
  }
  }
}

const mstop = ({ entities:{portfolio,user},ui:{loading:{transactionLoading}}}) => {
  return {
    transactions: portfolio,
    user,
    loading: transactionLoading
  }
}
const mdtop = (dispatch) => {
  return {
    fetchTransactionsMain: (id,date)=> dispatch(fetchTransactionsMain(id,date))
  }
}

export default connect(mstop,mdtop)(History)
