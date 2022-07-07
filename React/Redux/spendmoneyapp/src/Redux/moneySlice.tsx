import { createSlice } from '@reduxjs/toolkit'


export const moneySlice = createSlice(
    {
        name: 'money',
        initialState: {
            money: 100000000000,
        },
        reducers: {
            incremental: () => {

            },
            decrease: () => {

            }
        }
    }
)

export const { incremental, decrease } = moneySlice.actions
export default moneySlice.reducer