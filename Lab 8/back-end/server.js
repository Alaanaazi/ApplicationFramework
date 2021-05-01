const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const HomeRoutes = require('../back-end/routes/home.router');
const PostsRoutes = require('../back-end/routes/post.routes');
require('./dal');

// Creation of Koa application
const app = new Koa();
app.use(cors());

// Registering the body parser 
//bodyparser is used to identify which type of data is used (middleware )
app.use(bodyParser());

// Registering routes
// If prefixes match any of the routes then the code in the specific routes are executed
app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());
 
app.use(PostsRoutes.routes())
    .use(PostsRoutes.allowedMethods());


// If neither of the routes match then this is executed
app.use(ctx => {
 ctx.body = 'Hello ';
});
 

app.listen(3001, err => {
    if (err) {
        console.log(err);
        return;
    }
});

console.log('Application is running on port 3001...');