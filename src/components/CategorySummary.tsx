import React from 'react';
import { Transaction, CategoryTotal } from '../types/transaction';
import { BarChart3 } from 'lucide-react';

interface CategorySummaryProps {
  transactions: Transaction[];
}

export function CategorySummary({ transactions }: CategorySummaryProps) {
  const categoryTotals = transactions.reduce((acc, transaction) => {
    const category = transaction.category;
    if (!acc[category]) {
      acc[category] = { withdrawal: 0, deposit: 0, net: 0 };
    }
    
    acc[category].withdrawal += transaction.withdrawal || 0;
    acc[category].deposit += transaction.deposit || 0;
    acc[category].net = acc[category].deposit - acc[category].withdrawal;
    
    return acc;
  }, {} as Record<string, CategoryTotal>);

  const totalWithdrawals = Object.values(categoryTotals)
    .reduce((sum, cat) => sum + cat.withdrawal, 0);
  const totalDeposits = Object.values(categoryTotals)
    .reduce((sum, cat) => sum + cat.deposit, 0);

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow">
      <div className="flex items-center mb-4">
        <BarChart3 className="h-6 w-6 text-blue-500 mr-2" />
        <h2 className="text-xl font-semibold">Category Analysis</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Expenses by Category</h3>
          <div className="space-y-4">
            {Object.entries(categoryTotals)
              .filter(([category, totals]) => totals.withdrawal > 0)
              .sort((a, b) => b[1].withdrawal - a[1].withdrawal)
              .map(([category, totals]) => (
                <div key={category}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 capitalize">
                      {category}
                    </span>
                    <span className="text-sm text-gray-500">
                      ₹{totals.withdrawal.toFixed(2)} ({((totals.withdrawal / totalWithdrawals) * 100).toFixed(1)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-500 rounded-full h-2"
                      style={{ width: `${(totals.withdrawal / totalWithdrawals) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Income by Category</h3>
          <div className="space-y-4">
            {Object.entries(categoryTotals)
              .filter(([category, totals]) => totals.deposit > 0)
              .sort((a, b) => b[1].deposit - a[1].deposit)
              .map(([category, totals]) => (
                <div key={category}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 capitalize">
                      {category}
                    </span>
                    <span className="text-sm text-gray-500">
                      ₹{totals.deposit.toFixed(2)} ({((totals.deposit / totalDeposits) * 100).toFixed(1)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 rounded-full h-2"
                      style={{ width: `${(totals.deposit / totalDeposits) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">Total Income</p>
            <p className="text-xl font-bold text-green-600">₹{totalDeposits.toFixed(2)}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Total Expenses</p>
            <p className="text-xl font-bold text-red-600">₹{totalWithdrawals.toFixed(2)}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Net Flow</p>
            <p className={`text-xl font-bold ${(totalDeposits - totalWithdrawals) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ₹{(totalDeposits - totalWithdrawals).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}