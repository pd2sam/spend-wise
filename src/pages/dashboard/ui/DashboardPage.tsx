import { TransactionProvider } from '../../../entities/transaction/model/TransactionContext';
import { AddTransactionForm } from '../../../features/add-transaction/ui/AddTransactionForm';
import { FilterBar } from '../../../features/filter-transactions/ui/FilterBar';
import { TransactionList } from '../../../widgets/TransactionList/ui/TransactionList';
import { TransactionStats } from '../../../widgets/TransactionStats/ui/TransactionStats';
import s from './DashboardPage.module.css';

export const DashboardPage = () => {
    return (
        <TransactionProvider>
            <main className={s.page}>
                <header className={s.header}>
                    <h1 className={s.mainTitle}>Финансовый трекер</h1>
                    <p className={s.subtitle}>Управляйте доходами и расходами на одном экране</p>
                </header>

                <div className={s.layout}>
                    <div className={s.topGrid}>
                        <TransactionStats />
                        <FilterBar />
                        <AddTransactionForm />
                    </div>
                    <TransactionList />
                </div>
            </main>
        </TransactionProvider>
    );
};