import { ExperinceItemType } from "./experince-item";

export interface ExperinceTablePropsType {
  fields: ExperinceItemType[];
  remove: (id: string, index: number) => void;
}
