import React, { useState } from 'react';
import Papa from 'papaparse';
import { FileUpload } from '../components/FileUpload';
import { TransactionList } from '../components/TransactionList';
import { CategorySummary } from '../components/CategorySummary';
import { Transaction } from '../types/transaction';
import { categorizeTransaction } from '../utils/categorizeTransaction';
import { parseAmount } from '../utils/parseAmount';
import { BarChart3 } from 'lucide-react';

function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<string>('');

  const handleFileUpload = (file: File) => {
    setError('');
    
    Papa.parse(file, {
      complete: (results) => {
        console.log(results);
        try {
          const parsedTransactions: Transaction[] = results.data
            .slice(1) // Skip header row
            .map((row: any[]) => {
              if (!Array.isArray(row) || row.length < 7) {
                return null;
              }

              const date = row[0]?.toString() || '';
              const description = row[1]?.toString() || '';
              const reference = row[2]?.toString() || '';
              const valueDate = row[3]?.toString() || '';
              const withdrawal = parseAmount(row[4]?.toString() || '0');
              const deposit = parseAmount(row[5]?.toString() || '0');
              const balance = parseAmount(row[6]?.toString() || '0');
                
              
              if (!date || !description ) {
                return null;
              }

              return {
                date,
                description,
                reference,
                valueDate,
                withdrawal,
                deposit,
                balance,
                category: categorizeTransaction(description, deposit > 0),
              };
            })
            .filter((t): t is Transaction => t !== null);

          if (parsedTransactions.length === 0) {
            setError('No valid transactions found in the file. Please check the file format.');
            return;
          }

          setTransactions(parsedTransactions);
        } catch (err) {
          setError('Error processing file. Please make sure it\'s a valid bank statement file.');
        }
      },
      error: (error) => {
        setError(`Error reading file: ${error.message}`);
      },
      header: false,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <BarChart3 className="h-8 w-8 text-blue-500 mr-2" />
          <h1 className="text-3xl font-bold text-gray-900">
            Bank Statement Analyzer
          </h1>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {transactions.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-6">
            <FileUpload onFileUpload={handleFileUpload} />
            <div className="mt-4 text-sm text-gray-500">
              <p>Expected file format (CSV):</p>
              <ul className="list-disc list-inside mt-2">
                <li>Date, Narration, Chq./Ref.No., Value Dt, Withdrawal Amt., Deposit Amt., Closing Balance</li>
                <li>First row should contain headers</li>
                <li>Amounts should be valid numbers</li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            <CategorySummary transactions={transactions} />
            <TransactionList transactions={transactions} />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;