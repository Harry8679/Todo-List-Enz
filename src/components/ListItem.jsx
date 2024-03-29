const ListItem = ({ id, content, deleteTask }) => {
  return (
    <li className='p-2 bg-zinc-200 mb-2 rounded flex' key={id}>
      <span>{content}</span>
      <button className='ml-auto bg-red-600 w-6 h-6 rounded text-zinc-200' onClick={deleteTask}>X</button>
    </li>
  )
}

export default ListItem;
