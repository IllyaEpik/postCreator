import React, { useEffect, useRef } from "react";
import styles from "./modal.module.css";
import { IProbs } from "./modalTypes";
export function Modal(probs:IProbs) {
    const {
        isOpen,
        setIsOpen,
        className,
        doCloseOnClickOutside,
        container,
        children
    } = probs
    const modal = useRef(null)

    useEffect(()=>{
        if (!doCloseOnClickOutside) return
        function closeModal(event:MouseEvent) { 
            if (event.target===container) return
            if (event.target===modal.current) return
            setIsOpen(false)
        }
        document.body.addEventListener("click", closeModal)
 
        return () => {
            document.body.removeEventListener("click",closeModal)
        }
    })
    if (!isOpen) return null 
    return ( 
        <div ref={modal} className={`${className} ${styles.modal}`}>
            {children}
        </div>
    )
}