opensdg.createPdf = function () {

    var doc = new jsPDF();

    source = $('#pdf_content')[0];
    doc.fromHTML(source);
    doc.save("output2.pdf");

    //doc.text(content, 10, 10);
    //doc.save("output.pdf");
};
