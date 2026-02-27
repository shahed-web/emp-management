"use client"
import { Drawer } from 'antd'

interface AppDrawerProps {
  title: string;
  onClose: () => void;
  open: boolean;
  children?: React.ReactNode;
}

const AppDrawer = ({title, onClose, open, children}: AppDrawerProps) => {
  
  return (
      <Drawer
        title={title || "Employee Details"}
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={open}
      >
        {children}
      </Drawer>
  )
}

export default AppDrawer
