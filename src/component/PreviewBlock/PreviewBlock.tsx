import React from "react";
import s from "./previewBlock.module.css";
import {Count} from "../Count/Count";
import {UniversalButton} from "../UniversalButton/UniversalButton";
import {ACTION_TYPE, ActionType} from "../../reducer/reducer";
import {StateType} from "../../App";

type PreviewBlockType = {
   state: StateType
   dispatch: (action: ActionType) => void
}

export const PreviewBlock: React.FC<PreviewBlockType> = ({state, dispatch}) => {

   const reset = () => dispatch({type: ACTION_TYPE.RESET_VALUE})
   const incrementCount = () => dispatch({type: ACTION_TYPE.INCREMENT_VALUE})
   const decrementCount = () => dispatch({type: ACTION_TYPE.DECREMENT_VALUE})


   return (
      <div className={s.previewBlock}>

         <Count
            showText={state.disabled}
            maxValue={state.counterSettings.maxValue}
            startValue={state.installedSettings.startCounterValue}
            count={state.counterSettings.initialValue}/>

         <div className={s.btnWrap}>

            <UniversalButton
               navLink={false}
               commonBtn={false}
               disabled={state.disabled}
               disabledValue={state.counterSettings.maxValue}
               count={state.counterSettings.initialValue}
               name={'increment'}
               callBack={incrementCount}/>

            <UniversalButton
               navLink={false}
               commonBtn={false}
               disabled={state.disabled}
               disabledValue={state.installedSettings.startCounterValue}
               count={state.counterSettings.initialValue}
               name={'reset'}
               callBack={reset}/>

            <UniversalButton
               navLink={false}
               commonBtn={false}
               disabled={state.disabled}
               disabledValue={state.counterSettings.initialValue}
               count={state.installedSettings.startCounterValue}
               name={'decrement'}
               callBack={decrementCount}/>

            <UniversalButton
               navLink={true}
               linkPath={'/'}
               previousLinkPath={'/Preview_Block'}
               disabled={state.error}
               commonBtn={true}
               name={'set settings'}/>
         </div>
      </div>
   )
}