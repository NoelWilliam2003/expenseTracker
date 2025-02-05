export interface Expense {
    id: number;
    amount: number;
    category: string;
    date: string;
    shared_with: string[];
}