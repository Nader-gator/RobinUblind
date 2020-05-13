import React from 'react'
import {Link} from 'react-router-dom'
import Chart from '../chart/mini_chart'

export default ({data,transactions,mappedWatchlist}) => {


  const positions = () => {
    if (transactions[1] === undefined) {
      return []
    }
    return Object.keys(transactions[1][1].open).map((el, idx) => {
      if (data[el] == undefined) {
        return null
      }
      return (<Link key={idx} to={el}>
        <h3>{el}</h3>
        <div>
          <Chart data={data[el]} />
        </div>
          <p>${data[el].quote ? (data[el].quote).toFixed(2) : 0 }</p>
      </Link>)
    })
  }
  const positionList = positions()
  return (
  <div id='watchlist' className="watch-list wsticky">
    <aside className="inner-container">
    <h2>
      {positionList.length > 0 ? "Positions" : ""}
    </h2>
    {positionList.length > 0 ? (<span></span>) : null}
    {positionList.length > 0 ? (
      <ul className="buying-list first-buying-list">
        {positions()}
      </ul>) : null}
    {positionList.length > 0 ? (<span className="optional-divider"></span>) : null}
    <h2>
      Watchlist
          </h2>
    <span></span>
    <ul>
      {mappedWatchlist}
    </ul>
      </aside>
  </div>)
}
