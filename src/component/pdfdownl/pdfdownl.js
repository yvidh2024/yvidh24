import React from 'react';

const DownloadPDF = ({ pdflink, pdfname }) => {
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = pdflink; // Use the pdflink directly, not within curly braces
    link.setAttribute('download', pdfname); // Use the pdfname directly, not within curly braces
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={downloadPdf}>Rules</button>
    </div>
  );
};

export default DownloadPDF;
