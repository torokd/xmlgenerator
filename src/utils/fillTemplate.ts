export const fillTemplate = (template: string, values: Record<string, any>): string => {
  let result = template

  Object.entries(values).forEach(([key, value]) => {
    // minden előfordulást lecserélünk, nem csak az elsőt
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g')
    result = result.replace(regex, String(value))
  })

  return result
}