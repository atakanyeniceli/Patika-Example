import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CharacterCard from '../../Components/characterCard'
import { fetchCharacters } from '../../Redux/charactersSlice'
import { AppDisPatch, charactersState, RootState } from '../../Redux/store'
import Masonry from '@mui/lab/Masonry'




const Home = () => {
    const charactersData = useSelector<RootState, charactersState>(state => state.characters)
    const disPatch = useDispatch<AppDisPatch>()

    useEffect(() => {
        if (charactersData.character.length === 0)
            disPatch(fetchCharacters(charactersData.offset))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disPatch])

    return (
        <div>
            <div className='text-center mb-10 mt-2'>
                <span className='drop-shadow-md italic text-white text-6xl homeTitleTextShadow'>Characters</span>
            </div>
            <div className='ml-5'>
                <Masonry columns={{ md: 5 }} spacing={{ md: 2 }} >
                    {
                        charactersData.character.map((character) => <CharacterCard key={character.char_id} characterInfo={character} />)
                    }
                </Masonry>
            </div>
            <div className='text-center text-white my-5' style={{ display: `${charactersData.characterLimit && 'none'}` }}>
                <button onClick={() => disPatch(fetchCharacters(charactersData.offset))}
                    className='border border-white rounded-full px-2 shadow-sm shadow-white'>
                    Load More
                </button>
            </div>
        </div>
    )
}

export default Home