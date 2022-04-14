opensdg.createPdf = function (content) {

    var doc = new jsPDF();
    //doc.text(document.getElementById("input").value, 10, 10);
    //doc.text(content, 10, 10);
    doc.text(document.getElementById('pdfContent'),10,10)
    doc.save("output.pdf");
};
