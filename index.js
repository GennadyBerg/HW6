import express from 'express'
import { usersRouter } from "./routes/usersRouter.js";
import { goodsRouter } from "./routes/goodsRouter.js";
import {ErrorHandler} from "./middleware/ErrorHandler.js";
import { validation } from "./middleware/validationMiddleware.js"


const app = express();
app.use(express.json());
const PORT = 3500;

app.use((req, res, next) => {
        next()
});

app.use(usersRouter, goodsRouter);
app.use(ErrorHandler);

app.post('/users', validation, (req, res) => {
    res.json({status: 'OK', data: req.body})
})
app.post('/goods', validation, (req, res) => {
    res.json({status: 'OK', data: req.body})
})


app.get('/users', (req, res, next) => {
    console.log('user routes completed');
        next();
}, (req, res) => {
    console.log('base url');

    res.json({
        name: 'Example',
        login: 'qwerty'
    });
})
app.get('/goods', (req, res, next) => {
    console.log('user routes completed');
        next();
}, (req, res) => {
    console.log('base url');

    res.json({
        id: 1,
        name: 'laptop HP'
        
    });
})
app.delete('/users', (req, res, next) => {
    console.log('user routes completed');
        next();
}, (req, res) => {
    console.log('base url');

    res.json({
        user: 'Example',
        password: 'qwerty'
    });
});

app.delete('/goods', (req, res, next) => {
    console.log('user routes completed');
        next();
}, (req, res) => {
    console.log('base url');

    res.json({
        id: 1,
        name: 'laptop HP'

    });
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

