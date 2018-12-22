import React from 'react';
import { Form } from 'antd';
import { FormContext, CFormContext , infer} from '../lib';
// 给 input 注入 form 和 CFormContext 值 , 并且统一处理 Form.Item
export const createInput = () => Comp => {
  return props => {
    const { name, label } = props;
    return (
      <FormContext.Consumer>
        {form => (
          <CFormContext.Consumer>
            {({ rules, formItemLayout }) => (
              <Form.Item {...infer(formItemLayout, label)} label={label}>
                {
                  form.getFieldDecorator(name, {
                    rules: rules ? rules[name] : [],
                  })(
                    <Comp {...props}/>,
                  )
                }
              </Form.Item>
            )}
          </CFormContext.Consumer>
        )}
      </FormContext.Consumer>
    );
  };
};
