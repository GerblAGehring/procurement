import { useEvaluationStore } from '../../store/useEvaluationStore';

export const SectionLieferqualität = () => {
  const { data, update } = useEvaluationStore();

  const options = [
    { label: 'Keine Mängel', value: 100 },
    { label: 'Kleinere Mängel', value: 80 },
    { label: 'Hin und wieder beanstandet', value: 60 },
    { label: 'Öfter beanstandet', value: 30 },
    { label: 'Regelmäßige große Mängel', value: 0 },
  ];

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold mb-2">Lieferqualität</h2>
      {options.map((option) => (
        <label key={option.value} className="block">
          <input
            type="radio"
            name="lieferqualität"
            value={option.value}
            checked={data.lieferqualität === option.value}
            onChange={() => update('lieferqualität', option.value)}
            className="mr-2"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};
