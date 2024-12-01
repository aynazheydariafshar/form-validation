import { Delete, DeleteIcon } from "lucide-react";
import { Button } from "./ui/button";

export const ExperinceTable = ({ fields, remove }: any) => {
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
        {fields.map(
          (
            item: { experience: string; duration: number; id: number },
            index: number
          ) => (
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
          )
        )}
      </tbody>
    </table>
  );
};
