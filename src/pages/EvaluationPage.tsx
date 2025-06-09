import { SectionLieferqualität } from '../components/evaluation/SectionLieferqualität';
import { SectionAllgemein } from '../components/evaluation/SectionAllgemein';
import { useEvaluationStore } from '../store/useEvaluationStore';
import { calculateScore, classifyScore } from '../features/scoring';
import { SectionQualitätssicherung } from '../components/evaluation/SectionQualitätssicherung';
import { SectionArbeitsschutz } from '../components/evaluation/SectionArbeitsschutz';
import { SectionUmwelt } from '../components/evaluation/SectionUmwelt';
import { SectionTermin } from '../components/evaluation/SectionTermin';
import { SectionPreis } from '../components/evaluation/SectionPreis';
import { SectionService } from '../components/evaluation/SectionService';
import { PDFExportButton } from '../components/PDFExportButton';
import { VisualExportButton } from '../components/VisualExportButton';

export default function EvaluationPage() {
  const { data } = useEvaluationStore();
  const score = calculateScore(data);
  const note = classifyScore(score);

  return (
    <div id="exportable-content" className="space-y-6">
      <SectionAllgemein />
      <div className="border border-gray-300 rounded-md p-4 bg-white shadow-sm mb-6">
        <SectionLieferqualität />
    </div>
      <SectionTermin />
      <SectionPreis />
      <div className="border border-gray-300 rounded-md p-4 bg-white shadow-sm mb-6"><SectionQualitätssicherung /></div>
      <SectionService />
      <SectionArbeitsschutz />
      <SectionUmwelt />
      
      <div className="mt-6 p-4 bg-gray-100 rounded shadow">
        <p><strong>Gewichtete Punktzahl:</strong> {score.toFixed(2)}</p>
        <p><strong>Bewertung:</strong> {note}</p>
      </div>
      <PDFExportButton />
      <VisualExportButton />
    </div>
  );
};
