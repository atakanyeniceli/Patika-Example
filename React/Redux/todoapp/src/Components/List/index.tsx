import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ITodosSlice from '../../Interfaces/ITodosSlice'
import { RootState } from '../../Redux/store'
import { changeChecked, deleteTodo } from '../../Redux/todos/todosSlice'


const List = () => {

    const items = useSelector<RootState, Array<ITodosSlice>>(state => state.todos.items)
    const disPatch = useDispatch()

    return (
        <div className='text-center'>
            {items.map((item, index) => {
                return (
                    <div key={index} className={`flex my-2`}>
                        <input className='self-center w-full' type="checkbox" checked={item.checked.valueOf()}
                            onChange={(e) => disPatch(changeChecked(item.id))} />
                        <div className={`${item.checked && 'line-through text-slate-400'} w-full `}>{item.title}</div>
                        <div className={`w-full`} onClick={() => disPatch(deleteTodo(item.id))}>X</div>
                    </div>
                )
            })}
        </div >
    )
}

export default List