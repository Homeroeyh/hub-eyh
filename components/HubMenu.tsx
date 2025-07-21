
import { useEffect, useState } from "react";

const SHEET_ID = "1ai25gMEiqcvhLYQUCr_k6V5cWfpMA9RqsBGsqimNJkw";
const SHEET_NAME = "HUB";

export default function HubMenu() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://opensheet.elk.sh/${SHEET_ID}/${SHEET_NAME}`)
      .then((res) => res.json())
      .then((rows) => {
        setData(rows);
        setLoading(false);
      });
  }, []);

  const grouped = data.reduce((acc, row) => {
    if (!acc[row.SECTOR]) acc[row.SECTOR] = {};
    if (!acc[row.SECTOR][row["ÁREA"]]) acc[row.SECTOR][row["ÁREA"]] = [];
    acc[row.SECTOR][row["ÁREA"]].push(row);
    return acc;
  }, {});

  if (loading) return <p className="p-4">Cargando HUB...</p>;

  return (
    <div className="p-6 text-sm font-sans">
      {Object.entries(grouped).map(([sector, areas]) => (
        <div key={sector} className="mb-4">
          <h2 className="text-lg font-bold text-blue-700 mb-1">{sector}</h2>
          <div className="ml-4">
            {Object.entries(areas).map(([area, sistemas]) => (
              <div key={area} className="mb-2">
                <h3 className="text-md font-semibold text-gray-800 mb-1">{area}</h3>
                <ul className="ml-4 list-disc text-blue-600">
                  {sistemas.map((s, i) => (
                    <li key={i}>
                      <a
                        href={s.LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {s.SISTEMA}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
