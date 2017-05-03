import React from 'react';

export class ReactComponent extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default ReactComponent;
