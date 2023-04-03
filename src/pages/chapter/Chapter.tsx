import { useState } from "react";
import { first, heroesData } from "./test-dialog";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import styles from './chapter.module.css';

function Chapter() {
    const [question, setQuestion] = useState(first);

    return (
        <Box>
            <div className={styles[question.hero]} key={question.hero} />
            {heroesData[question.hero].name} говорит...
            <Box>
                <p>{question.text}</p>
                <ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
                    {question.answers?.map((answr) => (
                        <Button onClick={() => answr.onClick(setQuestion)} key={answr.id}>
                            {answr.text}
                        </Button>
                    ))}
                </ButtonGroup>
                {!question.answers && (<Link to={'/'}>Спасибо, до свидания</Link>)}
            </Box>
        </Box>
    );
}

export default Chapter;