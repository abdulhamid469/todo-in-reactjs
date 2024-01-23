import { useState } from "react";
import styles from "./Todo.module.css";
import ListItem from "./ListItem";

const Todo = () => {

    const [list, setList] = useState([
        {
            id: 1,
            name: "Learning React JS",
            status: "pending"
        },
        {
            id: 2,
            name: "Learning UseState",
            status: "completed"
        },
        {
            id: 3,
            name: "Learning JSX",
            status: "pending"
        },
    ]);

    // Input
    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const addTaskHandler = (e) => {
        e.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 586475544),
            name: input,
            status: "pending"
        }
        const prevTask = list;
        setList([...prevTask, task]);
    }


  return (
    <div className={styles.main_container}>
        <div className={styles.input_box}>
            <h1>Make Your TODO List</h1>
            <div>
                <p>Add items here ✏️</p>
                <form>
                    <input type="text" onChange={handleInputChange} value={input} placeholder="Add Item" />
                    <button onClick={addTaskHandler}>Add</button>
                </form>
            </div>
        </div>

        <h3>Your All Tasks</h3>
        <ul>
            {
                list.map((elements, key) => (
                    <ListItem task={elements} key={elements.id} />
                ))
            }
        </ul>

        <div>
            <button className={styles.clearAll}>Clear All</button>
        </div>

    </div>
  )
}

export default Todo;