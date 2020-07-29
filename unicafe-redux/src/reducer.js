const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      let shallowCopyGood = {
        ...state,
        good: state.good+1
      }
      return shallowCopyGood
    case 'OK':
      let shallowCopyOk = {
        ...state,
        ok: state.ok+1
      }
      return shallowCopyOk
    case 'BAD':
      let shallowCopyBad = {
        ...state,
        bad: state.bad+1
      }
      return shallowCopyBad
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer