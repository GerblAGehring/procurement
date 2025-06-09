import { useState } from 'react';
import { useEvaluationStore } from '../../store/useEvaluationStore';

export const SectionQualitätssicherung = () => {
  const { update } = useEvaluationStore();
  const [hasISO9001, setHasISO9001] = useState<boolean | null>(null);

  const [punkte, setPunkte] = useState({
    auftragsBestätigung: 0,
    arbeitsunterlagen: 0,
    fertigungssteuerung: 0,
    prüfung: 0,
    ausbildung: 0,
    instandhaltung: 0,
    maschinenpark: 0,
  });

  const handleUnterpunkt = (key: keyof typeof punkte, value: number) => {
    const neu = { ...punkte, [key]: value };
    setPunkte(neu);
    const summe = Object.values(neu).reduce((a, b) => a + b, 0);
    update('qualitätssicherung', summe);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Qualitätssicherung</h2><p className="text-sm text-gray-600 mt-2">
        Aktuelle Punktzahl: {hasISO9001 ? 100 : Object.values(punkte).reduce((a, b) => a + b, 0)} / 100
        </p>
      


      <p>Besitzt der Lieferant ein QM-System nach DIN EN ISO 9001?</p>
      <div className="flex gap-4">
        <button
          onClick={() => {
            setHasISO9001(true);
            update('qualitätssicherung', 100);
          }}
          className={`px-4 py-2 rounded ${hasISO9001 === true ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
        >
          Ja (100 Punkte)
        </button>
        <button
          onClick={() => {
            setHasISO9001(false);
            update('qualitätssicherung', 0); // wird durch Unterpunkte ersetzt
          }}
          className={`px-4 py-2 rounded ${hasISO9001 === false ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
        >
          Nein
        </button>
      </div>

      {hasISO9001 === false && (
        <div className="space-y-4 mt-4">
          <p className="font-semibold">Bitte Unterpunkte bewerten:</p>

          <div className="flex justify-between items-center">
            <label>Auftrags- & Terminbestätigung:</label>
                <select
                    className={`ml-4 border rounded px-2 py-1`}
                    onChange={(e) => handleUnterpunkt('auftragsBestätigung', Number(e.target.value))}
                    /*value={punkte.auftragsBestätigung}  Punkte Anzeigen! */
                >
                    <option value="">-- wählen --</option>
                    <option value="10">Schriftlich (10)</option>
                    <option value="5">Mündlich (5)</option>
                    <option value="0">Keine (0)</option>
                </select>
                
            </div>

          <div className="flex justify-between items-center">
            <label>Erstellung von Arbeitsunterlagen:</label>
            <select className={`ml-4 border rounded px-2 py-1`}
            onChange={(e) => handleUnterpunkt('arbeitsunterlagen', Number(e.target.value))}>
              <option value="">-- wählen --</option>
              <option value="10">Schriftlich (10)</option>
              <option value="5">Mündlich (5)</option>
              <option value="0">Keine notwendig (0)</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <label>Fertigungssteuerung / Terminüberwachung:</label>
            <select className={`ml-4 border rounded px-2 py-1`} onChange={(e) => handleUnterpunkt('fertigungssteuerung', Number(e.target.value))}>
              <option value="">-- wählen --</option>
              <option value="10">Organisation vorhanden (10)</option>
              <option value="0">Nicht vorhanden (0)</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <label>Werkstückprüfung / QS:</label>
            <select className={`ml-4 border rounded px-2 py-1`} onChange={(e) => handleUnterpunkt('prüfung', Number(e.target.value))}>
              <option value="">-- wählen --</option>
              <option value="20">Selbstkontrolle / Qualitätswesen / 100%-Prüfung (20)</option>
              <option value="10">Teilweise vorhanden (10)</option>
              <option value="0">Nicht vorhanden (0)</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <label>Ausbildungsprogramme für QS:</label>
            <select className={`ml-4 border rounded px-2 py-1`} onChange={(e) => handleUnterpunkt('ausbildung', Number(e.target.value))}>
              <option value="">-- wählen --</option>
              <option value="5">Vorhanden (5)</option>
              <option value="0">Nicht vorhanden (0)</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <label>Instandhaltung & Wartung:</label>
            <select className={`ml-4 border rounded px-2 py-1`} onChange={(e) => handleUnterpunkt('instandhaltung', Number(e.target.value))}>
              <option value="">-- wählen --</option>
              <option value="15">Vorbeugend mit Prüfplänen (15)</option>
              <option value="5">Unregelmäßig (5)</option>
              <option value="0">Nicht vorhanden (0)</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <label>Maschinenpark:</label>
            <select className={`ml-4 border rounded px-2 py-1`} onChange={(e) => handleUnterpunkt('maschinenpark', Number(e.target.value))}>
              <option value="">-- wählen --</option>
              <option value="20">Neu, gepflegt, vielseitig (20)</option>
              <option value="10">Teilweise (10)</option>
              <option value="0">Ungeeignet (0)</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};
