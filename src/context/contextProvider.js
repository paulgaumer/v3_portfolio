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
        tag: {
          bg: "bg-yellowPrimary",
          text: "text-yellow-900",
        },
      },
      red: {
        bg: "bg-red-400",
        tag: {
          bg: "bg-red-100",
          text: "text-red-800",
        },
      },
      blue: {
        bg: "bg-paulBlue",
        tag: {
          bg: "bg-blue-100",
          text: "text-blue-800",
        },
      },
      green: {
        bg: "bg-green-300",
        tag: {
          bg: "bg-green-100",
          text: "text-green-800",
        },
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
