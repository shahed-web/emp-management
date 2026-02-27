"use client";

import { Card, Descriptions, Tag, Progress } from "antd";
import dayjs from "dayjs";

type Employee = {
  id: string;
  name: string;
  department: string;
  role: string;
  joiningDate: string;
  status: "active" | "inactive" | "on_leave";
  performance: number;
};

const statusColorMap: Record<Employee["status"], string> = {
  active: "green",
  inactive: "red",
  on_leave: "orange",
};

const statusLabelMap: Record<Employee["status"], string> = {
  active: "Active",
  inactive: "Inactive",
  on_leave: "On Leave",
};

interface Props {
  employee: Employee;
}

const EmployeeCard: React.FC<Props> = ({ employee }) => {
  return (
    <Card
      title={employee.name}
      style={{ width: "100%" }}
    >
      <Descriptions column={1} size="middle">
        <Descriptions.Item label="Department">
          {employee.department}
        </Descriptions.Item>

        <Descriptions.Item label="Role">
          {employee.role}
        </Descriptions.Item>

        <Descriptions.Item label="Joining Date">
          {dayjs(employee.joiningDate).format("DD MMM YYYY")}
        </Descriptions.Item>

        <Descriptions.Item label="Status">
          <Tag color={statusColorMap[employee.status]}>
            {statusLabelMap[employee.status]}
          </Tag>
        </Descriptions.Item>

        <Descriptions.Item label="Performance">
          <Progress
            percent={employee.performance}
            size="small"
            status={
              employee.performance >= 80
                ? "success"
                : employee.performance >= 50
                ? "normal"
                : "exception"
            }
          />
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default EmployeeCard;