export type MethodsColor = 'default' | 'primary' | 'danger' | 'blue' | 'purple' | 'cyan' | 'green' | 'magenta' | 'pink' | 'red' | 'orange' | 'yellow' | 'volcano' | 'geekblue' | 'lime' | 'gold';

interface GlobalTableMethods {
  title?: string
  key: string
  color?: MethodsColor
}
