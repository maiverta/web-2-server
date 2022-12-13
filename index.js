const express = require("express");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const Product = require('./models/Product');
const methodOverride = require('method-override');
const User = require("./models/user");

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials:true,
    optionsSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(bodyParser.json());

app.use(express.urlencoded( { extended: true }));

app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true })
    .then(async() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log("no connection start");
    })

app.get('/products/new', async (req, res) => {
    res.render('products/new');
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
   res.render('products/edit' , {product});
})

app.get('/users', async (req, res) => {
    const users = await User.find({});    
    res.send(users.length ? users[0] : {});
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.send(await newProduct.save());
   
})

app.post('/users', async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.send(newUser);
   
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const pro = await Product.findByIdAndUpdate(id. req.body);
    res.res(pro);
})

   
app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.send(products);
})

app.listen(3001, () => {
    console.log("listening on port 3001!");
})
