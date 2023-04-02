import { Link } from "react-router-dom";

export interface Chapter {
    id: string;
    title: string;
}

function Menu() {
    const chapters: Chapter[] = [
        { id: '1', title: 'Первая глава' },
        { id: '2', title: 'Вторая глава' }
    ];

    return (
        <main>
            <h1>Выбор главы</h1>
            <ul>
                {chapters.map(({ id, title }) => (
                    <Link to={`/chapter/${id}`} key={id}>{title}</Link>
                ))}
            </ul>
        </main>
    );
}

export default Menu;