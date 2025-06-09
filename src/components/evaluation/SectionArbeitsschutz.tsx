import { useState } from 'react';
import { useEvaluationStore } from '../../store/useEvaluationStore';

export const SectionArbeitsschutz = () => {
  const { update } = useEvaluationStore();
  const [open, setOpen] = useState(true);
  const [zertifiziert, setZertifiziert] = useState<boolean | null>(null);

  const [punkte, setPunkte] = useState({
    politik: 0,
    fachkraft: 0,
    gefährdung: 0,
    datenblätter: 0,
    unterweisung: 0,
    system: 0,
  });

  const handle = (key: keyof typeof punkte, value: number) => {
    const neu = { ...punkte, [key]: value };
    setPunkte(neu);
    const summe = Object.values(neu).reduce((a, b) => a + b, 0);
    update('arbeitsschutz', summe);
  };

  return (
    <div className="border border-gray-300 rounded-md p-4 bg-white shadow-sm mb-6">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(!open)}>
        <h2 className="text-xl font-semibold">Arbeitsschutzmanagement</h2>
        <span className="text-sm text-gray-500">
          {zertifiziert === true ? '100 / 100 Punkte' : `${Object.values(punkte).reduce((a, b) => a + b, 0)} / 100 Punkte`}
        </span>
      </div>

      {open && (
        <div className="space-y-4 mt-4">
          <p>Zertifizierung nach OHSAS 18001 oder vergleichbar?</p>
          <div className="flex gap-4">
            <button
              className={`px-4 py-2 rounded ${zertifiziert ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
              onClick={() => {
                setZertifiziert(true);
                update('arbeitsschutz', 100);
              }}
            >
              Ja (100 Punkte)
            </button>
            <button
              className={`px-4 py-2 rounded ${zertifiziert === false ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
              onClick={() => {
                setZertifiziert(false);
                update('arbeitsschutz', 0);
              }}
            >
              Nein
            </button>
          </div>

          {zertifiziert === false && (
            <div className="space-y-2">
              {[
                ['politik', 'Arbeitsschutzpolitik'],
                ['fachkraft', 'Sicherheitsfachkraft vorhanden'],
                ['gefährdung', 'Gefährdungsbeurteilungen'],
                ['datenblätter', 'Sicherheitsdatenblätter & Anweisungen'],
                ['unterweisung', 'Sicherheitsunterweisungen'],
                ['system', 'Arbeitsschutzsystem (nicht zertifiziert)'],
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
                    <option value="0">-- wählen --</option>
                    <option value="20">Vorhanden / Dokumentiert (20)</option>
                    <option value="10">Teilweise vorhanden (10)</option>
                    <option value="0">Nicht vorhanden (0)</option>
                  </select>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
