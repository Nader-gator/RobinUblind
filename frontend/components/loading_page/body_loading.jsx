import React from 'react'



export default () => {
  return (
    <div className="entire-main-body loading-page">
      <div >

        <div className="running-man">
          <img className="runningmanlogo" src={window.runnungMan} />
          <img className="loadingmainlogo" src={window.logoURL} />
        </div>
        <div className="chart-loading">
          <h1>LOADING</h1>
        </div>
      </div>
    </div>
  )
}
