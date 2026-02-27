"use client"
import React, { useState } from 'react';
import { Button,  Table } from 'antd';
import { columns } from './columns';
import { data, DataType } from '@/lib/data';
import AppDrawer from '@/components/AppDrawer';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import EmployeeForm from './EmployeeForm';
import EmployeeCard from './EmployeeCard';



const ContentPage: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState("create")
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const router = useRouter()
    const searchParams = useSearchParams();
    const modeQuery = searchParams.get("mode") || "create";
    React.useEffect(() => {
        setMode(modeQuery);
    }, [modeQuery])

    const openDrawer = (mode: string, id?: string) => {
      setMode(mode);
      setSelectedId(id ?? null);
      setOpen(true);
    };

    const showDrawer = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
      router.replace("/archived");
    };

    return(
    <div style={{ width: "100%" }}>
    <div style={{display: "flex", gap: "10px", marginBottom: "20px"}}>
        <Link href="/archived?mode=create" onClick={showDrawer}>
          <Button type="primary">Create Employee</Button>
        </Link>
    </div>

    <Table<DataType>
      columns={columns(openDrawer)} 
      dataSource={data}
    />
    <AppDrawer open={open} onClose={onClose} title={mode} >
      {mode === "create" ? <EmployeeForm /> : mode === "edit" ? <p>Edit Form</p> : <EmployeeCard employee={data.find(d => d.id === selectedId) || data[0]} />}
    </AppDrawer>
    </div>
)};

export default ContentPage;