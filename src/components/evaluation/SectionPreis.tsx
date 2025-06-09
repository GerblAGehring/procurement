import { useEvaluationStore } from '../../store/useEvaluationStore';
import { useState } from 'react';

export const SectionPreis = () => {
  const [open, setOpen] = useState(true);
  const { data, update } = useEvaluationStore();

  const options = [
  { label: 'Preis entspricht Vorstellungen', value: 100 },
  { label: '2–5% höher', value: 80 },
  { label: '5–10% höher', value: 60 },
  { label: '10–20% höher', value: 30 },
  { label: 'Unverhältnismäßig', value: 0 },
    ];

  return (
    <div className="border border-gray-300 rounded-md p-4 bg-white shadow-sm mb-6">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(!open)}>
        <h2 className="text-xl font-semibold">Preis</h2>
        <span className="text-sm text-gray-500">{data.preis} / 100 Punkte</span>
      </div>
      {open && (
        <div className="space-y-2 mt-4">
          {options.map((opt) => (
            <label key={opt.value} className="block">
              <input type="radio" name="preis" value={opt.value}
                checked={data.preis === opt.value}
                onChange={() => update('preis', opt.value)}
                className="mr-2" />
              {opt.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
