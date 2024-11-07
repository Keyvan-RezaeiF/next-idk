'use client'

import React, { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import SidebarUi from './ui/Sidebar'
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt } from '@tabler/icons-react'
import Image from 'next/image'
import SidebarBody from './ui/Sidebar/SidebarBody'
import SidebarLink from './ui/Sidebar/SidebarLink'
import SidebarLogo from './ui/Sidebar/Logo'
import SidebarLogoIcon from './ui/Sidebar/LogoIcon'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const activeLocale = useLocale()
  const t = useTranslations('sidebar')
  const links = [
    {
      label: t('dashboard'),
      href: `/${activeLocale}/dashboard`,
      icon: (
        <IconBrandTabler className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
    {
      label: t('profile'),
      href: `/${activeLocale}/profile`,
      icon: (
        <IconUserBolt className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
    {
      label: t('settings'),
      href: `/${activeLocale}/settings`,
      icon: (
        <IconSettings className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
    {
      label: t('logout'),
      href: '#',
      icon: (
        <IconArrowLeft className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
  ]

  return (
    <SidebarUi isOpen={isOpen} setIsOpen={setIsOpen}>
      <SidebarBody className='justify-between gap-10'>
        <div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
          {isOpen ? <SidebarLogo /> : <SidebarLogoIcon />}
          <div className='mt-8 flex flex-col gap-2'>
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: t('username'),
              href: '#',
              icon: (
                <Image
                  src='https://assets.aceternity.com/manu.png'
                  className='h-7 w-7 flex-shrink-0 rounded-full'
                  width={50}
                  height={50}
                  alt='Avatar'
                />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </SidebarUi>
  )
}