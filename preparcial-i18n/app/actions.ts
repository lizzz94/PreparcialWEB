"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function setLanguage(lang: string) {
  const cookieStore = await cookies()
  cookieStore.set("NEXT_LOCALE", lang, {
    maxAge: 60 * 60 * 24 * 365, // 1 año
    path: "/",
  })
  redirect(`/${lang}`)
}