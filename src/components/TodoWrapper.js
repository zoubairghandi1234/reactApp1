import React , { useState } from 'react'
import Todo from './Todo'

const TodoWrapper = () => {

    const [values, setValue] = useState([]);
    function handleChange(e) {
        setValue(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }

  return (
    <div>
        <label> Add task : <input name="myInput" value={values} onChange={handleChange} /><button onClick={handleSubmit}>Add New task</button></label>
        <hr/>
        <Todo/>
    </div>
  )
}

export default TodoWrapper