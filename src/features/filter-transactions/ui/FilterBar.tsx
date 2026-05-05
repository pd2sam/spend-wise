import { useTransactions } from '../../../entities/transaction/model/TransactionContext';
import s from './FilterBar.module.css';

export const FilterBar = () => {
    const { filter, setFilter, categoryFilter, setCategoryFilter, categories } = useTransactions();

    return (
        <div className={s.filterContainer}>
            <div className={s.group}>
                <label className={s.label}>Тип операций</label>
                <div className={s.tabs}>
                    {(['all', 'income', 'expense'] as const).map((type) => (
                        <button
                            key={type}
                            className={`${s.tab} ${filter === type ? s.activeTab : ''}`}
                            onClick={() => setFilter(type)}
                        >
                            {type === 'all' ? 'Все' : type === 'income' ? 'Доходы' : 'Расходы'}
                        </button>
                    ))}
                </div>
            </div>

            <div className={s.group}>
                <label className={s.label}>Категория</label>
                <select
                    className={s.select}
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                >
                    <option value="all">Все категории</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};