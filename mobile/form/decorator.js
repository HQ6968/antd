import React from 'react';
import { CFormContext, FormContext } from '../../lib';

const combError = function( {getFieldError} , name) {
  let errs = getFieldError(name)

  let ret = {error: false}
  if (errs && errs.length > 0) {
    ret.error = true
    ret.extra = errs[0]
  }
  return ret
}

export const createInput = () => Comp => {
  return props => {
    const { name } = props;
    return (
      <FormContext.Consumer>
        {form => (
          <CFormContext.Consumer>
            {({ rules }) => (
              form.getFieldDecorator(name, {
                rules: rules ? rules[name] : [],
              })(<Comp {...props} {...combError(form , name)}/>)
            )}
          </CFormContext.Consumer>
        )}
      </FormContext.Consumer>
    );
  };
};

