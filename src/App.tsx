import React, {useReducer} from 'react';
import s from './App.module.css';
import {restoreState} from "./localStorage/localStorage";
import {SettingsBlock} from "./component/EditBlock/SettingsBlock";
import {PreviewBlock} from "./component/PreviewBlock/PreviewBlock";
import {reducer} from "./reducer/reducer";
import {BrowserRouter, Redirect, Route} from "react-router-dom";

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
      <BrowserRouter>
         <div className={s.app}>
            <Route path='/' exact render={() => <Redirect to={'/Settings_Block'}/>}/>
            <Route path='/Settings_Block' render={() => <SettingsBlock state={state} dispatch={dispatch}/>}/>
            <Route path='/Preview_Block' render={() => <PreviewBlock state={state} dispatch={dispatch}/>}/>
         </div>
      </BrowserRouter>
   )
}

export default App;
