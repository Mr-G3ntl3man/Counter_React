import React, {useReducer} from 'react';
import {restoreState} from "./localStorage/localStorage";
import {reducer} from "./reducer/reducer";
import {HashRouter} from "react-router-dom";
import {Routes} from "./Router/Routes";

export type  StateType = {
   disabled: boolean
   error: boolean
   installedSettings: {
      maxCounterValue: number
      startCounterValue: number
   }
   counterSettings: {
      initialValue: number
      maxValue: number
   }
}

type RestoreStateType = {
   maxCounterValue: number
   startCounterValue: number
}


function App() {

   const dateFromLocalStorage = restoreState<RestoreStateType>('Counter_Settings', {
      maxCounterValue: 0,
      startCounterValue: 0,
   })

   const [state, dispatch] = useReducer(reducer, {
      error: false,
      disabled: true,
      installedSettings: dateFromLocalStorage,
      counterSettings: {initialValue: 0, maxValue: 0}
   })


   return (
      <HashRouter>
         <Routes state={state} dispatch={dispatch}/>
      </HashRouter>
   )
}

export default App;
