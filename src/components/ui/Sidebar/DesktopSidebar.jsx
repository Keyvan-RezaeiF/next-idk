import { motion } from 'framer-motion'
import { useSidebar } from './context'
import { cn } from '@/utils'

const DesktopSidebar = ({
  className,
  children,
  ...props
}) => {
  const { isOpen, setIsOpen, animate } = useSidebar()

  return (
    <motion.div
      className={cn(
        'h-full px-4 py-4 hidden  md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0',
        className
      )}
      animate={{
        width: animate ? (isOpen ? '300px' : '60px') : '300px',
      }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      {...props}>
      {children}
    </motion.div>
  )
}

export default DesktopSidebar