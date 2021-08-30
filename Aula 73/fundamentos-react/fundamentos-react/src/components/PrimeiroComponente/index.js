import "./styles.css";

export function PrimeiroComponente() {
    const mensagem = ":D";
    return (
        <>
            <h2>Primeiro componente</h2>
            <p className="emoji">{mensagem}</p>
        </>
    );
}