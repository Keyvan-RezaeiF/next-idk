import { IconMenu2, IconX } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSidebar } from './context'
import { cn } from '@/utils'

const MobileSidebar = ({
  className,
  children,
  ...props
}) => {
  const { isOpen, setIsOpen } = useSidebar()

  return (
    <div
      className={cn(
        'h-10 px-4 py-4 flex flex-row md:hidden  items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full'
      )}
      {...props}>
      <div className='flex justify-end z-20 w-full'>
        <IconMenu2
          className='text-neutral-800 dark:text-neutral-200'
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className={cn(
              'fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between',
              className
            )}>
            <div
              className='absolute ltr:right-10 rtl:left-10 top-10 z-50 text-neutral-800 dark:text-neutral-200'
              onClick={() => setIsOpen(!isOpen)}
            >
              <IconX />
            </div>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileSidebar