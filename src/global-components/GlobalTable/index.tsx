import React from 'react'
import { Table, Button, Dropdown } from 'antd';
import type { TableProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { GlobalTableMethods } from './index.d';
import './index.scss'

interface GlobalTableProps {
  columns: TableProps<unknown>['columns'];
  dataSource: Array<unknown>;
  methods: Array<GlobalTableMethods>;
  handleMethod: (e: { row: unknown; action: string }) => void;
  methodsWidth?: number;
  pagination?: TableProps<unknown>['pagination'];
}

interface TableMethodsProps {
  record: unknown;
  methods: Array<GlobalTableMethods>;
  handleMethod: (e: { row: unknown; action: string }) => void;
}

const TableMethods: React.FC<TableMethodsProps> = (props) => {
  const { methods, record, handleMethod } = props

  const showBtns = methods.slice(0, 2)
  const moreBtns = methods.slice(2)

  const handleMenuClick = (e: { key: string }) => {
    handleMethod({ row: record, action: e.key })
  }

  return (
    <>
      {showBtns.length && showBtns.map((method) => (
        <Button key={method.key} color={method.color} variant="link" onClick={() => { handleMenuClick({ key: method.key }) }}>
          {method.title}
        </Button>
      ))}
      {moreBtns.length && <Dropdown
        trigger={['click', 'hover']}
        menu={{
          items: moreBtns.map((method) => ({
            key: method.key,
            label: method.title
          })),
          onClick: handleMenuClick,
        }}
        arrow={true}
      >
        <Button key="more" color="primary" variant="link">
          更多 <DownOutlined />
        </Button>
      </Dropdown>}
    </>
  )
}

const GlobalTable: React.FC<GlobalTableProps> = (props) => {
  const { columns, dataSource, methods, handleMethod, methodsWidth, pagination } = props

  const tableColumns = [...(columns ?? [])]
  if (methods && methods.length > 0) {
    tableColumns.push({
      title: '操作',
      key: 'methods',
      fixed: 'right',
      width: methodsWidth || 200,
      render: (_, record) => <TableMethods record={record} methods={methods} handleMethod={handleMethod} />
    })
  }

  return (
    <div className='global-table-container'>
      <Table columns={tableColumns} dataSource={dataSource} pagination={pagination} />
    </div>
  )
}

export default GlobalTable
