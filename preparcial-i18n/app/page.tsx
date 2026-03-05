import { getDictionary } from '../lib/dictionaries/getDictionary';

export default async function Page({
  params
}: {
  params: { lang: 'en' | 'es' }; // lang solo puede ser en o es
}) {

  const dict = await getDictionary(params.lang)

  if (!dict) {
    return <div>Error al cargar las traducciones.</div>
  }

  return (
    <main>
      <h1>{dict.welcome}</h1>
      <p>{dict.profile}</p>
    </main>
  )
}