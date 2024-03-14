import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid';
import ListItem from './components/ListItem';

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: nanoid(8), content: 'Faire du React' },
    { id: nanoid(8), content: 'Apprendre NodeJS' }
  ]);
  
  const [todo, setTodo] = useState('');

  const [showValidation, setShowValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo === "") {
      setShowValidation(true);
      return;
    }
    setTodoList([...todoList, { id: nanoid(8), content: todo }]);
    setTodo('');
    setShowValidation(false); 
    return;
  }

  const deleteTodo = (id) => {
    return setTodoList(todoList.filter((task) => task.id !== id));
  }
  return (
    <div className='h-screen bg-slate-900'>
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">
          To-do Liste
        </h1>

        <form className="mb-10" onSubmit={handleSubmit}>
          <label htmlFor="todo-item" className='text-slate-50'>
            Ajouter une chose à faire
          </label>
          <input type="text" className='mt-1 block w-full rounded' value={todo} onChange={(e) => setTodo(e.target.value)} />
          {showValidation && (
            <p className="text-red-400">Ajoutez un contenu à pour créer une nouvelle tâche</p>
          )}
          <button className='mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]'>Ajouter</button>
        </form>
        <ul>
          {todoList.length === 0 && (
            <li className='text-slate-50 text-md'>Pas de tâche à faire ...</li>
          )}
          {todoList.length > 0 &&
          todoList.map(task => (
            <ListItem key={task.id} content={task.content} deleteTask={() => deleteTodo(task.id)} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
