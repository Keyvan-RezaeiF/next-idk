import { useTranslations } from 'next-intl'

export default function Dashboard() {
  const t = useTranslations('dashboard')

  return (
    <h1>{t('title')}</h1>
  )
}
