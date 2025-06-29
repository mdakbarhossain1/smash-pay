export function formatIsoDateToReadable(isoDate: string): string {
  const date = new Date(isoDate);

  const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
  const day = date.getDate().toString().padStart(2, '0');
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
  const year = date.getFullYear(); // 2025

  return `${dayName}, ${day}, ${month} ${year}`;
}
