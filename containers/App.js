/* import React, {Component} from 'react'; */

/* export default class App extends Component {
    render () {
        return <p>This is my new react app</p>
    }
} */

import React from 'react';

class App extends React.Component {
    render() {
        return (
        <div>
            <h1>This is Header </h1>
            <h2>This is Second Header </h2>
            <p>This is a Paragraph </p>
        </div>
        );
    }
}

export default App;