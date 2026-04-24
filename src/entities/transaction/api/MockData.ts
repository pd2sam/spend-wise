import { type ITransaction } from "../model/types";

export const MOCK_TRANSACTIONS: ITransaction[] = [
    {id: 1, title: 'Зарплата', amount: 50000, type: 'income', category: 'Работа', date: '2025-10-27'},
    {id: 2, title: 'Кофе', amount: 250, type: 'expence', category: 'Еда', date: '2025-10-28'},
    {id: 3, title: 'Подписка Яндекс Плюс', amount: 299, type: 'expence', category: 'Сервисы', date: '2025-10-30'},
]