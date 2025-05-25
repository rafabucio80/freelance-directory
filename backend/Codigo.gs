function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Directorio Freelancers');
}

function getFreelancers() {
  try {
    const sheet = SpreadsheetApp.openById("1g2qyAjW9NLlaBFMj7YtnTn600ssLQlXkKH1tXsV--Y4").getSheetByName("Freelancers");
    const data = sheet.getDataRange().getValues();
    
    if (data.length <= 1) return []; // Si solo hay encabezados
    
    return data.slice(1).map(row => ({
      id: row[0],
      nombre: row[4],
      foto: row[1],
      pais: row[2],
      titulo: row[9],
      skills: row[11] ? row[11].split(",") : [],
      premium: row[16] === "SI", // Asegúrate de que la columna 16 sea "Sí"/"No"
      cvUrl: row[15] || "#"
    }));
  } catch (e) {
    console.error("Error en getFreelancers:", e);
    return [];
  }
}
