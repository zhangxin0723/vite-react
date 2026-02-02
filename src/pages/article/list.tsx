import React from 'react'
import GlobalTableForm from '@/global-components/GlobalTableForm'
import GlobalTable from '@/global-components/GlobalTable'
import GlobalContentTitle from '@/global-components/GlobalContentTitle'
import type { FormFiles } from '@/core/interface/common'
import './list.scss'
import type { MethodsColor } from '@/global-components/GlobalTable/index.d';
import type { TableProps } from 'antd'
import { useNavigate } from 'react-router'

const ArticleList: React.FC = () => {
  const navigate = useNavigate()

  const formFieldsOptions: Array<FormFiles> = [
    {
      label: '名称',
      name: 'name',
      type: 'Input',
      placeholder: '请输入名称',
      allowClear: true
    },
    {
      label: '类型',
      name: 'type',
      type: 'Select',
      allowClear: true,
      options: [{ value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'Yiminghe', label: 'yiminghe' },
      { value: 'disabled', label: 'Disabled' },]
    },
    {
      label: '日期',
      type: 'DatePicker',
      name: 'date',
    }
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  const data = new Array(100).fill(null).map((_, index) => ({
    key: index,
    name: `Edward King ${index}`,
    age: index + 1,
    address: `London, Park Lane no. ${index}`,
  }));

  const tableProp = {
    columns,
    dataSource: data,
    methods: [
      { color: 'primary' as MethodsColor, title: '查看', key: 'view' },
      { color: 'primary' as MethodsColor, title: '编辑', key: 'edit' },
      { color: 'danger' as MethodsColor, title: '删除', key: 'delete' },
      { color: 'primary' as MethodsColor, title: '测试', key: 'test' },
    ],
    methodsWidth: 200,
    pagination: {
      align: 'center',
      pageSize: 10,
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: (total) => `共 ${total} 条`,
    } as TableProps<unknown>['pagination']
  }

  const handleMethod = (e: { row: unknown; action: string }) => {
    console.log('handleMethod: ', e);
    if (e.action === 'view') {
      navigate(`/article/${e?.row?.key ?? ''}`)
    }
  }

  return <div className="article-container">
    <GlobalContentTitle />
    <GlobalTableForm formFieldsOptions={formFieldsOptions} />
    <GlobalTable {...tableProp} handleMethod={handleMethod} />
  </div>
}

export default ArticleList