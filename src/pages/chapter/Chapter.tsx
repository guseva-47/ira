import { useState } from "react";
import { first } from "./test-dialog";
import styles from './chapter.module.css';
import { Link } from "react-router-dom";

function Chapter() {
    const [question, setQuestion] = useState(first);

    return (
        <article className={styles.chapter}>
            <h2>{question.text}</h2>
            <ul>
                {question.answers?.map((answr) => (
                    <li key={answr.id}>
                        <button onClick={() => answr.onClick(setQuestion)}>
                            {answr.text}
                        </button>
                    </li>
                ))}
            </ul>
            {!question.answers && (<Link to={'/'}>Спасибо, до свидания</Link>)}
        </article>
    );
}

export default Chapter;