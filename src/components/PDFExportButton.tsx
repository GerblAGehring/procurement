import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useEvaluationStore } from '../store/useEvaluationStore';
import { calculateScore, classifyScore } from '../features/scoring';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 12 },
  heading: { fontSize: 16, marginBottom: 4, fontWeight: 'bold' },
  text: { fontSize: 12 },
});

export const PDFExportButton = () => (
  <div className="mt-4">
    <PDFDownloadLink
      document={<EvaluationPDF />}
      fileName="Lieferantenbewertung.pdf"
      className="px-4 py-2 bg-green-600 text-white rounded inline-block"
    >
      {({ loading }) => (loading ? 'Erstelle PDF...' : 'PDF herunterladen')}
    </PDFDownloadLink>
  </div>
);


const EvaluationPDF = () => {
  const { data } = useEvaluationStore();
  const score = calculateScore(data);
  const bewertung = classifyScore(score);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Allgemeine Informationen */}
        <View style={styles.section}>
          <Text style={styles.heading}>Allgemeine Informationen</Text>
          <Text style={styles.text}>Firma: {data.meta.firma}</Text>
          <Text style={styles.text}>Vertreter Lieferant: {data.meta.lieferantVertreter}</Text>
          <Text style={styles.text}>Vertreter Unternehmen: {data.meta.unternehmenVertreter}</Text>
          <Text style={styles.text}>Zeitraum: {data.meta.zeitraum}</Text>
          <Text style={styles.text}>Datum: {data.meta.datum}</Text>
        </View>

        {/* Bewertungsübersicht */}
        <View style={styles.section}>
          <Text style={styles.heading}>Einzelbewertungen</Text>
          <Text style={styles.text}>Lieferqualität: {data.lieferqualität} / 100</Text>
          <Text style={styles.text}>Termintreue: {data.termin} / 100</Text>
          <Text style={styles.text}>Preis: {data.preis} / 100</Text>
          <Text style={styles.text}>Qualitätssicherung: {data.qualitätssicherung} / 100</Text>
          <Text style={styles.text}>Service: {data.service} / 100</Text>
          <Text style={styles.text}>Umwelt: {data.umwelt} / 100</Text>
          <Text style={styles.text}>Arbeitsschutz: {data.arbeitsschutz} / 100</Text>
        </View>

        {/* Gesamtergebnis */}
        <View style={styles.section}>
          <Text style={styles.heading}>Gesamtbewertung</Text>
          <Text style={styles.text}>Punktzahl: {score.toFixed(2)}</Text>
          <Text style={styles.text}>Bewertung: {bewertung}</Text>
        </View>
      </Page>
    </Document>
  );
};
