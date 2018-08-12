import React, { Component } from 'react';
import axios from 'axios';

export class Repos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: this.props.match.params.user,
            repos: []
        };
    }

    async componentDidMount() {
        await axios
            .get(`https://api.github.com/users/${this.state.username}/repos`)
            .then(repos => {
                this.setState({ repos: repos.data });
            })
            .catch(err => {
                alert(err);
            });
        console.log(this.state.repos);
    }
    render() {
        return (
            <ul>
                {this.state.repos.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.svn_url}>{repo.name}</a>
                    </li>
                ))}
            </ul>
        );
    }
}


export default Repos;