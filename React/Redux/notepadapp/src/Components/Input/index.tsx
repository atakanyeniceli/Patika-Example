import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../../Redux/notesSlice'

type _color = `#${number}`

const Input = ({ customClass }: { customClass?: string }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [color, setColor] = useState<_color>('#264168')
    const disPatch = useDispatch()

    const addNoteClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        title && description && color && disPatch(addNote(
            {
                title: title,
                description: description,
                color: color
            }
        ))
    }

    return (
        <div className={`${customClass}`}>
            <div className=''>
                <input className='w-full outline-none px-2 py-1 shadow-slate-500 shadow' type="text" value={title} onChange={(title) => setTitle(title.target.value)} placeholder='Please enter title' />
            </div>
            <div className='my-2'>
                <textarea className='w-full min-h-[300px] h-[80%]  noScrollBar outline-none shadow-md px-2 py-1 shadow-slate-500' value={description} onChange={(desc) => setDescription(desc.target.value)} placeholder='Please enter description' />
            </div>
            <div className='flex justify-around '>
                <input className='w-[50%]' type='color' value={color} onChange={(color) => setColor(color.target.value as _color)} />
                <button id='addNote' className='shadow-sm shadow-slate-500 bg-slate-200 rounded-md px-2 border border-black' onClick={addNoteClick} >
                    Add Note
                </button>
            </div>

        </div>
    )
}

export default Input