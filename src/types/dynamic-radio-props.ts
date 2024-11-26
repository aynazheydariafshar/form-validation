export interface RadioItem {
  label: string;
  value: string;
}
export interface DynamicRadioProps {
  title: string;
  radioItems: RadioItem[];
  name: string;
}
