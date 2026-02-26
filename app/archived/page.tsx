"use client"
import React from 'react';
import { Table } from 'antd';
import { columns } from './columns';
import { data, DataType } from '@/lib/mock-data';



const page: React.FC = () => (
  <Table<DataType>
    columns={columns} 
    dataSource={data}
  />
);

export default page;