export default function Pai2(props) {
    return (
        <div>
            <h1>{props.nome}{props.sobrenome}</h1>
            <h2>filhos</h2>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}