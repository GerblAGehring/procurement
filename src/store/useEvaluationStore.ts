import { create } from 'zustand';

interface EvaluationData {
  lieferqualität: number;
  termin: number;
  preis: number;
  qualitätssicherung: number;
  service: number;
  umwelt: number;
  arbeitsschutz: number;
  meta: {
    firma: string;
    lieferantVertreter: string;
    unternehmenVertreter: string;
    zeitraum: string;
    datum: string;
  };
}


interface EvaluationStore {
  data: EvaluationData;
  update: (key: keyof EvaluationData, value: number) => void;
  updateMeta: (meta: Partial<EvaluationData["meta"]>) => void;
}

export const useEvaluationStore = create<EvaluationStore>((set) => ({
  data: {
  lieferqualität: 0,
  termin: 0,
  preis: 0,
  qualitätssicherung: 0,
  service: 0,
  umwelt: 0,
  arbeitsschutz: 0,
  meta: {
    firma: '',
    lieferantVertreter: '',
    unternehmenVertreter: '',
    zeitraum: '',
    datum: '',
  }
},
  update: (key, value) =>
    set((state) => ({
      data: { ...state.data, [key]: value },
    })),
  updateMeta: (meta: Partial<EvaluationData["meta"]>) =>
    set((state) => ({
      data: { ...state.data, meta: { ...state.data.meta, ...meta } },
    })),
}));
