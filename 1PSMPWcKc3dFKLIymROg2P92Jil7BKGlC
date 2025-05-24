function doGet() {
  var book = SpreadsheetApp.openById('1Flbm6AROuLu_ManTRCgfuE9NPgs7OyuCB4VU1zRrqvY');
  var sheet = book.getSheetByName('Productos3');
  var products = sheet.getDataRange().getValues();
  return HtmlService.createTemplateFromFile('index')
      .evaluate()
      .setTitle('Mi Bazar punto com')
      //.setSandboxMode(HtmlService.SandboxMode.IFRAME);
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getProducts() {
  var book = SpreadsheetApp.openById('1Flbm6AROuLu_ManTRCgfuE9NPgs7OyuCB4VU1zRrqvY');
  var sheet = book.getSheetByName('Productos3');
  var data = sheet.getDataRange().getValues();
  data.shift(); // Elimina la fila de encabezados
  var products = data.map(function(row, index) {
    // Asegúrate de devolver los datos en el formato que espera el cliente de Bootstrap
    return {
      id: 'prod-' + index, // ID única del producto, basada en el índice de la fila
      image: row[3], // URL de la imagen
      title: row[1], // Título del producto
      description: row[10], // Descripción del producto
      price: row[11], // Precio del producto
      category: row[6], // Categoria del producto
      //status: row[14] //Estatus del producto
    };
  });
  return products;
}


function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
