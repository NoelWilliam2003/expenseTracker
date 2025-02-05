import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { Expense } from "../types";

const ExpenseList: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    API.get("/expenses/")
      .then((response) => {
        setExpenses(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching expenses:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Expenses</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.category}: ${expense.amount} on {expense.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;