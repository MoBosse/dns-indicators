opensdg.createPdf = function () {

    var doc = new jsPDF();
    //doc.text(document.getElementById("input").value, 10, 10);
    var content = document.getElementById('pdf_content');

    doc.text(content, 10, 10);
    doc.save("output.pdf");
};
