export type Category = "Еда" | "Транспорт" | "Развлечения" | "Работа" | "Сервисы" | "Другое";

export interface ITransaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  type: "income" | "expense";
}
export type TransactionFilter = "all" | "income" | "expense";
