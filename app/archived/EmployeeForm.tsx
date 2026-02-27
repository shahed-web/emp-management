"use client";

import { Form, Input, Select, DatePicker, InputNumber, Button } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

type EmployeeFormValues = {
  name: string;
  department: string;
  role: string;
  joiningDate: [Dayjs, Dayjs];
  status: string;
  performance: number;
};

const EmployeeForm: React.FC = () => {
  const [form] = Form.useForm<EmployeeFormValues>();

  const handleSubmit = (values: EmployeeFormValues) => {
    console.log("Form Values:", {
      ...values,
      joiningDate: values.joiningDate.map(d => d.format("YYYY-MM-DD")),
    });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Name is required" }]}
      >
        <Input placeholder="Enter employee name" />
      </Form.Item>

      <Form.Item
        label="Department"
        name="department"
        rules={[{ required: true, message: "Department is required" }]}
      >
        <Select placeholder="Select department">
          <Select.Option value="engineering">Engineering</Select.Option>
          <Select.Option value="hr">HR</Select.Option>
          <Select.Option value="sales">Sales</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Role"
        name="role"
        rules={[{ required: true, message: "Role is required" }]}
      >
        <Select placeholder="Select role">
          <Select.Option value="developer">Developer</Select.Option>
          <Select.Option value="manager">Manager</Select.Option>
          <Select.Option value="designer">Designer</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Joining Date"
        name="joiningDate"
        rules={[
          { required: true, message: "Joining date is required" },
          {
            validator: (_, value) => {
              if (!value) return Promise.resolve();
              const today = dayjs().endOf("day");
              const hasFutureDate = value.some((d: Dayjs) => d.isAfter(today));
              return hasFutureDate
                ? Promise.reject(
                    new Error("Future dates are not allowed")
                  )
                : Promise.resolve();
            },
          },
        ]}
      >
        <RangePicker
          style={{ width: "100%" }}
          disabledDate={(current) => current && current > dayjs().endOf("day")}
        />
      </Form.Item>
      <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true, message: "Status is required" }]}
      >
        <Select placeholder="Select status">
          <Select.Option value="active">Active</Select.Option>
          <Select.Option value="inactive">Inactive</Select.Option>
          <Select.Option value="on_leave">On Leave</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Performance"
        name="performance"
        rules={[
          { required: true, message: "Performance score is required" },
          { type: "number", min: 1, max: 10, message: "Range: 1–10" },
        ]}
      >
        <InputNumber
          min={1}
          max={10}
          style={{ width: "100%" }}
          placeholder="Rate from 1 to 10"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EmployeeForm;