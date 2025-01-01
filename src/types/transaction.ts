export interface Transaction {
  date: string;
  description: string;
  reference?: string;
  valueDate?: string;
  withdrawal?: number;
  deposit?: number;
  balance: number;
  category: TransactionCategory;
}

export type TransactionCategory =
  | 'education'
  | 'entertainment'
  | 'food'
  | 'healthcare'
  | 'housing'
  | 'shopping'
  | 'transportation'
  | 'utilities'
  | 'income'
  | 'transfer'
  | 'friend'
  | 'other';

export const categoryColors: Record<TransactionCategory, string> = {
    education: 'bg-green-100 text-green-800',
    entertainment: 'bg-orange-100 text-orange-800',
    food: 'bg-red-100 text-red-800',
    healthcare: 'bg-purple-100 text-purple-800',
    housing: 'bg-blue-100 text-blue-800',
    shopping: 'bg-pink-100 text-pink-800',
    transportation: 'bg-gray-100 text-gray-800',
    utilities: 'bg-brown-100 text-brown-800',
    income: 'bg-lime-100 text-lime-800',
    transfer: 'bg-cyan-100 text-cyan-800',
    friend: 'bg-yellow-100 text-yellow-800',
    other: 'bg-gray-200 text-gray-700',
  };
 
// Function to add color to a Transaction object
export function addCategoryColor(transaction: Transaction): Transaction & { color: string } {
  return {
    ...transaction,
    color: categoryColors[transaction.category],
  };
}  

export interface CategoryTotal {
  withdrawal: number;
  deposit: number;
  net: number;
}