import { Button, Checkbox, TextField } from '@mui/material';
import { useState } from 'react';
import './App.css';

const App = () => {

  const [id, setId] = useState(0)
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = () => {

    if (value != '') {
      setId(id + 1)
      setTodos([...todos, { id: id, todo: value }])
      setValue('')
      console.log(todos)
    }
  }

  const delTodo = (idTodo) => {
    setTodos(todos.filter(item => item.id !== idTodo))
  }

  const element = todos.map(todoItem => <div key={todoItem.id} >
    <Checkbox />
    {todoItem.todo}
    <input type='button' value='del' onClick={() => delTodo(todoItem.id)} />
  </div>)

  return (
    <div className="App-header">
      <form>
        <TextField
          id="outlined-basic"
          label="Your tasks"
          variant="outlined"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <Button variant="outlined" onClick={addTodo}>AddTodo</Button>
      </form>
      <div>
      {element}
    </div>
    </div>
  );
}

export default App;