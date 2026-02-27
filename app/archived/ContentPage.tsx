"use client"
import React, { useState } from 'react';
import { Button, Drawer, Space, Table } from 'antd';
import { columns } from './columns';
import { data, DataType } from '@/lib/mock-data';
import AppDrawer from '@/components/AppDrawer';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import EmployeeForm from './EmployeeForm';



const ContentPage: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState("create")
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const searchParams = useSearchParams();
    const modeQuery = searchParams.get("mode") || "create";
    React.useEffect(() => {
        setMode(modeQuery);
    }, [modeQuery])

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return(
  <div style={{ width: "100%" }}>
  <div style={{display: "flex", gap: "10px", marginBottom: "20px"}}>
      <Link href="/archived?mode=create" onClick={showDrawer}>
        <Button type="primary">Create Employee</Button>
      </Link>
      <Link href="/archived?mode=view" onClick={showDrawer}>
        <Button type="default">View Employee</Button>
      </Link>
  </div>

  <Table<DataType>
    columns={columns} 
    dataSource={data}
  />
  <AppDrawer open={open} onClose={onClose} title={mode} >
    {mode === "create" ? <EmployeeForm /> : mode === "edit" ? <p>Edit Form</p> : <p>View Form</p>}
  </AppDrawer>
  </div>
)};

export default ContentPage;