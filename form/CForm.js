import { Component } from 'react';
import { Form } from 'antd';
import { CFormContext, formConsumer } from './decorator';


@formConsumer() // 注入 form 属性
export class CForm extends Component {
  filterItemProps = (item, layout) => {
    if (layout === 'vertical' || layout === 'inline') {
      return { label: item.label };
    }
    return item;
  };

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
    let formItemLayout = {
      labelCol: { span: 5, offset: 0 },
      wrapperCol: { span: 19, offset: 0 },
    };

    return (
      <Form {...{ ...this.props , onSubmit: this.handleSubmit}}>
        <CFormContext.Provider
          value={{ ...this.props , formItemLayout: this.filterItemProps(formItemLayout , this.props.layout) }}>
          {this.props.children}
        </CFormContext.Provider>
      </Form>
    );
  }
}
