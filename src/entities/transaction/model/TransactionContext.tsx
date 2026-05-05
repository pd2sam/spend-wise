import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type ITransaction, type TransactionFilter } from './types';
import { MOCK_TRANSACTIONS } from '../api/MockData';

interface TransactionContextType {
    transactions: ITransaction[];
    filteredTransactions: ITransaction[];
    filter: TransactionFilter;
    categoryFilter: string;
    categories: string[];
    addTransaction: (transaction: Omit<ITransaction, 'id' | 'date'>) => void;
    deleteTransaction: (id: string) => void;
    setFilter: (filter: TransactionFilter) => void;
    setCategoryFilter: (category: string) => void;
}

export const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
    const [transactions, setTransactions] = useState<ITransaction[]>(() => {
        const saved = localStorage.getItem('transactions');
        return saved ? JSON.parse(saved) : MOCK_TRANSACTIONS;
    });

    const [filter, setFilter] = useState<TransactionFilter>('all');
    const [categoryFilter, setCategoryFilter] = useState<string>('all');

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }, [transactions]);

    const categories = Array.from(new Set(transactions.map((t) => t.category)));

    const addTransaction = (newData: Omit<ITransaction, 'id' | 'date'>) => {
        const item: ITransaction = {
            ...newData,
            id: crypto.randomUUID(),
            date: new Date().toLocaleDateString('ru-RU'),
        };
        setTransactions((prev) => [item, ...prev]);
    };

    const deleteTransaction = (id: string) => {
        setTransactions((prev) => prev.filter((t) => t.id !== id));
    };

    const filteredTransactions = transactions.filter((t) => {
        const matchesType = filter === 'all' || t.type === filter;
        const matchesCategory = categoryFilter === 'all' || t.category === categoryFilter;
        return matchesType && matchesCategory;
    });

    return (
        <TransactionContext.Provider value={{
            transactions,
            filteredTransactions,
            filter,
            categoryFilter,
            categories,
            addTransaction,
            deleteTransaction,
            setFilter,
            setCategoryFilter,
        }}>
            {children}
        </TransactionContext.Provider>
    );
};

export const useTransactions = () => {
    const context = useContext(TransactionContext);
    if (!context) throw new Error('useTransactions must be used within TransactionProvider');
    return context;
};