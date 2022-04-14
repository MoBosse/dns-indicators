opensdg.createPdf = function () {

    // var doc = new jsPDF();
    // //doc.text(document.getElementById("input").value, 10, 10);
    // //doc.text(content, 10, 10);
    // doc.text("Text goes here",10,10)
    // doc.save("output.pdf");


    var elementHandler = {
      '#ignorePDF': function (element, renderer) {
        return true;
      }
    };
    var source = window.document.getElementsById("pdfContent")[0];
    doc.fromHTML(
        source,
        15,
        15,
        {
          'width': 180,'elementHandlers': elementHandler
        });

    doc.save("output.pdf");



};
​
