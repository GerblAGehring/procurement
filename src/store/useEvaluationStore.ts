import { create } from 'zustand';

interface EvaluationData {
  lieferqualität: number;
}

interface EvaluationStore {
  data: EvaluationData;
  update: (key: keyof EvaluationData, value: number) => void;
}

export const useEvaluationStore = create<EvaluationStore>((set) => ({
  data: {
    lieferqualität: 0,
  },
  update: (key, value) =>
    set((state) => ({
      data: { ...state.data, [key]: value },
    })),
}));
