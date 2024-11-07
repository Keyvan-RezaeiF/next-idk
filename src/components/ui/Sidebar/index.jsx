'use client'

import { SidebarProvider } from './context'

const Sidebar = (props) => {
  const {
    children,
    isOpen,
    setIsOpen,
    animate
  } = props

  return (
    <SidebarProvider
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      animate={animate}
    >
      {children}
    </SidebarProvider>
  )
}

export default Sidebar
