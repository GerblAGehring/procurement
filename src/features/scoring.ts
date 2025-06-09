export const calculateScore = (scores: {
  lieferqualität: number;
  termin: number;
  preis: number;
  qualitätssicherung: number;
  service: number;
  umwelt: number;
  arbeitsschutz: number;
}) => {
  return (
    scores.lieferqualität * 0.3 +
    scores.termin * 0.25 +
    scores.preis * 0.2 +
    scores.qualitätssicherung * 0.1 +
    scores.service * 0.05 +
    scores.umwelt * 0.05 +
    scores.arbeitsschutz * 0.05
  );
};
export const classifyScore = (gesamt: number) => {
  if (gesamt >= 91) return 'A – Ausgezeichnet';
  if (gesamt >= 81) return 'B1 – Gut';
  if (gesamt >= 63) return 'B2 – Genügend';
  if (gesamt >= 51) return 'C – Ungenügend';
  return 'Lieferant muss ausscheiden';
};
