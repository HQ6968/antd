import React from 'react';
import { Form } from 'antd';

export const FormContext = React.createContext({});
export const CFormContext = React.createContext({});

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
                    rules: rules?rules[name]:[],
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


// 注入 form props
export const formConsumer = () => Comp => {
  return props => {
    return (
      <FormContext.Consumer>
        {form => (
          <Comp {...props} form={form}/>
        )}
      </FormContext.Consumer>
    );
  };
};

// 注入 CFormContext value
export const cformConsumer = () => Comp => {
  return props => {
    return (
      <CFormContext.Consumer>
        {form => (
          <Comp {...props} form={form}/>
        )}
      </CFormContext.Consumer>
    );
  };
};

// Form.create 包装 ，给提供 FormContext.Provider  注入值
export const cform = (options) => Comp => {

  return Form.create(options)(props => {
      return (
        <FormContext.Provider value={props.form}>
          <Comp {...props}/>
        </FormContext.Provider>
      );
    },
  );
};


const formatValues = (values) => {
  let newVal = {};
  for (let field in values) {
    newVal[field] = {
      value: values[field],
    };
  }
  return newVal;
};

const infer = (data , isReal) => {
  return isReal ? data : {}
}
