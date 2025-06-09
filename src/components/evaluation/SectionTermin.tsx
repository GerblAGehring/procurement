import { useEvaluationStore } from '../../store/useEvaluationStore';
import { useState } from 'react';

export const SectionTermin = () => {
  const [open, setOpen] = useState(true);
  const { data, update } = useEvaluationStore();

  const options = [
    { label: '≥ 85% Liefertreue', value: 100 },
    { label: '≥ 75%', value: 80 },
    { label: '≥ 65%', value: 60 },
    { label: '≥ 50%', value: 30 },
    { label: '< 50%', value: 0 },
  ];

  return (
    <div className="border border-gray-300 rounded-md p-4 bg-white shadow-sm mb-6">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(!open)}>
        <h2 className="text-xl font-semibold">Termintreue</h2>
        <span className="text-sm text-gray-500">{data.termin} / 100 Punkte</span>
      </div>
      {open && (
        <div className="space-y-2 mt-4">
          {options.map((opt) => (
            <label key={opt.value} className="block">
              <input type="radio" name="termin" value={opt.value}
                checked={data.termin === opt.value}
                onChange={() => update('termin', opt.value)}
                className="mr-2" />
              {opt.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
