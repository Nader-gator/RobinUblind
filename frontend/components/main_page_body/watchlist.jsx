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
        <p>${(data[el].quote).toFixed(2)}</p>
      </Link>)
    })
  }

  return (
  <div id='watchlist' className="watch-list wsticky">
    <h2>
      {positions().length > 1 ? "Positions" : ""}
    </h2>
    {positions().length > 1 ? (<span></span>) : null}
    {positions().length > 1 ? (
      <ul className="buying-list first-buying-list">
        {positions()}
      </ul>) : null}
    {positions().length > 1 ? (<span className="optional-divider"></span>) : null}
    <h2>
      Watchlist
          </h2>
    <span></span>
    <ul>
      {mappedWatchlist()}
    </ul>
  </div>)
}