import React from 'react'
import "./index.scss"
import { Form, Input, Button, Select, Space, DatePicker } from "antd"
import type { FormFiles } from "@/core/interface/common";
import type dayjs from 'dayjs';

interface GlobalTableFormProps {
  formFieldsOptions?: Array<FormFiles>;
}

const GlobalTableForm: React.FC<GlobalTableFormProps> = (props) => {
  const { formFieldsOptions = [] } = props
  const [form] = Form.useForm();
  console.log('form: ', form);

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const changeDatePicker = (date: dayjs.Dayjs, dateString: string | Array<string>, name: string | Array<string>) => {
    // form.setFieldsValue({ [name]: dateString })
    console.log(date, dateString, name);
  }

  return (
    <div className='search-container'>
      <div className="left-table-filter">
        <Form form={form} layout="inline" onFinish={onFinish}>
          {
            formFieldsOptions.map((field, index) => (
              <Form.Item key={index} label={field.label} name={field.name}>
                {
                  field.type == "Input" && <Input style={{ width: "200px" }} placeholder={field.placeholder || '请输入'} allowClear={field.allowClear} />
                }
                {
                  field.type == "Select" && <Select
                    style={{ width: "200px" }}
                    placeholder={field.placeholder || '请选择'}
                    allowClear={field.allowClear}
                    options={field.options || []}
                  />
                }
                {
                  field.type == "DatePicker" && <DatePicker style={{ width: "200px" }} format="YYYY-MM-DD" allowClear={field.allowClear} onChange={(date, dateString) => {
                    changeDatePicker(date, dateString, field.name)
                  }} />
                }
              </Form.Item>
            ))
          }
        </Form>
      </div>
      <div className="right-btn">
        <Space>
          <Button>重置</Button>
          <Button type='primary' ghost htmlType="submit" onClick={() => form.submit()}>查询</Button>
        </Space>
      </div>
    </div>
  )
}

export default GlobalTableForm