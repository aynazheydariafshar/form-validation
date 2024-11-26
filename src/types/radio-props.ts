export interface RadioItem {
  label: string;
  value: string;
}
export interface RadioProps {
  title: string;
  radioItems: RadioItem[];
  name: string;
}
