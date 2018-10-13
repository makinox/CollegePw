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

    case 'INSERT_SUBJECTS': {
      return {
        ...state,
        subject: action.payload.subject
      }
    }

    default:
      return state
  }
}