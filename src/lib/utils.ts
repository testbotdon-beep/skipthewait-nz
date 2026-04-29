import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNZD(cents: number): string {
  return new Intl.NumberFormat('en-NZ', {
    style: 'currency',
    currency: 'NZD',
    minimumFractionDigits: 0,
  }).format(cents / 100)
}

export function toNZDigits(phone: string | number): string {
  const digits = String(phone).replace(/\D/g, '')
  if (digits.startsWith('64') && digits.length > 9) return digits.slice(2)
  return digits.replace(/^0/, '')
}

export function formatPhone(phone: string | number): string {
  const local = toNZDigits(phone)
  if (local.length >= 8 && local.startsWith('2')) {
    return `0${local.slice(0, 2)} ${local.slice(2, 5)} ${local.slice(5)}`
  }
  return String(phone)
}

export function timeRemaining(deadlineIso: string): {
  expired: boolean
  hours: number
  minutes: number
  label: string
} {
  const now = Date.now()
  const deadline = new Date(deadlineIso).getTime()
  const diff = deadline - now
  if (diff <= 0) return { expired: true, hours: 0, minutes: 0, label: 'Expired' }
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  return {
    expired: false,
    hours,
    minutes,
    label: hours > 0 ? `${hours}h ${minutes}m left` : `${minutes}m left`,
  }
}
