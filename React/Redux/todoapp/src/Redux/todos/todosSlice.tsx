import { createSlice } from '@reduxjs/toolkit'
import ITodosSlice from '../../Interfaces/ITodosSlice'



export const todosSlie = createSlice(
    {
        name: 'todos',
        initialState: {
            items: Array<ITodosSlice>(
                {
                    id: 1,
                    title: 'React Learn',
                    checked: false
                }
            )
        },
        reducers: {
            changeChecked: (state, action) => {
                const item = state.items.find((item) => item.id === action.payload)
                if (item)
                    item.checked = !item.checked
            },
            addTodo: (state, action: { payload: string }) => {
                const temp = {
                    id: state.items.length + 1,
                    title: action.payload,
                    checked: false
                }
                state.items.push(temp)
            },
            deleteTodo: (state, action: { payload: number }) => {
                state.items = state.items.filter((item) => item.id !== action.payload)
            }
        }
    }
)

export const { changeChecked, addTodo, deleteTodo } = todosSlie.actions
export default todosSlie.reducer