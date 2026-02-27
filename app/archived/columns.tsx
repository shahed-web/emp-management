import { DataType } from '@/lib/data';
import type { TableColumnsType } from 'antd';
import { Form, Progress, Space, Switch } from 'antd';   
import Link from 'next/link';


export const columns = (openDrawer: (mode: string, id?: string) => void): TableColumnsType<DataType> => [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Department', dataIndex: 'department', key: 'department' },
  { title: 'Role', dataIndex: 'role', key: 'role' },
  {
    title: 'Performance',
    dataIndex: 'performance',
    key: 'performance',
    render: (value) => (<> <Progress
      percent={value}
      percentPosition={{ align: 'start', type: 'inner' }}
      size={[300, 20]}
      strokeColor= {value >50 ? "#B7EB8F" : "#FF4D4F"}
    /></>),
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (_, record) => (<><Link style={{marginRight: "10px"}} href={`/archived?mode=view&id=${record.id}`} onClick={() => openDrawer("view", record.id)}>View</Link> <Space vertical><Switch checkedChildren="Retrive" unCheckedChildren="Archive" /></Space></>),
  },
];
