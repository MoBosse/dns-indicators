
opensdg.dataRounding = function(value) {
  if (value == null) {
    return value
  }
  else {
    return Number(value.toPrecision(3))
  }
};

function createPdf() {

    var doc = new jsPDF();
    //doc.text(document.getElementById("input").value, 10, 10);
    doc.text("Hello world!", 10, 10);
    doc.save("output.pdf");
}
