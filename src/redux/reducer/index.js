export default function reducef(state, action) {
  switch (action.type) {

    case 'LOGIN': {
      return {
        ...state,
        log: action.payload.log,
        e: action.payload.e
      }
    }

    case 'INSERT_USER': {
      return {
        ...state,
        user: action.payload.user
      }
    }

    default:
      return state
  }
}