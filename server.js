const express = require('express');
app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let personne = [
        {
          name: 'John Doe',
          designation: "etudiant"
        },
        {
          name: 'Monsieur X',
          designation: "Professeur"
        },
        {
          name: 'Robert',
          designation: "Etudiant"
        },
        {
          name: 'Christian',
          designation: "Etudiant"
        }
         ];
      let soustitre = "Bon chance pour l'exam !";
    
      res.render("index", {
        personne: personne,
        soustitre: soustitre
      });
    });
    

app.get('/magic', (req, res) => {
    res.render('magic');
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});