import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from "redux-persist";
import { loggerMiddleware } from "./middlewares/logger-middleware";

//#region CONFIGURAION DE BASE DU STORE
// const store = configureStore({
//     reducer:{},
// });

// export { store };
//#endregion

//#region CONFIGURATION BASE + PERSISTANCE
// const persistConfig = {
//     key : "root",
//     version : 1,
//     storage,
//     whitelist:['EXPENSE'] // 
// }
// const rootReducer = combineReducers({
//     EXPENSE : expenseSlice.reducer
// })

// const persistReducers = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//     reducer: persistReducers,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// const persistor = persistStore(store)

// export { store, persistor };
//#endregion

//#region CONFIGURATION BASE + PERSISTANCE + MIDDLEWARE
const persistConfig = {
    key : "root",
    version : 1,
    storage,
    whitelist:['EXPENSE'] // 
}
const rootReducer = combineReducers({
    EXPENSE : expenseSlice.reducer
})

const persistReducers = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistReducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(loggerMiddleware.middleware),
});

const persistor = persistStore(store)

export { store, persistor };
//#endregion


