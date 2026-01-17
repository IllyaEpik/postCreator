import { ReactNode } from "react"

export interface IProbs{
    doCloseOnClickOutside: false | true
    isOpen: boolean
    className:string
    children:ReactNode
    container:ReactNode
    setIsOpen:(isOpen:boolean) => void
}