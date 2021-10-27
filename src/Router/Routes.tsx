import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import s from "../App.module.css";
import {SettingsBlock} from "../component/EditBlock/SettingsBlock";
import {PreviewBlock} from "../component/PreviewBlock/PreviewBlock";
import {StateType} from "../App";
import {ActionType} from "../reducer/reducer";


export const PATH = {
   Settings_Block: '/Settings_Block',
   Preview_Block: '/Preview_Block',
}

type RoutesType = {
   state: StateType
   dispatch: (action: ActionType) => void
}

export const Routes: React.FC<RoutesType> = ({state, dispatch}) => {
   return (
      <>
         <Switch>
            <div className={s.app}>
               <Route path='/' exact render={() => <Redirect to={PATH.Settings_Block}/>}/>

               <Route path={PATH.Settings_Block} render={() => <SettingsBlock state={state} dispatch={dispatch}/>}/>
               <Route path={PATH.Preview_Block} render={() => <PreviewBlock state={state} dispatch={dispatch}/>}/>
            </div>
         </Switch>
      </>
   )
}
