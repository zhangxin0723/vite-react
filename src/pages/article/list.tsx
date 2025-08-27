import React from 'react'
import GlobalTableForm from '@/global-components/GlobalTableForm'
import type { FormFiles } from '@/core/interface/common'

const ArticleList: React.FC = () => {
  const formFieldsOptions: Array<FormFiles> = [{
    label: '名称',
    name: 'name',
    type: 'Input',
    placeholder: '请输入名称',
    allowClear: true
  }, {
    label: '类型',
    name: 'type',
    type: 'Select',
    allowClear: true,
    options: [{ value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },
    { value: 'disabled', label: 'Disabled' },]
  }, {
    label: '日期',
    type: 'DatePicker',
    name: 'date',
  }]

  return <div className="">
    <GlobalTableForm formFieldsOptions={formFieldsOptions} />
  </div>
}

export default ArticleList