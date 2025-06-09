import { useState } from 'react';
import { useEvaluationStore } from '../../store/useEvaluationStore';

export const SectionUmwelt = () => {
  const { update } = useEvaluationStore();
  const [open, setOpen] = useState(true);
  const [zertifiziert, setZertifiziert] = useState<boolean | null>(null);

  const [punkte, setPunkte] = useState({
    politik: 0,
    beauftragter: 0,
    gefahrenvermeidung: 0,
    produktherstellung: 0,
    managementsystem: 0,
  });

  const handle = (key: keyof typeof punkte, value: number) => {
    const neu = { ...punkte, [key]: value };
    setPunkte(neu);
    const summe = Object.values(neu).reduce((a, b) => a + b, 0);
    update('umwelt', summe);
  };

  return (
    <div className="border border-gray-300 rounded-md p-4 bg-white shadow-sm mb-6">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(!open)}>
        <h2 className="text-xl font-semibold">Umweltmanagement</h2>
        <span className="text-sm text-gray-500">
          {zertifiziert === true ? '100 / 100 Punkte' : `${Object.values(punkte).reduce((a, b) => a + b, 0)} / 100 Punkte`}
        </span>
      </div>

      {open && (
        <div className="space-y-4 mt-4">
          <p>Besitzt der Lieferant ein Umweltmanagement-System nach ISO 14001?</p>
          <div className="flex gap-4">
            <button
              className={`px-4 py-2 rounded ${zertifiziert ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
              onClick={() => {
                setZertifiziert(true);
                update('umwelt', 100);
              }}
            >
              Ja (100 Punkte)
            </button>
            <button
              className={`px-4 py-2 rounded ${zertifiziert === false ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
              onClick={() => {
                setZertifiziert(false);
                update('umwelt', 0);
              }}
            >
              Nein
            </button>
          </div>

          {zertifiziert === false && (
            <div className="space-y-2">
              <p className="font-semibold">Bitte Unterpunkte bewerten:</p>

          <div className="flex justify-between items-center">
            <label>Umweltpolitik / -programm</label>
                <select
                    className={`ml-4 border rounded px-2 py-1`}
                    onChange={(e) => handle('politik', Number(e.target.value))}
                    /*value={punkte.auftragsBestätigung}  Punkte Anzeigen! */
                >
                    <option value="">-- wählen --</option>
                    <option value="10">Schriftlich (10)</option>
                    <option value="5">Mündlich (5)</option>
                    <option value="0">Keine (0)</option>
                </select>
                
            </div>

            <div className="flex justify-between items-center">
            <label>Umweltbeauftragter</label>
            <select className={`ml-4 border rounded px-2 py-1`} onChange={(e) => handle('beauftragter', Number(e.target.value))}>
              <option value="">-- wählen --</option>
              <option value="5">Vorhanden (5)</option>
              <option value="0">Nicht vorhanden (0)</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <label>Regelungen zur Umweltgefahrenvermeidung</label>
            <select className={`ml-4 border rounded px-2 py-1`} onChange={(e) => handle('gefahrenvermeidung', Number(e.target.value))}>
              <option value="">-- wählen --</option>
              <option value="5">Vorhanden (5)</option>
              <option value="0">Nicht vorhanden (0)</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <label>Regeln zur umweltverträglichen Produktherstellung</label>
            <select className={`ml-4 border rounded px-2 py-1`} onChange={(e) => handle('produktherstellung', Number(e.target.value))}>
              <option value="">-- wählen --</option>
              <option value="5">Vorhanden (5)</option>
              <option value="0">Nicht vorhanden (0)</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <label>Installiertes System (nicht zertifiziert)</label>
            <select className={`ml-4 border rounded px-2 py-1`} onChange={(e) => handle('managementsystem', Number(e.target.value))}>
              <option value="">-- wählen --</option>
              <option value="5">Vorhanden (5)</option>
              <option value="0">Nicht vorhanden (0)</option>
            </select>
          </div>
              
            </div>
          )}
        </div>
      )}
    </div>
  );
};
