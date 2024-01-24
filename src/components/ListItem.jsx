import styles from './ListItem.module.css';
import { MdDone } from "react-icons/md";
import { FaTrash } from 'react-icons/fa';

const ListItem = ({ task, onDone, onDelete }) => {
    console.log();
  return (
    <li className={styles.item}>
        {task.status === 'pending' ? <p>{task.name}</p> : <del>{task.name}</del>}
        <div className={styles.buttons}>
            <button className={styles.doneBtn} onClick={() => {
                onDone(task.id);
            }}><MdDone /></button>
            <button className={styles.deleteBtn} onClick={() => {
                onDelete(task.id);
            }}><FaTrash /></button>
        </div>
    </li>
  )
}

export default ListItem;