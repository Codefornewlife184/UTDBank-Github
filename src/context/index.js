
import React, { useReducer } from 'react'
import { accountInitialState } from './account/accountInitialState'
import { accountReducer } from './account/accountReducer'
import { userInitialState } from './user/userInitialState'
import { userReducer } from './user/userReducer'

const Context = React.createContext()

Context.displayName = 'Context'

export const useContext = () => React.useContext(Context)

export const ContextProvider = ({ children }) => {
  const [userState, dispatchUser] = useReducer(userReducer, userInitialState)

  const [accountState, dispatchAccount] = useReducer(
    accountReducer,
    accountInitialState,
  )

  return (
    <Context.Provider
      value={{ userState, dispatchUser, accountState, dispatchAccount }}
    >
      {children}
    </Context.Provider>
  )
}

