import { DataType } from '@/lib/mock-data';
import type { TableColumnsType } from 'antd';

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Form, Space, Switch } from 'antd';   


export const columns: TableColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => (<><a style={{marginRight: "10px"}}>View</a> <Space vertical><Form.Item name="archived" valuePropName="checked" initialValue={false} >
    <Switch checkedChildren="Retrive" unCheckedChildren="Archive" />
  </Form.Item></Space></>),
  },
];
