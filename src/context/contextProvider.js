import React, { useReducer } from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case "changeTheme":
      return { ...state, themeColor: action.payload }
    default:
      throw new Error()
  }
}

const GlobalContextProvider = ({ children }) => {
  const initialState = {
    themeColor: "yellow",
    themes: {
      yellow: {
        bg: "bg-yellowSecondary",
        text: "text-yellowSecondary",
      },
      red: {
        bg: "bg-red-400",
        text: "text-red-400",
      },
      teal: {
        bg: "bg-teal-300",
        text: "text-teal-300",
      },
    },
  }

  // The "state" here matches the initialState, until it is changed by the result of the reducer
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
