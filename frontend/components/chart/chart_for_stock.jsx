import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';
import { connect } from 'react-redux'
import { updateChartDisplay } from '../../actions/chart_actions'

class DrawChart extends React.Component {


  render() {


    if (Object.keys(this.props.data).length === 0) {
      return null
    }
    const dataMin = function (data) {
      let min = Math.pow(10, 20)
      data.forEach(dataEl => {
        if (dataEl.close < min) {
          min = dataEl.close
        }
      });
      return min
    };

    const dataMax = function (data) {
      let max = 0
      data.forEach(dataEl => {
        if (dataEl.close > max) {
          max = dataEl.close
        }
      });
      return max
    };
    const first = this.props.data[0].close
    const last = this.props.data[this.props.data.length - 1].close
    debugger
    const stroke = (this.props.color === 'green') ? "#61ca9d" : "#e3603f";
    const range = dataMin(this.props.data) + dataMax(this.props.data)
    const min = dataMin(this.props.data) - (0.005 * range)
    const max = dataMax(this.props.data) + (0.005 * range)
    const update = this.props.updateChartDisplay
    return (
      < LineChart width={710} height={300} data={this.props.data} >
        <Line type="monotone" dataKey="close" stroke={stroke} dot={false} />
        <XAxis dataKey="date" hide={true} />
        <YAxis domain={[min, max]} hide={true} />
          <Tooltip
          contentStyle={{ backgroundColor: 'transparent', border: '0' }}

          formatter={(value) => {
            let returnVal = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(value);
            // update(value);
            return <span className="chart-time" >{returnVal}</span>
          }}
          labelFormatter={(value) => {
            if (value.includes("-")) {
              return <span className="chart-time-value">{value}</span>
            } else {
              value = value.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
              return (<span className="chart-time-value">{value}</span>)
            }
          }
          }
          isAnimationActive={false} position={{ y: 270 }} offset={-60}
        />
      </LineChart >)


  }

}
const mstop = ({ }) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateChartDisplay: (val) => dispatch(updateChartDisplay(val))
  }
}


export default connect(mstop, mapDispatchToProps)(DrawChart)