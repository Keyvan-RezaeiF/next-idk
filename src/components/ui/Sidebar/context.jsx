import React, { useState, createContext, useContext } from 'react'

const SidebarContext = createContext(undefined)

export const useSidebar = () => {
  const context = useContext(SidebarContext)

  if (!context) throw new Error('useSidebar must be used within a SidebarProvider')

  return context
}

export const SidebarProvider = ({
  children,
  isOpen: isOpenProp,
  setIsOpen: setIsOpenProp,
  animate = true
}) => {
  const [isOpenState, setIsOpenState] = useState(false)
  const isOpen = isOpenProp !== undefined ? isOpenProp : isOpenState
  const setIsOpen = setIsOpenProp !== undefined ? setIsOpenProp : setIsOpenState

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  )
}