import { Delete, DeleteIcon } from "lucide-react";
import { Button } from "./ui/button";
import { ExperinceItemType } from "../types/experince-item";
import { ExperinceTablePropsType } from "../types/experince-table-props";

export const ExperinceTable = ({ fields, remove }: ExperinceTablePropsType) => {
  return (
    <table className="min-w-full mt-4 text-white bg-gray-800">
      <thead>
        <tr>
          <th className="border rounded-sm px-4 py-2">Experience</th>
          <th className="border px-4 py-2">Duration (Months)</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {fields.map((item: ExperinceItemType, index: number) => (
          <tr key={item.id}>
            <td align="center" className="border px-4 py-2">
              {item.experience}
            </td>
            <td align="center" className="border px-4 py-2">
              {item.duration}
            </td>
            <td align="center" className="border px-4 py-2">
              <Button
                className="bg-red-600 hover:bg-red-700"
                onClick={() => remove(item.id, index)}
                title="Remove"
              >
                <DeleteIcon size={18} />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
