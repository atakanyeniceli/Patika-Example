import { createSlice } from '@reduxjs/toolkit'
import INotes from '../Interfaces/INotes'

export const notesSlice = createSlice(
    {
        name: 'notes',
        initialState: {
            notesList: Array<INotes>()
        },
        reducers: {
            addNote: (state, action: { payload: { title: string, description: string, color: `#${number}` } }) => {
                state.notesList.push({
                    id: state.notesList.length + 1,
                    title: action.payload.title,
                    description: action.payload.description,
                    color: action.payload.color
                })
            },
            deleteNote: (state, action: { payload: number }) => {
                state.notesList = state.notesList.filter((note) => note.id !== action.payload)
            },
            updateNote: (state, action: { payload: INotes }) => {
                const tempIndex = state.notesList.findIndex((note) => note.id === action.payload.id)
                if (tempIndex > -1)
                    state.notesList[tempIndex] = { ...action.payload }
            }
        }
    }
)

export const { addNote, deleteNote, updateNote } = notesSlice.actions
export default notesSlice.reducer