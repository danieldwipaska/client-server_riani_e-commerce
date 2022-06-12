import express from 'express';
const router = express.Router();

router.get('/home', (req, res) => {
  res.render('index', {
    layout: 'layouts/main-layout',
    title: 'Riani S | E-Commerce',
  });
});

export default router;
