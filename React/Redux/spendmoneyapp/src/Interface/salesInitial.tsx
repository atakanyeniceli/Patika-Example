import { IReceipt } from "./receipt";




export interface IInitialState {
    Receipt: Array<IReceipt>,
    total: {
        fee: number,
        piece: number
    }
}