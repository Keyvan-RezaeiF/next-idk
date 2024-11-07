import { useTranslations } from 'next-intl'

export default function Settings() {
  const t = useTranslations('settings')

  return (
    <h1>{t('title')}</h1>
  )
}
