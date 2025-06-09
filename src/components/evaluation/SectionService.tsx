import { useState } from 'react';
import { useEvaluationStore } from '../../store/useEvaluationStore';

export const SectionService = () => {
  const { update, data } = useEvaluationStore();
  const [open, setOpen] = useState(true);

  const [punkte, setPunkte] = useState({
    angebotsdauer: 0,
    verbesserung: 0,
    änderungen: 0,
    nacharbeit: 0,
    abholung: 0,
    flexibilität: 0,
  });

  const handle = (key: keyof typeof punkte, value: number) => {
    const neu = { ...punkte, [key]: value };
    setPunkte(neu);
    const summe = Object.values(neu).reduce((a, b) => a + b, 0);
    update('service', summe);
  };

  return (
    <div className="border border-gray-300 rounded-md p-4 bg-white shadow-sm mb-6">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(!open)}>
        <h2 className="text-xl font-semibold">Service</h2>
        <span className="text-sm text-gray-500">{data.service} / 100 Punkte</span>
      </div>

      {open && (
        <div className="space-y-4 mt-4">
          {[
            ['angebotsdauer', 'Dauer der Angebotserstellung'],
            ['verbesserung', 'Vorschläge zur Produktverbesserung'],
            ['änderungen', 'Reaktion auf Änderungswünsche'],
            ['nacharbeit', 'Nacharbeit bei Beanstandung'],
            ['abholung', 'Abholung fehlerhafter Ware'],
            ['flexibilität', 'Flexibilität bei Bedarfsschwankungen'],
          ].map(([key, label]) => (
            <div key={key} className="flex justify-between items-center">
              <label>{label}</label>
              <select
                className={`ml-4 border rounded px-2 py-1 ${
                  punkte[key as keyof typeof punkte] === 0 ? 'bg-red-100' : 'bg-white'
                }`}
                onChange={(e) => handle(key as keyof typeof punkte, Number(e.target.value))}
                value={punkte[key as keyof typeof punkte]}
              >
                <option value="">-- wählen --</option>
                <option value="20">Sehr gut (20)</option>
                <option value="15">Gut (15)</option>
                <option value="10">In Ordnung (10)</option>
                <option value="5">Verbesserbar (5)</option>
                <option value="0">Unzureichend (0)</option>
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
