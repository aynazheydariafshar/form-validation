import { Button } from "./ui/button";

export const ExperinceTable = ({ fields, remove }: any) => {
  return (
    <table className="min-w-full mt-4">
      <thead>
        <tr>
          <th className="border px-4 py-2">Experience</th>
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
              <td className="border px-4 py-2">{item.experience}</td>
              <td className="border px-4 py-2">{item.duration}</td>
              <td className="border px-4 py-2">
                <Button onClick={() => remove(index)} title="Remove">
                  d
                </Button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
