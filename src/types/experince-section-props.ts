import { ExperinceItemType } from "./experince-item";

export interface ExperinceSectionPropsType {
  setExperienceData: React.Dispatch<React.SetStateAction<ExperinceItemType[]>>;
}
