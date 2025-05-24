function doGet() {
  return HtmlService.createTemplateFromFile('frontend/index')
    .evaluate()
    .setTitle('Directorio Freelancers');
}

function getFreelancers() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Freelancers");
  const data = sheet.getDataRange().getValues();
  return data.slice(1).map(row => ({
    id: row[0],
    nombre: row[4],
    foto: row[1],
    pais: row[2],
    habilidades: row[11].split(","),
    lenguajes: row[12].split(","),
    cv: row[15] || "#", // Columna 15: Enlace a CV
    premium: row[16] === "Sí" // Columna 16: Perfil premium
  }));
}
