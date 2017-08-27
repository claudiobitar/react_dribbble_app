import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dribbble from './components/dribbble';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dribbble />
    )
  }
}

ReactDOM.render(
  <App />
  , document.querySelector('.container')
);

