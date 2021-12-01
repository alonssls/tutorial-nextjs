import cx from 'classnames'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

import styles from "../styles/Home.module.css"

const Home = () => {
  const [todoItem, setTodoItem] = useState('');

  const [items, setItems] = useState([
    {
      id: '1235',
      message: 'Buy Milk',
      done: false
    }
  ]);

  const handleAdd = () => {
    if (todoItem) {
      setItems([{
        id: uuidv4(),
        message: todoItem,
        done: false
      }, ...items]);

      setTodoItem('');
    }

  }

  const handleToggle = (id) => {
    const _items = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done
        }
      }
      return item;
    });

    setItems(_items)
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  }

  return (
    <div className="w-3/4 mx-auto text-center">
      <div className="pt-12">
        <h6 className="text-xs uppercase font-bold pb-2">Learning React</h6>
        <h1 className="text-5xl ">Todo App</h1>

      </div>
      <div className="pt-12">
        <input
          type="text"
          value={todoItem}
          className="w-full text-gray-900 px-4 py-2 text-center rounded"
          onChange={(e) => setTodoItem(e.target.value)}
          onKeyDown={handleEnter}
        />
        {/* <button type="button" onClick={handleAdd}>
          Add
        </button> */}
      </div>

      <ul className="pt-12">
        {items
          .filter(({ done }) => !done)
          .map(({ id, message }) => (
            <li
              key={id}
              className={cx(styles.item)}
              onClick={() => handleToggle(id)}
            >
              {message}
            </li>
          ))}

        {items
          .filter(({ done }) => done)
          .map(({ id, message }) => (
            <li
              key={id}
              className={cx(styles.item, styles.done)}
              onClick={() => handleToggle(id)}
            >
              {message}
            </li>
          ))}
      </ul>
    </div >
  )
}

export default Home;
