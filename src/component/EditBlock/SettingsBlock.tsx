import React from "react";
import s from "./settingsBlock.module.css";
import {UniversalInput} from "../UniversalInput/UniversalInput";
import {UniversalButton} from "../UniversalButton/UniversalButton";
import {StateType} from "../../App";
import {ACTION_TYPE, ActionType} from "../../reducer/reducer";

type SettingsBlockType = {
   state: StateType
   dispatch: (action: ActionType) => void
}

export const SettingsBlock: React.FC<SettingsBlockType> = ({state, dispatch}) => {

   const onChangeHandlerMaxValue = (value: number) => {
      dispatch({type: ACTION_TYPE.SET_MAX_VALUE, maxCounterValue: value});

      (value < state.installedSettings.startCounterValue ||
         value < 0 || value === state.installedSettings.startCounterValue ||
         state.installedSettings.startCounterValue < 0)
         ? dispatch({type: ACTION_TYPE.THROW_ERROR, error: true})
         : dispatch({type: ACTION_TYPE.THROW_ERROR, error: false})
   }

   const onChangeHandlerStartValue = (value: number) => {
      dispatch({type: ACTION_TYPE.SET_START_VALUE, startCounterValue: value});

      (value > state.installedSettings.maxCounterValue ||
         value < 0 || value === state.installedSettings.maxCounterValue)
         ? dispatch({type: ACTION_TYPE.THROW_ERROR, error: true})
         : dispatch({type: ACTION_TYPE.THROW_ERROR, error: false})
   }

   const onClickSettingsHandler = () => {
      if (state.installedSettings.maxCounterValue === 0 ||
         state.installedSettings.maxCounterValue === 0) {
         dispatch({type: ACTION_TYPE.THROW_ERROR, error: true})
      } else {
         dispatch({type: ACTION_TYPE.THROW_ERROR, error: false})
         dispatch({type: ACTION_TYPE.APPLYING_SETTINGS, disabled: false})
         dispatch({type: ACTION_TYPE.SAVE_IN_LOCAL_STORAGE})
      }
   }

   return (
      <div className={s.settingsBlock}>
         <div className={s.settingsBlockInput}>
            <UniversalInput
               className={s.settingsBlockInputMax}
               spanText={'Max Counter Value'}
               initialValue={state.installedSettings.maxCounterValue}
               error={state.error}
               onChange={onChangeHandlerMaxValue}/>

            <UniversalInput
               className={s.settingsBlockInputStart}
               spanText={'Start Counter Value'}
               initialValue={state.installedSettings.startCounterValue}
               error={state.error}
               onChange={onChangeHandlerStartValue}/>
         </div>

         <div className={s.settingsBlockBtn}>
            <UniversalButton
               navLink={true}
               linkPath={'/Preview_Block'}
               previousLinkPath={'/Settings_Block'}
               disabledValue={state.installedSettings.maxCounterValue}
               count={state.installedSettings.startCounterValue}
               disabled={state.error}
               commonBtn={true}
               name={'set settings'}
               callBack={onClickSettingsHandler}/>
         </div>

      </div>
   )
}


