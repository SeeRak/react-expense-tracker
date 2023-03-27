import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { incrementCountActionPerformed, setIncome } from "store/expense/expense-slice";

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
    // predicate:(action) => {
    //     return action.type === "expenseSlice/addExpense";
    // },
    matcher : isAnyOf(setIncome),
    effect : async(action, listenerAPI) => {
        console.log(action)
        listenerAPI.dispatch(incrementCountActionPerformed())
        console.log(listenerAPI.getState())
    }
})