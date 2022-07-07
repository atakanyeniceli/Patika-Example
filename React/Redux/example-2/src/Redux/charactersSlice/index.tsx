import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ICharacter } from '../../Interface/character'



export const fetchCharacters = createAsyncThunk('fetchCharacters', async (offset: number) => {

    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}characters?limit=${12}&offset=${offset}`)
        .then((data) => data)
    return res.data
})





export const charactersSlice = createSlice(
    {
        name: 'characters',
        initialState: {
            character: Array<ICharacter>(),
            characterLimit: false,
            offset: 0,
        },
        reducers: {

        },
        extraReducers: (builder) => {
            builder.addCase(fetchCharacters.pending, (state, action) => {
                console.log('İşlem yapılıyor.')
            });
            builder.addCase(fetchCharacters.fulfilled, (state, action: { payload: Array<ICharacter> }) => {
                if (!state.characterLimit) {
                    state.character.push(...action.payload)
                    state.offset += 12
                    action.payload.length !== 12 ? state.characterLimit = true : state.characterLimit = false
                }
            });
            builder.addCase(fetchCharacters.rejected, (state, action) => {
                console.log('İşlem hata verdi.')
            })
        }
    }
)



export default charactersSlice.reducer