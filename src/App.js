import React,{useState} from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSES = [
    {
        id : 'e1',
        title : 'school Fee',
        amount :250,
        date : new Date(2022, 5, 12)
    },
    {
        id : 'e2',
        title : 'Books',
        amount :150,
        date : new Date(2022, 5, 18)
    },
    {
        id : 'e3',
        title : 'House Rent',
        amount :4000,
        date : new Date(2021, 5, 1)
    },
    {
        id : 'e4',
        title : 'Foods',
        amount :500,
        date : new Date(2021, 5, 5)
    }
];

const App = () => {
   
    const [expenses,setExpense] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        const updatedExpense = [expense, ...expenses];
        setExpense(updatedExpense);
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/> 
            <Expense item={expenses} />
        </div>
    );
}

export default App;