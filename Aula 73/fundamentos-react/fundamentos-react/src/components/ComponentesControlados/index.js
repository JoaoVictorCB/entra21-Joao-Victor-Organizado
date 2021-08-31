import React from "react"

class ComponentesControlados extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            email: "",
            cpf: "",
            sexo: ""
        }
    }

    handleChang = e => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Nome:
                    <input
                        type="text"
                        name="nome"
                        onChange={this.handleChange}
                        value={this.state.nome} />
                </label> <br />
                <label>
                    E-mail:
                    <input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email} />
                </label> <br />
                <label>
                    CPF:
                    <input
                        type="text"
                        name="cpf"
                        onChange={this.handleChange}
                        value={this.state.cpf} />
                </label> <br />
                <label>
                    <input
                        type="radio"
                        name="sexo"
                        value="feminino"
                        onClick={this.handleChange} />Feminino
                </label> <br />
                <label>
                    <input
                        type="radio"
                        name="sexo"
                        value="masculino"
                        onClick={this.handleChange} />Masculino
                </label> <br />
                <select value={this.state.cidade} name="cidade" onChange={this.handleChange}>
                    <option value="blumenau">Blumenau</option>
                    <option value="indaial">Indaial</option>
                    <option value="timbo">Timbó</option>
                </select>
                <button>Enviar</button>
            </form>
        )
    }
}