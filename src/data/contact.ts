/** WhatsApp number (country code, digits only). */
export const WHATSAPP_NUMBER = '77780565844'

export const INSTAGRAM_URL = 'https://www.instagram.com/bloom_flowers_shym/'
export const INSTAGRAM_HANDLE = '@bloom_flowers_shym'
export const CITY = 'Шымкент'
export const ADDRESS = 'Нурсат 2 19/2'

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
