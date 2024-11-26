export interface RadioItem {
  label: string;
  value: string;
  name: string;
}

export interface DynamicRadioProps {
  title: string;
  radioItems: RadioItem[];
}
