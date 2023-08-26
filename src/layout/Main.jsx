import React from "react"
import { Movies } from "../components/Movies";

class Main extends React.Component {

    state = {
        movies: []
    };

    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=926935bd&s=matrix')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }

    render() {
        const {movies} = this.state;

        return <main className="container content">
            {
                movies.length ? <Movies movies={this.state.movies} /> : <h4>Loading...</h4>
            }
        </main>
    }
}

export { Main }