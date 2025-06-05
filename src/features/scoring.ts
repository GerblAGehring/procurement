export const calculateScore = (lieferqualität: number) => {
  const gewichtung = 0.3;
  return lieferqualität * gewichtung;
};

export const classifyScore = (gesamt: number) => {
  if (gesamt >= 91) return 'A – Ausgezeichnet';
  if (gesamt >= 81) return 'B1 – Gut';
  if (gesamt >= 63) return 'B2 – Genügend';
  if (gesamt >= 51) return 'C – Ungenügend';
  return 'Lieferant muss ausscheiden';
};
