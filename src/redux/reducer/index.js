export default function reducef(state, action) {
  switch (action.type) {

    case 'LOGIN': {
      return {
        ...state,
        log: action.payload.log,
        e: action.payload.e
      }
    }

    default:
      return state
  }
}