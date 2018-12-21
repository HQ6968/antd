import {Component} from 'react'
import {Form , Select} from 'antd';
import {FormContext , createInput} from './decorator';

@createInput()
export class CSelect extends Component {

  render(){
    let {data} = this.props
    return (
      <Select {...this.props}>
        {
          data.map( (v , i ) => (
            <Select.Option key={i} value={v.value}>{v.label}</Select.Option>
          ))
        }
      </Select>
    )
  }
}
