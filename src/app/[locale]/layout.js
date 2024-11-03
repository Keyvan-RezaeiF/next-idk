import { Sidebar } from "@/components/Sidebar";
import { cn } from "@/utils";
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from "next-intl/server";
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

export default async function LocaleLayout({ children, params: {locale} }) {
  const messages = await getMessages();
  console.log(locale);
  
  const dir = locale === 'fa' ? 'rtl' : 'ltr'
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <div className={cn(
          "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-screen"
        )}>
          <NextIntlClientProvider messages={messages}>
          <>
              <Sidebar />
              <div className="flex-1 bg-[#171717]">
                {children}
              </div>
            </>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
