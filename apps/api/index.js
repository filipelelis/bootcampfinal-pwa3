// apps/api/index.js
import express from 'express';
import cors from 'cors'; // 1. Verifique se importou

const app = express();
const port = 3000;

app.use(cors()); // 2. Verifique se usou o app.use(cors())

app.get('/api/saudacao', (req, res) => {
    const hora = new Date().getHours();
    let saudacao = "";

    if (hora >= 5 && hora < 12) {
        saudacao = "Bom dia";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }
    
    res.json({ saudacao: saudacao });
});

app.listen(port, () => {
  console.log(`API de saudação rodando na porta ${port}`);
});