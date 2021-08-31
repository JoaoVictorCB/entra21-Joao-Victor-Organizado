import React from "react"

export class Relogio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horario: new Date().toLocaleDateString()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                horario: new Date()
            })
        },
            1000
        );
    }

    componentDidUpdate() {
        console.log("Atualizou!");
    }

    shouldComponentUpdate() {
        if (this.state.horario.getSeconds() % 2 === 0) {
            return true
        }
        return false
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return <p>{this.state.horario.toLocaleTimeString()}</p>
    }
}