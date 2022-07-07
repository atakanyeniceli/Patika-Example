import { Link } from "react-router-dom"
import { ICharacter } from "../../Interface/character"



const CharacterCard = ({ characterInfo }: { characterInfo: ICharacter }) => {
    return (
        <nav>
            <Link to={`${characterInfo.char_id}`}>
                <div className='p-2 mx-2 mb-5 shadow-red-300 shadow-sm text-gray-50 text-center hover:scale-105'>
                    <div className=''><img className='mx-auto' src={characterInfo.img} alt="" /></div>
                    <div className='my-2 font-semibold text-lg' >{characterInfo.name}</div>
                    <div className='text-sm'>{characterInfo.nickname}</div>
                </div>
            </Link>
        </nav>
    )
}

export default CharacterCard