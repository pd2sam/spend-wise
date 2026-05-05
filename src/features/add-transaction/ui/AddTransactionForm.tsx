import { useState } from 'react';
import { useTransactions } from '../../../entities/transaction/model/TransactionContext';
import s from './AddTransactionForm.module.css';

export const AddTransactionForm = () => {
    const { addTransaction } = useTransactions();
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState<'income' | 'expense'>('expense');
    const [category, setCategory] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !amount || !category) return;

        addTransaction({ title, amount: Number(amount), type, category });
        setTitle('');
        setAmount('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.inputWrapper}>
                <input
                    className={s.input}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Что купили / получили?"
                    required
                />
            </div>
            <div className={s.inputWrapper}>
                <input
                    className={s.input}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    placeholder="Сумма"
                    required
                />
            </div>
            <div className={s.inputWrapper}>
                <select className={s.select} value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')}>
                    <option value="expense">Расход</option>
                    <option value="income">Доход</option>
                </select>
            </div>
            <div className={s.inputWrapper}>
                <input
                    className={s.input}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Категория"
                    required
                />
            </div>
            <button type="submit" className={s.button}>Добавить</button>
        </form>
    );
};