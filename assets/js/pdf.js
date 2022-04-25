opensdg.createPdf = function () {

    var doc = new jsPDF();
    var content = document.getElementById('pdf_content');
    console.log("c: ",content);

    doc.html(document.getElementById('pdf_content'),{
      callback: function (doc){
        doc.save("output2.pdf");
      }
    });
    //doc.text(content, 10, 10);
    //doc.save("output.pdf");
};
