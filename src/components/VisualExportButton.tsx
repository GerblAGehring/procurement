import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const VisualExportButton = () => {
  const exportAsPDF = async () => {
    const content = document.getElementById('exportable-content');
    if (!content) {
      console.error('❌ Element #exportable-content nicht gefunden');
      return;
    }

    const canvas = await html2canvas(content, {
      scale: 2, // bessere Qualität
      useCORS: true,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pdfWidth;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

    let position = 0;

    // Falls Bild größer als eine Seite: Seiten aufteilen
    if (imgHeight > pdfHeight) {
      while (position < imgHeight) {
        pdf.addImage(imgData, 'PNG', 0, -position, imgWidth, imgHeight);
        position += pdfHeight;
        if (position < imgHeight) pdf.addPage();
      }
    } else {
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    }

    pdf.save('Lieferantenbewertung.pdf');
  };

  return (
    <button
      onClick={exportAsPDF}
      className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
    >
      Ansicht als PDF exportieren
    </button>
  );
};
