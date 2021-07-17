import React, {Component} from 'react';
import Hello from "./components/hello";

class App extends Component {
    render() {
        return (
            <Hello hello={this.state.hello} />
        )
    }

    state = {
        hello: ''
    };

    componentDidMount() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        // The fetch can be the LoadBalancer for the Stakater-backend service
        // Using localhost would require port forwarding here
        fetch('http://localhost:8080/api/hello', {
            method: 'GET',
            headers: headers
        })
            .then(response => {
                return response.json()
            })
            .then((data) => {
                this.setState({ hello: data.name })
            })
            .catch(console.log)
    }
}

export default App;
