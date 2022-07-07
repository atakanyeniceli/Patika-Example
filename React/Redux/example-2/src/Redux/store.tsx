import { configureStore } from '@reduxjs/toolkit'
import charactersSlice from './charactersSlice'

export const store = configureStore(
    {
        reducer: {
            characters: charactersSlice
        }
    }
)

export type AppDisPatch = typeof store.dispatch
export type charactersState = ReturnType<typeof charactersSlice>
export type RootState = ReturnType<typeof store.getState>