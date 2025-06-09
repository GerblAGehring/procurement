import { useEvaluationStore } from '../../store/useEvaluationStore';

export const SectionAllgemein = () => {
  const { data, updateMeta } = useEvaluationStore();

  return (
    <div className="border border-gray-300 rounded-md p-4 bg-white shadow-sm mb-6">
      <h2 className="text-xl font-semibold mb-4">Allgemeine Informationen</h2>
      <div className="grid grid-cols-2 gap-4">
        <label>
          Firma:
          <input type="text" value={data.meta.firma} onChange={(e) => updateMeta({ firma: e.target.value })}
            className="mt-1 w-full border rounded px-2 py-1" />
        </label>
        <label>
          Vertreter Lieferant:
          <input type="text" value={data.meta.lieferantVertreter} onChange={(e) => updateMeta({ lieferantVertreter: e.target.value })}
            className="mt-1 w-full border rounded px-2 py-1" />
        </label>
        <label>
          Vertreter Gehring Technologies:
          <input type="text" value={data.meta.unternehmenVertreter} onChange={(e) => updateMeta({ unternehmenVertreter: e.target.value })}
            className="mt-1 w-full border rounded px-2 py-1" />
        </label>
        <label>
          Auswertezeitraum:
          <input type="text" value={data.meta.zeitraum} onChange={(e) => updateMeta({ zeitraum: e.target.value })}
            className="mt-1 w-full border rounded px-2 py-1" />
        </label>
        <label>
          Datum:
          <input type="date" value={data.meta.datum} onChange={(e) => updateMeta({ datum: e.target.value })}
            className="mt-1 w-full border rounded px-2 py-1" />
        </label>
      </div>
    </div>
  );
};
