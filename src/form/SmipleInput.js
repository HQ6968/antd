import { Component } from 'react';
import { createInput } from './decorator';

@createInput()
export class SimpleInput extends Component {
  render() {
    return (
      <input {...this.props}/>
    );
  }
}
