import DesktopSidebar from './DesktopSidebar'
import MobileSidebar from './MobileSidebar'

const SidebarBody = (props) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props)} />
    </>
  )
}

export default SidebarBody