import React from "react";
import s from './count.module.css';

type CountType = {
   count: number
   maxValue: number
   startValue: number
   showText: boolean
}

export const Count: React.FC<CountType> = ({count, maxValue, startValue, showText}) => {
   const ClassNameForNum = `${s.count} ${(count === maxValue || count === startValue) ? s.countFinal : ''}`
   const finalClassName = showText ? s.countText : ClassNameForNum
   const textOrValue = showText ? `Enter values and press 'SET SETTINGS'` : count

   return (
      <div className={finalClassName}>{textOrValue}</div>
   )
}