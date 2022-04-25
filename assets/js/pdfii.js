//Generate PDF
function generatePDF() {
    pdf = "";
$("#downloadbtn").hide();
$("#genmsg").show();
    html2canvas($(".print-wrap:eq(0)")[0], { allowTaint: true }).then(function(canvas) {

        calculatePDF_height_width(".print-wrap",0);
        var imgData = canvas.toDataURL("image/png", 1.0);
  pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, HTML_Width, HTML_Height);

    });

    html2canvas($(".print-wrap:eq(1)")[0], { allowTaint: true }).then(function(canvas) {

        calculatePDF_height_width(".print-wrap",1);

        var imgData = canvas.toDataURL("image/png", 1.0);
        pdf.addPage(PDF_Width, PDF_Height);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, HTML_Width, HTML_Height);

    });

    html2canvas($(".print-wrap:eq(2)")[0], { allowTaint: true }).then(function(canvas) {

        calculatePDF_height_width(".print-wrap",2);

        var imgData = canvas.toDataURL("image/png", 1.0);
        pdf.addPage(PDF_Width, PDF_Height);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, HTML_Width, HTML_Height);



            //console.log((page_section.length-1)+"==="+index);
            setTimeout(function() {

                //Save PDF Doc
                pdf.save("HTML-Document.pdf");

                //Generate BLOB object
                var blob = pdf.output("blob");

                //Getting URL of blob object
                var blobURL = URL.createObjectURL(blob);

                //Showing PDF generated in iFrame element
                var iframe = document.getElementById('sample-pdf');
                iframe.src = blobURL;

                //Setting download link
                var downloadLink = document.getElementById('pdf-download-link');
                downloadLink.href = blobURL;

      $("#sample-pdf").slideDown();


      $("#downloadbtn").show();
      $("#genmsg").hide();
            }, 0);
    });
};

function calculatePDF_height_width(selector,index){
  page_section = $(selector).eq(index);
  HTML_Width = page_section.width();
  HTML_Height = page_section.height();
  top_left_margin = 15;
  PDF_Width = HTML_Width + (top_left_margin * 2);
  PDF_Height = (PDF_Width * 1.2) + (top_left_margin * 2);
  canvas_image_width = HTML_Width;
  canvas_image_height = HTML_Height;
};
