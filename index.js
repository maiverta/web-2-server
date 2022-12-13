const express = require("express");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials:true,
    optionsSuccessStatus:200,
}


app.use(cors(corsOptions))

app.use(bodyParser.json());


app.set('view engine', 'ejs');
app.use(express.urlencoded( { extended: true }));
const Product = require('./models/Product');
const methodOverride = require('method-override');
const User = require("./models/user");
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


// app.post('/products/:id', async (req, res) => {
   
//     const { id } = req.params;
//  //   res.send(id);
//     const pro = await Product.findByIdAndUpdate(id , req.body , {runValidators: true , new: true})
//     res.redirect(`/product/${pro._id}`);
// })


app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.send(await newProduct.save());
   
})

app.post('/users', async (req, res) => {
    console.log(req.body)
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
    console.log(products)
    res.send(products);
})
// app.get('/product/:id', async (req, res) => {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.render('products/show' , {product});
// })

// app.get('', async (req, res) => {
//     const products = await Product.find({});
//     console.log(products);
//     // res.render('products/index' , {products});
// })

app.listen(3001, () => {
    console.log("listening on port 3001!");
})











//************ */

// app.use((req, res) => {

//     console.log("we got a new request");
//     res.send("<h1> we got your request ! thank you </h1>");
// });
// app.get('/', (req, res) => {

//         res.render('home.ejs');
//     });



//     app.get('/search', (req, res) => {
    
//         const { q } = req.query.split('&');
//         if (!q) {
//             res.send("error this is null");
//         }
//         else {
//             res.send(`this is the ${q[0]}  and ${q[1]} page`);
//         }
    
//     })
    
//     app.get('/r/:subreddit', (req, res) => {
    
//         const { subreddit } = req.params;
//         res.send(`this is my ${subreddit} page`);
//     });
    
//     app.get('/r/:subreddit/:postid', (req, res) => {
    
//         const { subreddit, postid } = req.params;
//         res.send(` this is the page of ${subreddit} and ${postid}`);
//     });
    
//     app.get('/cats', (req, res) => {
    
//         res.send("<h1> we got your request ! thank you from cats  </h1>");
//     });
    
    app.get('/dogs', (req, res) => {
    
        res.send({number: 4 });
    });
    
//     app.get('*', (req, res) => {
    
//         res.send("<h1> i dont know what you want  </h1>");
//     });
    