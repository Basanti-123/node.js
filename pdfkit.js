const PDFDocument = require("pdfkit");
const fs = require("fs");

const pdfGenerator = (content, location) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(location));

  // draw some text
  doc.fontSize(25).text("Here is some vector graphics...", 100, 80);

  // some vector graphics
  doc.save().moveTo(100, 150).lineTo(100, 250).lineTo(200, 250).fill("#FF3300");

  doc.circle(280, 200, 50).fill("#6600FF");

  // an SVG path
  doc
    .scale(0.6)
    .translate(470, 130)
    .path("M 250,75 L 323,301 131,161 369,161 177,301 z")
    .fill("red", "even-odd")
    .restore();

  // addding my image
  if (image) {
    doc
      .image("./bassu.jpeg", 0, 15, { width: 300 })
      .text("Proportional to width", 0, 0);
  }

  // and some justified text wrapped into columns
  doc
    .text("And here is some wrapped text...", 100, 300)
    .font("Times-Roman", 13)
    .moveDown()
    .text(content, {
      width: 412,
      align: "justify",
      indent: 30,
      columns: 2,

      height: 300,
      ellipsis: true,
    });

  // end and display the document in the iframe to the right
  doc.end();
};

const content = "Hello World";
const location = "./file.pdf";
const image = {
  with: "",
  height: "",
  positionx: "",
  positiony: "",
  FilePath: "",
};
pdfGenerator(content, location, image);
