import React from 'react'
import { connect } from 'react-redux'
import Header from '../header/header_container'
import {fetchTransactions} from '../../actions/transaction_actions'
import Loading from '../loading_page/full_page_load'

class History extends React.Component {

  componentWillMount(){
    this.props.fetchTransactions(this.props.user.id, "now")
  }

  mappedTransactionsType(transactions){
    return transactions.map((el,i)=>{
      if (el.category === 'buy-in'){
        return []
      }
      return(
        <li key={i} className="history-header">
          {el.category}
        </li>
      )
    })
  }
  mappedTransactionsPrice(transactions){
    return transactions.map((el,i)=>{
      if (el.category === 'buy-in'){
        return []
      }
      return(
        <li key={i} className="history-header">
          {el.price}
        </li>
      )
    })
  }
  mappedTransactionsAmount(transactions){
    return transactions.map((el,i)=>{
      if (el.category === 'buy-in'){
        return []
      }
      return(
        <li key={i} className="history-header">
          {el.amount}
        </li>
      )
    })
  }
  mappedTransactionsDate(transactions){
    return transactions.map((el,i)=>{
      if (el.category === 'buy-in'){
        return []
      }
      return(
        <li key={i} className="history-header" style={{width: 100}}>
          {el.date.slice(0,10)}
        </li>
      )
    })
  }



  contentOpen(){
    return Object.keys(this.props.transactions.open).map((code,i)=>{
      return (
        <div key={`open${i}`} className='company-list'>
          <h1 style={{color: 'white'}}>{code}</h1>
          <div className='history-wrapper'>

            <ul className='history-header'>
              <li>Type</li>
              {this.mappedTransactionsType(this.props.transactions.open[code].data)}
            </ul>
            <ul className='history-header'>
              <li>Price</li>
              {this.mappedTransactionsPrice(this.props.transactions.open[code].data)}
            </ul>
            <ul className='history-header'>
              <li>Amount</li>
              {this.mappedTransactionsAmount(this.props.transactions.open[code].data)}
            </ul>
            <ul className='history-header'>
              <li style={{ width: 100 }}>Date</li>
              {this.mappedTransactionsDate(this.props.transactions.open[code].data)}
            </ul>
          </div>
          <div style={{marginLeft: 50}}>
            <h2>Total holding: {this.props.transactions.open[code].stats.holding}</h2>
          </div>
        </div>
      )
    })

  }

  contentClosed(){
    return Object.keys(this.props.transactions.closed).map((code,i)=>{
      return (
        <div key={`closed${i}`} className='company-list'>
          <h1 style={{color: 'white'}}>{code}</h1>
          <div className='history-wrapper'>

            <ul className='history-header'>
              <li>Type</li>
              {this.mappedTransactionsType(this.props.transactions.closed[code].data)}
            </ul>
            <ul className='history-header'>
              <li>Price</li>
              {this.mappedTransactionsPrice(this.props.transactions.closed[code].data)}
            </ul>
            <ul className='history-header'>
              <li>Amount</li>
              {this.mappedTransactionsAmount(this.props.transactions.closed[code].data)}
            </ul>
            <ul className='history-header'>
              <li style={{ width: 100 }}>Date</li>
              {this.mappedTransactionsDate(this.props.transactions.closed[code].data)}
            </ul>
          </div>
        </div>
      )
    })

  }

  render() {
    if (this.props.loading || this.props.transactions.length === 0){
      return (
        <Loading/>
      )
    } else {

      return(
        <div>
        <Header/>
        <div className="main-body-history">
          <h1 className="trans-history" style={{color: 'rgb(146, 177, 163)'}}>Transaction History</h1>
          <div>

          <div className='line-div'></div>
              <h1 style={{ marginLeft: 20}}>Open Positions</h1>
              <div className='stock-history-wrapper' style={{ marginLeft: 50 }}>
                {this.contentOpen()}
            </div>
          </div>
          <div className='line-div'></div>
            <div>

              <div className='line-div'></div>
              <h1 style={{ marginLeft: 20 }}>Closed Positions</h1>
              <div className='stock-history-wrapper' style={{ marginLeft: 50 }}>
                {this.contentClosed()}
              </div>
            </div>
        </div>
      </div>
    )
  }
  }
}

const mstop = ({ entities:{transactions,user},ui:{loading:{transactionLoading}}}) => {
  return {
    transactions,
    user,
    loading: transactionLoading
  }
}
const mdtop = (dispatch) => {
  return {
    fetchTransactions: (id,date)=> dispatch(fetchTransactions(id,date))
  }
}

export default connect(mstop,mdtop)(History)
