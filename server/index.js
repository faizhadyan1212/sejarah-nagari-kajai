const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();
const port = process.env.PORT || 5000;

// Konfigurasi Handlebars
app.engine('hbs', hbs.engine({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, '../client/views/layouts/'),
  partialsDir: path.join(__dirname, '../client/views/partials/'),
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../client/views'));

// Sajikan file statis dari direktori 'public'
app.use(express.static(path.join(__dirname, '../client/public')));

// Rute untuk halaman utama
app.get('/', (req, res) => {
  res.render('home', {
    pageTitle: 'Nagari Kajai',
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});