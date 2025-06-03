function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Directorio Freelancers');
}

function getFreelancers() {
  try {
    const sheet = SpreadsheetApp.openById("SHEET_ID").getSheetByName("Freelancers");
    const data = sheet.getDataRange().getValues();
    
    if (data.length <= 1) return [];
    
    return data.slice(1).map(row => ({
    id: row[0],
    nombre: row[4],
    foto: row[1],
    pais: row[2],
    titulo: row[9],
    skills: row[12] ? row[12].split(",").map(s => s.trim()) : [],
    premium: row[16] === "SI",
    cvUrl: row[15] || "#",
    blacklisted: row[20] ==="SI",
    area: row[10],
    comentarios: row[18],
    portafolio: row[19]
  }));
  } catch (e) {
    console.error("Error en getFreelancers:", e);
    return [];
  }
}
