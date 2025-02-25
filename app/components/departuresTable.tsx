const departures = [
  { city: "Beograd", time: "10:00", surcharge: "10" },
  { city: "Leskovac", time: "12:30", surcharge: "30" },
  { city: "Nis", time: "14:15", surcharge: "25" },
];

export default function DeparturesTable() {
  return (
    <table className="min-w-full text-text table-auto border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b text-left">Grad</th>
          <th className="py-2 px-4 border-b text-left">Vreme</th>
          <th className="py-2 px-4 border-b text-left">Doplata</th>
        </tr>
      </thead>
      <tbody>
        {departures.map((departure, index) => (
          <tr key={index} className="border-b hover:bg-gray-50">
            <td className="py-2 px-4">{departure.city}</td>
            <td className="py-2 px-4">{departure.time}</td>
            <td className="py-2 px-4">{departure.surcharge}€</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
