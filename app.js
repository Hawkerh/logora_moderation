const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;
const API = 'https://moderation.logora.fr';

app.use(express.json()); // Middleware pour parser le JSON

// Route pour obtenir le score de qualité
app.post('/api/moderation/score', async (req, res) => {
    try {
        const { text, language } = req.body;
        const response = await axios.get(`${API}/score`, {
            params: { text, language }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur interne du serveur" });
    }
});

app.post('/api/moderation/predict', async (req, res) => {
    try {
        const { text, language } = req.body;
        console.log(text, language);
        // Utiliser axios pour faire la requête
        const response = await axios.get(`${API}/predict`, {
            params: { text, language }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur interne du serveur" });
    }
});

const server = app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});

module.exports = server;