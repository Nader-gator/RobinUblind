
import React from 'react'

import ChartConfig from './ChartConfig'

import { Chart } from 'react-charts'

class Story extends React.Component {
  render() {
    return (
      <ChartConfig>
        {({ data }) => (
          <Chart
            data={data}
            axes={[
              { primary: true, position: 'bottom', type: 'time' },
              { position: 'left', type: 'linear' },
            ]}
            primaryCursor
            secondaryCursor
            tooltip
          />
        )}
      </ChartConfig>
    )
  }
}

export default () => <Story />