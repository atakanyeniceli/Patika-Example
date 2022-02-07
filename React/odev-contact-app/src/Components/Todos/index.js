import { useState } from 'react';
import './myStyle.css'

function Todos() {
    const [list, setList] = useState(
        [{
            status: false, title: 'Learn React'
        },
        {
            status: true, title: 'Code Furiosly'
        },
        {
            status: true, title: 'Promote Mavo'
        }]);

    const addTodo = (e) => {
        e.preventDefault();
        const resValue = e.target.querySelector('#todoInput').value;
        const valueCheck = list.map((item) => { return item.title }).includes(resValue);

        if (resValue == '' || valueCheck) return false;
        setList([...list, { status: false, title: resValue }]);
    }

    const onChangeChecked = (e) => {
        const res = list.findIndex((item) => item.title == e.target.title)
        list[res] = { status: (e.target.checked), title: e.target.title }
        setList([...list])
    }

    const todoDelete = (e) => {
        const resTitle = e.target.title
        const res = list.filter((item) => item.title != resTitle)
        setList([...res])
    }

    return (
        <div className='mainDiv'>
            <div><h1>Todos</h1></div>
            <form onSubmit={addTodo}>

                <div className='shadow header'>
                    <label id='arrow'></label>
                    <input id='todoInput' className='shadow' placeholder='What needs to be done?' />
                </div>
            </form>
            <div>
                <ul>
                    {list.map((item, key) =>
                        <li key={key} className='shadow'>
                            <div className='list'>
                                <input type='checkbox' title={item.title} onChange={onChangeChecked} defaultChecked={item.status} />
                                <label> {item.title} </label>
                                <button title={item.title} onClick={todoDelete}></button>
                            </div>
                        </li>
                    )
                    }
                </ul>
            </div>

            <div className='footer'>
                <span >{list.length} items left</span>
                <span ><a >All</a></span>
                <span ><a >Active</a></span>
                <span ><a >Completed</a></span>
            </div>

        </div>
    )
}

export default Todos
