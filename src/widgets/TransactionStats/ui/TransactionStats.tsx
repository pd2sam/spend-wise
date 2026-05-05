import { useTransactions } from '../../../entities/transaction/model/TransactionContext';
import s from './TransactionStats.module.css';

export const TransactionStats = () => {
    const { filteredTransactions } = useTransactions();

    const income = filteredTransactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
    const expenses = filteredTransactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
    const balance = income - expenses;

    // Вычисляем процент заполнения для графика
    const totalTurnover = income + expenses;
    const expensePercent = totalTurnover > 0 ? (expenses / totalTurnover) * 100 : 0;

    return (
        <section className={s.statsCard}>
            <div className={s.header}>
                <div className={s.balanceInfo}>
                    <span className={s.label}>Текущий баланс</span>
                    <h2 className={`${s.balance} ${balance < 0 ? s.negative : ''}`}>{balance.toLocaleString()} ₽</h2>
                </div>
            </div>

            <div className={s.metricGrid}>
                <div className={s.metricItem}>
                    <span className={s.label}>Заработано</span>
                    <span className={s.incomeValue}>+{income.toLocaleString()} ₽</span>
                </div>
                <div className={s.metricItem}>
                    <span className={s.label}>Потрачено</span>
                    <span className={s.expenseValue}>-{expenses.toLocaleString()} ₽</span>
                </div>
            </div>

            <div className={s.chartWrapper}>
                <div className={s.chartLabels}>
                    <span>Анализ структуры бюджета</span>
                    <span>{expensePercent.toFixed(0)}% расходы</span>
                </div>
                <div className={s.progressBackground}>
                    <div className={s.progressFill} style={{ width: `${expensePercent}%` }} />
                </div>
            </div>
        </section>
    );
};