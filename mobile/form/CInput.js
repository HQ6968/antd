import { Component } from 'react';
import { createInput } from './decorator';
import {InputItem} from 'antd-mobile'

@createInput()
export class CInput extends Component {
  render() {
    let {name , label } = this.props
    return (
      <InputItem
        placeholder={label}
        clear
        {...this.props}
      >{label}</InputItem>
    );
  }
}
