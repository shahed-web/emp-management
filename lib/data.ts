export interface DataType {
  id: string;
  name: string;
  department: string;
  role: string;
  joiningDate: string; 
  status: "active" | "inactive" | "on_leave";
  performance: number; 
}
export const data: DataType[] = [
  {
    id: "1",
    name: "John Brown",
    department: "Engineering",
    role: "Frontend Developer",
    joiningDate: "2022-03-15",
    status: "active",
    performance: 88,
  },
  {
    id: "2",
    name: "Jim Green",
    department: "HR",
    role: "HR Manager",
    joiningDate: "2021-07-01",
    status: "active",
    performance: 92,
  },
  {
    id: "3",
    name: "Sara White",
    department: "Sales",
    role: "Sales Executive",
    joiningDate: "2023-01-10",
    status: "on_leave",
    performance: 76,
  },
  {
    id: "4",
    name: "Joe Black",
    department: "Engineering",
    role: "Backend Developer",
    joiningDate: "2020-11-25",
    status: "inactive",
    performance: 81,
  },
];