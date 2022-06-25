import { useState } from 'react'
import { useSelector } from 'react-redux'
import INotes from '../../Interfaces/INotes'
import { RootState } from '../../Redux/store'
import NoteCard from '../NoteCard'
import NoteCardDetail from '../NoteCard/noteCardDetail'
import Search from '../Search'

const noteDetailDefultValue = {
    id: 0,
    title: 'Title 1',
    description: 'Description 1',
    color: '#000000'
}

const List = ({ customClass }: { customClass?: string }) => {

    const _notes = useSelector<RootState, Array<INotes>>(state => state.notes.notesList)
    const [noteDetail, setNoteDetail] = useState<INotes>(noteDetailDefultValue as INotes)
    const [detailDispaly, setDetailDisplay] = useState<'none' | 'block'>('none')

    return (
        <div className={`${customClass}`}>
            <Search />
            <div className='max-h-[300px] my-2 grid grid-cols-1 gap-2 xl:grid-cols-4 overflow-y-auto noScrollBar'>
                {
                    _notes.map((note) => {
                        return (
                            <div key={note.id} className='h-16'>
                                <NoteCard note={note} setNoteDetail={setNoteDetail} setDetailDisplay={setDetailDisplay} />
                            </div>
                        )
                    })
                }
            </div>
            <NoteCardDetail noteDetail={noteDetail} display={detailDispaly} setDisplay={setDetailDisplay} />
        </div >
    )
}

export default List