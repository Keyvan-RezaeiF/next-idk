import { useTranslations } from 'next-intl'

export default function Profile() {
  const t = useTranslations('profile')

  return (
    <h1>{t('title')}</h1>
  )
}
