import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ICharacter } from '../../Interface/character'

const Character = () => {

    let { characterID } = useParams<string>()
    const [character, setCharacter] = useState<ICharacter>()

    useEffect(() => {
        axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}characters/${characterID}`)
            .then((_character) => setCharacter(_character.data[0]))
    }, [characterID])
    return (
        <div className='text-center text-white'>
            <div className='text-4xl my-5'>{character?.name}</div>
            <div className='columns-3'>
                <div>
                    <div className='my-2'>
                        <div>Nickname</div>
                        <div>{character?.nickname}</div>
                    </div>
                    <div className='my-2'>
                        <div>Birthday</div>
                        <div>{character?.birthday}</div>
                    </div>
                    <div>
                        <div>Occupations</div>
                        <div>{character?.occupation.map((occupation,index) => {
                            return (
                                <div key={index+occupation}>{occupation}</div>
                            )
                        })}</div>
                    </div>
                </div>
                <div className='max-w-sm mx-auto'><img src={character?.img} alt="" /></div>
                <div>asd</div>
            </div>
        </div>
    )
}

export default Character