// Middleware modules
const path       = require('path');
const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();
const expressHbs = require('express-handlebars');

app.engine('hbs', expressHbs({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' }))
app.set('view engine', 'hbs'); // add handlebars templating engine

//app.set('view engine', 'pug'); // add pug templating engine
app.set('views', 'views');  // tell express where the pug templages live

const adminData  = require('./routes/admin');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found!' });
});

// instantiate the app
app.listen(3000);
