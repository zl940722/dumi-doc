/**
 * BarChart properties
 */

export interface BarChartPropsType {
  /** 组件类型 */
  type: "ColorPicker"| 'DirectionInput' | 'Collapse'| 'Panel' | 'Input';
  /** 组件FormItem样式 */
  style?: React.CSSProperties;
  /** 组件FormItem文本 */
  label?: string;
  /** 组件form对象 */
  name?: (string | number)[];
  /** 提示信息 */
  tooltip?: string;
  /** Switch节点值 */
  valuePropName?: string;
  /** 是否需要更新 */
  shouldUpdate?: any;
  /** 表单验证规则 */
  rules?: any;
  /** 表单属性，非FormItem属性 */
  props?: any;
  /** 子节点 */
  list?: any[];
  /** FormList中删除操作 */
  minus?: {
    style?: { [key: string]: number | string };
  };
  /** FormList中添加操作 */
  add?: {
    params?: string | object;
    text: string;
    [key: string]: any;
  };
  /** 交互行为 */
  action?: {
    show?: {
      name: (string | number)[];
      value: any;
    };
    onLoad?: any;
  };
}
