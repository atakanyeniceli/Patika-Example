import INotes from '../../Interfaces/INotes'

interface IProps {
    note: INotes,
    setNoteDetail: React.Dispatch<INotes>,
    setDetailDisplay: React.Dispatch<React.SetStateAction<"none" | "block">>
}

const NoteCard = ({ note, setNoteDetail, setDetailDisplay }: IProps) => {
    const setDetail = () => {
        setNoteDetail({
            id: note.id,
            title: note.title,
            description: note.description,
            color: note.color
        })
        setDetailDisplay('block')
    }
    return (
        <div style={{ backgroundColor: note.color }} className='text-center rounded text-white col-span-1'>
            <div className='text-3xl'>
                <span >{note.title}</span>
            </div>
            <div className='text-sm px-2 truncate'>
                <span className='hover:cursor-pointer' onClick={setDetail}>{note.description}</span>
            </div>
        </div >
    )
}

export default NoteCard