import { DataType } from '@/lib/mock-data';
import type { TableColumnsType } from 'antd';
import { Form, Progress, Space, Switch } from 'antd';   
import Link from 'next/link';


export const columns: TableColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  {
    title: 'Performance',
    dataIndex: 'performance',
    key: 'x',
    render: () => (<> <Progress
      percent={50}
      percentPosition={{ align: 'start', type: 'inner' }}
      size={[300, 20]}
      strokeColor="#B7EB8F"
    /></>),
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => (<><Link style={{marginRight: "10px"}} href="/archived?mode=view">View</Link> <Space vertical><Switch checkedChildren="Retrive" unCheckedChildren="Archive" /></Space></>),
  },
];
