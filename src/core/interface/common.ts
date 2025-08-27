export interface FormSelectFieldValue {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface FormFiles {
  label: string;
  type: 'Input' | 'Select' | 'DatePicker';
  name: string | Array<string>;
  placeholder?: string;
  allowClear?: boolean;
  options?: Array<FormSelectFieldValue>
}