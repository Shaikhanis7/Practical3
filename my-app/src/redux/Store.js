// import {configureStore}  from '@reduxjs/toolkit'
import CounterReducer from './CounterReducer'
// import {configureStore}  from '@reduxjs/toolkit'
import {configureStore}  from '@reduxjs/toolkit'
import ThemeReducer from './ThemeReducer'

// export const Store=configureStore({
//     reducer:CounterReducer
// })



export const Store =configureStore(
    {
        reducer:ThemeReducer
    }
)