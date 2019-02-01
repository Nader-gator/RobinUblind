import { RECEIVE_CHART_DATA } from '../../actions/chart_actions'


export default (state = [],action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_CHART_DATA:
      return action.value
    default:
      return state
  }
}