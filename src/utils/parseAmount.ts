export function parseAmount(value: string): number {
  if (!value || typeof value !== 'string') return 0;
  
  // Remove common currency symbols and commas
  const cleanValue = value.replace(/[₹,$,\s,]/g, '');
  const amount = parseFloat(cleanValue);
  
  return isNaN(amount) ? 0 : amount;
}