import { Component } from 'react';
import { Form } from 'antd';
import { CFormContext, formConsumer } from '../../lib';

@formConsumer() // 注入 form 属性
export class CForm extends Component {

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
    return (
      <Form {...{ ...this.props , onSubmit: this.handleSubmit}}>
        <CFormContext.Provider
          value={{ ...this.props }}>
          {this.props.children}
        </CFormContext.Provider>
      </Form>
    );
  }
}
