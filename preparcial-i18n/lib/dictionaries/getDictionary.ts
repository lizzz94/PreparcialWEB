export const getDictionary = async (lang: 'en' | 'es') => {
  try {
    if (!lang) {
      throw new Error("Idioma no definido")
    }
    const dict = await import(`../dictionaries/${lang}.json`)
    return dict.default
  } catch (error) {
    console.error("Error loading dictionary:", error)
    return null
  }
}