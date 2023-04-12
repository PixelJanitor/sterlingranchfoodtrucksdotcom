export function dasherize(str: string): string {
  return str.replace(',', '').replace(/\s/g, '-').toLowerCase()
}
