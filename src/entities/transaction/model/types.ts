export type Category = 'Еда' | 'Транспорт' | 'Развлечения' | 'Работа' | 'Сервисы' | 'Другое';
export interface ITransaction {
    id: number;
    title: string;
    amount: number;
    category: Category;
    date: string;
    type: 'income' | 'expence';
}