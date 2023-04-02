import { useParams } from "react-router";

function Chapter() {
    let {id} = useParams();
    return (
        <article>
            <h2>{id}</h2>
        </article>
    );
}

export default Chapter;