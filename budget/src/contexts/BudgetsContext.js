import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';

const BudgetsContext = React.createContext();

export function useBudgets() {
    return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useLocalStorage('budgets');
    const [expenses, setExpenses] = useLocalStorage('expenses');

    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId);
    }

    function addExpense({ description, amount, budgetId }) {
        setExpenses(prevExpense => {            
            return [...prevExpense, { id: uuidV4(), description, budgetId, amount }]
        })
    }

    function addBudget(name, max) {
        setBudgets(prevBudget => {
            if (prevBudget.find(budget => budget.name === name)) {
                return prevBudget;
            }

            return [...prevBudget, { id: uuidV4(), name: name, max: max }]
        })
    }

    function deleteBudget({ id }) {
        setBudgets(prevBudget => {
            return prevBudget.filter(budget => budget.id !== id);
        });
    }

    function deleteExpense({ id }) {
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id);
        })
    }

    return (
        <BudgetsContext.Provider value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense 
        }}>
            {children}
        </BudgetsContext.Provider>
    )
}