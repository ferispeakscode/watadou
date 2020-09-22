import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { WAGASHI } from '../shared/wagashi';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          wagashi: WAGASHI
        };
    }

    render() {
        return <Directory wagashi={this.state.wagashi} />;
    }
}

export default Main;