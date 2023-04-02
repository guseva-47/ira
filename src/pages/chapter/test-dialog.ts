import { v4 as uuidv4 } from 'uuid';

export interface Replic {
    id: string;
    text: string;
    onClick: (func: ((q: Question) => void )) => void;
};

export interface Question {
    text: string;
    answers?: Replic[];
};

const a31: Question = {
    text: "Мы пойдём с конём по полю вдвоём!"
}

const a32: Question = {
    text: "утром светлым тихо пойдем!"
}

const a21: Question = {
    text: "ночкой темной тихо пойдем?",
    answers: [
        {
            id: uuidv4(),
            text: 'ой да пойдем',
            onClick: (setQuestion) => setQuestion(a31)
        }
    ]
}

const a22: Question = {
    text: "раз не ночью то когда?",
    answers: [
        {
            id: uuidv4(),
            text: 'утром',
            onClick: (setQuestion) => setQuestion(a32)
        },
        {
            id: uuidv4(),
            text: 'ладно, давай все-таки ночью',
            onClick: (setQuestion) => setQuestion(a21)
        },
    ]
}

export const first: Question = {
    text: "выйду ночью в поле с конем?",
    answers: [
        {
            id: uuidv4(),
            text: 'ой да с конем',
            onClick: (setQuestion) => setQuestion(a21)
        },
        {
            id: uuidv4(),
            text: 'no',
            onClick: (setQuestion) => setQuestion(a22)
        },
    ]
}
