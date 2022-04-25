opensdg.createPdf = function () {

    var doc = new jsPDF('p', 'pt', 'letter');

    source = $('#pdf_content')[0];
    specialElementHandlers = {
      '#bypassme': function (element, renderer){
        return true
      }
    };
    margins = {
      top: 80,
      bottom: 60,
      left: 40,
      width: 522,
    };

    doc.fromHTML(
      source,
      margins.left,
      margins.top, {
        'width': margins.width,
        'elementHandlers': specialElementHandlers
      },
    function(dispoae){
      doc.save('Test.pdf');
    }, margins);
    //doc.text(content, 10, 10);
    //doc.save("output.pdf");
};
