import React, {useState} from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";


const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Life Insurance",
    amount: 10000,
    date: new Date(2023, 8, 31),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 14000,
    date: new Date(2023, 9, 1),
  },
  {
    id: "e3",
    title: "Health Insurance",
    amount: 24000,
    date: new Date(2023, 10, 1),
  },
  {
    id: "e4",
    title: "Gadget Insurance",
    amount: 5000,
    date: new Date(2023, 9, 11),
  },
];


const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense)=> {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
