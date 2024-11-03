'use client'
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Dashboard() {
  const t = useTranslations('HomePage');
  return (
    <h1>Dashboard Page {t('title')}</h1>
  );
}
