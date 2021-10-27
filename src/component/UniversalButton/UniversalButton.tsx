import React from "react";
import {NavLink} from "react-router-dom";
import s from './btn.module.css'


type PropsType = {
   navLink: boolean
   commonBtn: boolean
   disabled: boolean
   name: string
   previousLinkPath?: string
   linkPath?: string
   disabledValue?: number
   count?: number
   callBack?: () => void
   className?: string
}

export const UniversalButton: React.FC<PropsType> = (
   {
      callBack, name, count, disabled,
      disabledValue, commonBtn, navLink,
      linkPath, previousLinkPath, className, ...props
   }) => {

   const onClickHandler = () => {
      if (callBack) callBack()
   }

   const defineNavLink = ((count === 0 && disabledValue === 0) || disabled) ? `${previousLinkPath}` : `${linkPath}`
   const defineButton = commonBtn ? disabled : disabled || disabledValue === count
   const finalBtnClassName = defineButton ? `${s.btnDisabled} ${s.btn}` : s.btn

   return (
      <>
         {navLink
            ? <NavLink to={defineNavLink}>
               <button disabled={defineButton}
                       onClick={onClickHandler}
                       className={` ${finalBtnClassName} ${className}`}>
                  <span className={`${s.line} ${s.lineTop}`}> </span>
                  <span className={`${s.line} ${s.lineLeft}`}> </span>
                  <span className={`${s.line} ${s.lineRight}`}> </span>
                  <span className={`${s.line} ${s.lineBottom}`}> </span>
                  {name}
               </button>
            </NavLink>
            : <button disabled={defineButton}
                      onClick={onClickHandler}
                      className={`${className} ${finalBtnClassName}`}>
               <span className={`${s.line} ${s.lineTop}`}> </span>
               <span className={`${s.line} ${s.lineLeft}`}> </span>
               <span className={`${s.line} ${s.lineRight}`}> </span>
               <span className={`${s.line} ${s.lineBottom}`}> </span>
               {name}
            </button>}
      </>
   )
}