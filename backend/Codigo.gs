function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Directorio Freelancers');
}

function getFreelancers() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Freelancers");
  const data = sheet.getDataRange().getValues();
  const hoy = new Date();
  
  return data.slice(1).map(row => ({
    id: row[0],
    nombre: row[4],
    foto: row[1],
    pais: row[2],
    habilidades: row[11].split(","),
    github: row[7],
    cv: row[15],
    premium: row[16] === "Sí", // Columna 16: "Sí" si está al día
    fechaVencimiento: new Date(row[17]) // Columna 17: Fecha de vencimiento (ej: "31/12/2024")
  }));
}
