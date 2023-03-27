import { createSlice } from "@reduxjs/toolkit";

// Slice = Un bloc de données
export const expenseSlice = createSlice({
    // Nom du slice
    name: "expenseSlice",
    // Les données du slice
    initialState:{
        income:1000,
        expenseList: [],
        countActionPerformed: 0
    },
    // Les méthode du slice
    reducers:{
        addExpense:(currentSlice, action)=>{
            currentSlice.expenseList.push({...action.payload, price : Number.parseFloat(action.payload.price)});
        },
        setIncome:(currentSlice, action)=>{
            currentSlice.income = Number.parseFloat(action.payload);
        },
        incrementCountActionPerformed:(currentSlice, action)=>{
            currentSlice.countActionPerformed++
        },
    }
})

// Les exports
const {addExpense, setIncome, incrementCountActionPerformed} = expenseSlice.actions
export {addExpense, setIncome, incrementCountActionPerformed}