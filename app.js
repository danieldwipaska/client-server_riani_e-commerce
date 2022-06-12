import express from 'express';
const app = express();
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//MIDDLEWARES
app.use(expressEjsLayouts);
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(`${__dirname}/public`)); // make files able to access
app.use('/public', express.static(path.join(__dirname, 'public')));

//ROUTES
app.get('/', (req, res) => {
  res.render('index', {
    layout: 'layouts/main-layout',
    title: 'Riani S | E-Commerce',
  });
});

//LISTEN
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
