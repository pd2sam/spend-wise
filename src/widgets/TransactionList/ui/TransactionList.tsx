import { MOCK_TRANSACTIONS } from "../../../entities/transaction/api/MockData";
import s from './TransactionList.module.css'
export const TransactionList = () => {
    return (
        <div className={s.wrapper}>
           <h2>История операций</h2> 
           <ul className={s.list}>
            {MOCK_TRANSACTIONS.map((item) => (
                <li key={item.id} className={s.item}>
                    <span>{item.title}</span>
                    <span className={item.type === 'income' ? s.income : s.expense}>
                        {item.type === 'income' ? '+' : '-'}{item.amount} ₽
                    </span>
                </li>
            ))}
           </ul>
        </div>
        
    );
};