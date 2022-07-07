import { configureStore } from '@reduxjs/toolkit'
import moneySlice from './moneySlice'
import salesSlice from './salesSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'


export const store = configureStore(
    {
        reducer: {
            money: moneySlice,
            sales: salesSlice,
        },

    }
)

export type RootState = ReturnType<typeof store.getState>
type AppDisPatch = typeof store.dispatch
export const useAppDispatch: () => AppDisPatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector