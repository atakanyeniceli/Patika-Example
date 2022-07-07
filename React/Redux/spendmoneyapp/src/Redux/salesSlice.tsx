import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IReceipt } from '../Interface/receipt'
import { IInitialState } from '../Interface/salesInitial'




const initialState: IInitialState = {
    Receipt: Array<IReceipt>(),
    total: {
        fee: 0,
        piece: 0
    }
}

export const salesSlice = createSlice(
    {
        name: 'sales',
        initialState,
        reducers: {
            addSales: (state: IInitialState, actions: PayloadAction<IReceipt>) => {
                const _index = state.Receipt.findIndex((product) => product.productName === actions.payload.productName)
                if (_index > -1) {
                    state.Receipt[_index] = actions.payload
                } else {
                    state.Receipt.push(actions.payload)
                }
            },
            deleteSales: (state: IInitialState, actions: PayloadAction<IReceipt>) => {
                if (state.Receipt.length >= 0)
                    state.Receipt = state.Receipt.filter((product) => product.productName !== actions.payload.productName)
            },
            total: (state: IInitialState) => {

                if (state.Receipt.length > 0)
                    state.total = {
                        fee: state.Receipt.map((product) => product.totalFee).reduce((acc, curr) => acc + curr),
                        piece: state.Receipt.map((product) => product.productPiece).reduce((acc, curr) => acc + curr)
                    }
                else
                    state.total = {
                        fee: 0,
                        piece: 0
                    }
                console.log(state.Receipt.length);


            }
        }
    }
)

export const { addSales, deleteSales, total } = salesSlice.actions
export default salesSlice.reducer