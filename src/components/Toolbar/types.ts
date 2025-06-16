export interface ToolbarButtonProps {
    onClick: () => void;
    isActive?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
    tooltip?: string;
  }
  
export interface FontSizeOption {
    label: string;
    value: string;
    class: string;
}