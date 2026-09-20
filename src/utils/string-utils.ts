export function formatDate(date: Date): string {
  return date.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

export function truncate(
  str: string,
  maxLength = 50,
): string {
  if (str.length <= maxLength) return str

  return str.slice(0, maxLength - 3) + '...'
}

export function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}