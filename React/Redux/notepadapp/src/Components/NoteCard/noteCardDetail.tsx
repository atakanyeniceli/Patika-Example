import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import INotes from "../../Interfaces/INotes";
import { updateNote } from '../../Redux/notesSlice'

interface IProps {
    noteDetail: INotes,
    display: 'none' | 'block',
    setDisplay: React.Dispatch<React.SetStateAction<"none" | "block">>
}

const NoteCardDetail = ({ noteDetail, display, setDisplay }: IProps) => {

    const [tempNoteDetail, setTempNoteDetail] = useState<INotes>({ ...noteDetail })
    useEffect(() => setTempNoteDetail(noteDetail), [noteDetail])
    const disPatch = useDispatch()
    const updateButton = () => {
        disPatch(updateNote({ ...tempNoteDetail }))
        setDisplay('none')
    }

    return (
        <div className='fixed z-10 w-full h-full top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40' style={{ display: display }}>
            <div className="px-5 py-2 bg-slate-100 w-[50%] mx-auto mt-20">
                <div className='text-right mb-5' onClick={() => setDisplay('none')}>X</div>
                <div className='text-center'>Title</div>
                <input className="w-full px-2 shadow-md shadow-black outline-none" type="text" value={tempNoteDetail.title} onChange={(e) => setTempNoteDetail({ ...tempNoteDetail, title: e.target.value })} />
                <div className='text-center mt-5'>Description</div>
                <textarea className="w-full h-40 shadow-md shadow-black noScrollBar px-2 my-2 outline-none" value={tempNoteDetail.description} onChange={(e) => setTempNoteDetail({ ...tempNoteDetail, description: e.target.value })} />
                <div className='flex justify-between'>
                    <label htmlFor='colorPicker' style={{ backgroundColor: tempNoteDetail.color }} className='rounded-full border border-black w-7 text-slate-300 text-center'>
                        <input id='colorPicker' className='bg-transparent w-0 h-0' value={tempNoteDetail.color} onChange={(e) => setTempNoteDetail({ ...tempNoteDetail, color: e.target.value as `#${number}` })} type="color" />
                        ✔
                    </label>
                    <button id='addNote' className='shadow-sm shadow-slate-500 bg-slate-200 rounded-md px-2 border border-black' onClick={updateButton}>
                        Save Change
                    </button>
                </div>

            </div>
        </div>
    )
}

export default NoteCardDetail