import { Component } from 'react';
import { Input } from 'antd';
import { createInput } from './decorator';

@createInput()
export class CInput extends Component {
  render() {
    return (
      <Input {...{placeholder:this.props.label,...this.props}}/>
    );
  }
}

