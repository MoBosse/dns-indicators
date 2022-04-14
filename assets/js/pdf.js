opensdg.createPdf = function () {

    var doc = new jsPDF();
    //doc.text(document.getElementById("input").value, 10, 10);
    doc.text("Hello world!", 10, 10);
    doc.save("output.pdf");
};
