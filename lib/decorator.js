import React from 'react';
import { Form } from 'antd';

export const FormContext = React.createContext({});
export const CFormContext = React.createContext({});


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


export const formatValues = (values) => {
  let newVal = {};
  for (let field in values) {
    newVal[field] = {
      value: values[field],
    };
  }
  return newVal;
};

export const infer = (data , isReal) => {
  return isReal ? data : {}
}
