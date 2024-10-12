import { types } from '../types'

export const setAccountState = (account) => ({
  type: types.SET_ACCOUNT,
  payload: account,
})
