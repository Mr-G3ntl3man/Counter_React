import {StateType} from "../App";
import {saveState} from "../localStorage/localStorage";

export enum ACTION_TYPE {
   INCREMENT_VALUE = 'INCREMENT_VALUE',
   DECREMENT_VALUE = 'DECREMENT_VALUE',
   RESET_VALUE = 'RESET_VALUE',
   SET_MAX_VALUE = 'SET_MAX_VALUE',
   SET_START_VALUE = 'SET_START_VALUE',
   APPLYING_SETTINGS = 'APPLYING_SETTINGS',
   THROW_ERROR = 'THROW_ERROR',
   SAVE_IN_LOCAL_STORAGE = 'SAVE_IN_LOCAL_STORAGE'
}

type ActionTypeEnumType = {
   type: ACTION_TYPE.INCREMENT_VALUE | ACTION_TYPE.DECREMENT_VALUE | ACTION_TYPE.RESET_VALUE | ACTION_TYPE.SAVE_IN_LOCAL_STORAGE
}

type ActionTypeMaxValue = {
   type: ACTION_TYPE.SET_MAX_VALUE
   maxCounterValue: number
}

type ActionTypeStartValue = {
   type: ACTION_TYPE.SET_START_VALUE
   startCounterValue: number
}

type ActionTypeError = {
   type: ACTION_TYPE.THROW_ERROR
   error: boolean
}
type ActionTypeDisabled = {
   type: ACTION_TYPE.APPLYING_SETTINGS
   disabled: boolean
}

export type ActionType =
   ActionTypeEnumType
   | ActionTypeStartValue
   | ActionTypeMaxValue
   | ActionTypeDisabled
   | ActionTypeError


export const reducer = (state: StateType, action: ActionType): StateType => {

   switch (action.type) {
      case ACTION_TYPE.INCREMENT_VALUE :
         return {
            ...state, counterSettings: {
               initialValue: state.counterSettings.initialValue + 1,
               maxValue: state.counterSettings.maxValue
            }
         }

      case ACTION_TYPE.DECREMENT_VALUE:
         return {
            ...state, counterSettings: {
               initialValue: state.counterSettings.initialValue - 1,
               maxValue: state.counterSettings.maxValue
            }
         }

      case ACTION_TYPE.RESET_VALUE:
         return {
            ...state, counterSettings: {
               initialValue: state.installedSettings.startCounterValue,
               maxValue: state.counterSettings.maxValue
            }
         }

      case ACTION_TYPE.SET_MAX_VALUE:
         return {
            ...state, installedSettings: {
               maxCounterValue: action.maxCounterValue,
               startCounterValue: state.installedSettings.startCounterValue
            }
         }

      case ACTION_TYPE.SET_START_VALUE:
         return {
            ...state, installedSettings: {
               startCounterValue: action.startCounterValue,
               maxCounterValue: state.installedSettings.maxCounterValue
            }
         }

      case ACTION_TYPE.APPLYING_SETTINGS:
         return {
            ...state,
            disabled: action.disabled,
            counterSettings: {
               initialValue: state.installedSettings.startCounterValue,
               maxValue: state.installedSettings.maxCounterValue
            },
         }

      case ACTION_TYPE.SAVE_IN_LOCAL_STORAGE:
         saveState('Counter_Settings', state.installedSettings)
         break

      case ACTION_TYPE.THROW_ERROR:
         return {...state, error: action.error}

   }

   return state
}