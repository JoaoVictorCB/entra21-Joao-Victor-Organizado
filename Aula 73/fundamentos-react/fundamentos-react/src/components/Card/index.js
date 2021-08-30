import ".style.css"

export function Card(props) {
    const cardSytle = {
        backgroundColor: props.cor,
        borderColor: props.cor,
    }
    return (
        <div className="card" style={cardSytle}>
            <h2 className="titulo">{props.titulo}</h2>
            <div className="conteudo">{props.children}</div>
        </div>
    )
}

Card.defaultProps = {
    cor: "#333"
}