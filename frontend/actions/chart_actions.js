export const RECEIVE_CHART_DATA = "RECEIVE_CHART_DATA"

export const updateChartDisplay = (value) =>{
  return{
    type: RECEIVE_CHART_DATA,
    value
  }
}