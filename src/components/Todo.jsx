import { useState } from "react";
import styles from "./Todo.module.css";
import ListItem from "./ListItem";

const Todo = () => {

    const taskList = JSON.parse(localStorage.getItem("tasks"));

    const [list, setList] = useState([taskList]);

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
        setInput("");
        localStorage.setItem("tasks", JSON.stringify([...prevTask, task]));
    }

    const clearAllTask = () => {
        setList([]);
    }
    const markDoneHandler = (id) => {
        const updatedList = list.map((element) => {
            if (element.id === id ) element.status = "completed";
            return element;
        });

        setList(updatedList);
    }
    const markDeleteHandler = (id) => {
        const deletedList = list.filter((element) =>{
           return element.id !== id;
        });
        setList(deletedList);
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
                list.map((elements) => (
                    <ListItem task={elements} onDone={markDoneHandler} onDelete={markDeleteHandler} />
                ))
            }
        </ul>
        {
            list.length !== 0 && (
                <div>
                    <button className={styles.clearAll} onClick={clearAllTask}>Clear All</button>
                </div>
            )
        }

    </div>
  )
}

export default Todo;