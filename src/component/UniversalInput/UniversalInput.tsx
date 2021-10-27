import React from "react";
import s from './input.module.css'
import {InputNumber} from 'antd';

type UniversalInputType = {
   error: boolean
   initialValue: number
   onChange: (value: number) => void
   spanText: string
   className?: string
}

export const UniversalInput: React.FC<UniversalInputType> = (
   {error, initialValue, onChange, spanText, className}) => {

   const finalClassName = error ? `${s.errorInput} ${s.defaultStyle}` : s.defaultStyle

   const onChangeHandler = (value: number) => onChange(value)


   return (
      <div className={`${s.inputWrap} ${className}`}>
         <span className={s.inputDesc}>{spanText}</span>
         <InputNumber className={finalClassName} type="number" value={initialValue} onChange={onChangeHandler}/>
      </div>
   )
}