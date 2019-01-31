import React from 'react'



export default () => {
  return (
    <div className="entire-main-body loading-page">
      <div >

        <div className="running-man">
          <img className="mainlogo" src={window.runnungMan} />
          <img id='mainlogo' className="mainlogo" src={window.logoURL} />
        </div>
        <div className="chart-loading">
        </div>
      </div>
    </div>
  )
}
