import { TransactionCategory } from '../types/transaction';

const keywords: Record<TransactionCategory, string[]> = {
  education: ['school', 'university', 'college', 'tuition', 'book', 'course', 'education'],
  entertainment: ['netflix', 'spotify', 'movie', 'game', 'theatre', 'entertainment'],
  food: ['restaurant', 'grocery', 'food', 'cafe', 'coffee', 'swiggy', 'zomato'],
  healthcare: ['hospital', 'doctor', 'pharmacy', 'medical', 'health', 'clinic'],
  housing: ['rent', 'mortgage', 'maintenance', 'property'],
  shopping: ['amazon', 'walmart', 'target', 'store', 'shop', 'retail', 'mall'],
  transportation: ['uber', 'lyft', 'gas', 'fuel', 'parking', 'transit', 'metro', 'bus', 'taxi'],
  utilities: ['electricity', 'water', 'internet', 'phone', 'gas', 'bill'],
  income: ['salary', 'interest', 'dividend', 'credit', 'deposit'],
  transfer: ['@okaxis1'],
  friend: ['sachin','sumit'],
  other: [],
};

export function categorizeTransaction(description: string, isDeposit: boolean): TransactionCategory {
  if (!description) {
    return 'other';
  }

  // If it's a deposit, first check if it matches income keywords
  if (isDeposit) {
    const incomeKeywords = keywords.income;
    if (incomeKeywords.some(keyword => description.toLowerCase().includes(keyword))) {
      return 'income';
    }
  }

  const normalizedDescription = description.toLowerCase();
  console.log(normalizedDescription);
  for (const [category, categoryKeywords] of Object.entries(keywords)) {
    console.log(categoryKeywords);
    if (category === 'income') continue; // Skip income category for non-deposits
    console.log(categoryKeywords.some(keyword => normalizedDescription.includes(keyword)))
    if (categoryKeywords.some(keyword => normalizedDescription.includes(keyword))) {
      return category as TransactionCategory;
    }
  }
  
  return 'other';
}