import { Component } from 'react';
import {formConsumer} from '../../lib'

@formConsumer()
export class FormControl extends Component {

  // 包装 antd form的submit
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  };

  render() {
    let {children , ...other} = this.props
    return (
      <div onClick={this.handleSubmit} {...other}>
        {children}
      </div>
    )
  }
}
