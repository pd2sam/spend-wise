import { useTransactions } from '../../../entities/transaction/model/TransactionContext';
import s from './TransactionList.module.css';

export const TransactionList = () => {
    const { filteredTransactions, deleteTransaction } = useTransactions();

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <h3 className={s.title}>Операции ({filteredTransactions.length})</h3>
            </div>

            {filteredTransactions.length === 0 ? (
                <div className={s.emptyState}>Ничего не найдено</div>
            ) : (
                <ul className={s.list}>
                    {filteredTransactions.map((item) => (
                        <li key={item.id} className={s.item}>
                            <div className={s.info}>
                                <span className={s.itemTitle}>{item.title}</span>
                                <div className={s.meta}>
                                    <span className={s.category}>{item.category}</span>
                                    <span className={s.date}>{item.date}</span>
                                </div>
                            </div>
                            <div className={s.actions}>
                                <span className={item.type === 'income' ? s.income : s.expense}>
                                    {item.type === 'income' ? '+' : '-'}{item.amount.toLocaleString()} ₽
                                </span>
                                <button onClick={() => deleteTransaction(item.id)} className={s.deleteBtn}>
                                    ✕
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};