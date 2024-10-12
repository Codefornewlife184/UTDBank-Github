import { types } from '../types'
import { accountInitialState } from './accountInitialState'

export const accountReducer = (state = accountInitialState, action) => {
  if (action.type === types.SET_ACCOUNT) {
    return {
      ...state,
      account: action.payload,
    }
  }
}
