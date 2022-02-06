import { useState,useEffect } from 'react';
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
        let inputValue=e.target.querySelector('#title').value
        if (inputValue === '') return false;
        setList([...list, { status: false, title: inputValue }])
        e.target.querySelector('#title').value=''
    }
    
    const checkedChange=()=>{

    }

    useEffect(()=>{

    });
    return (
        <div className='mainDiv'>
            <div><h1>Todos</h1></div>
            <form onSubmit={addTodo}>

                <div className='shadow header'>
                    <label id='arrow'></label>
                    <input id='title'className='shadow' placeholder='What needs to be done?' />
                </div>

                <div>
                    <ul>
                        {list.map(
                            (item, key) =>
                                <li key={key} className='shadow'>
                                    <div className='list'>
                                        <input type='checkbox'  defaultChecked={item.status}/>
                                        <label>{item.title}</label>
                                        <button></button>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>

                <div className='footer'>
                    <span >{list.length} items left</span>
                    <span ><a href="">All</a></span>
                    <span ><a href="">Active</a></span>
                    <span ><a href="">Completed</a></span>
                </div>

            </form>
        </div>
    )
}

export default Todos
