

const { default: mongoose } = require("mongoose");

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log("no connection start");
    })

// const p = new Product({
//     name: ' Ruby',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p => {
//     console.log(p)
// })
//     .catch(e => {
//         console.log(e)

//     })
const seedProducts = [
    {
        name: 'תיק שחור',
        price: 1.00,
        description: 'beautiful bag',
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.riverisland.com%2Fc%2Fwomen%2Fbags-and-purses&psig=AOvVaw02EcMBqoaL5bRNWsk8kKnW&ust=1670751617770000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPjowfbg7vsCFQAAAAAdAAAAABAE"

    },
    {
        name: 'תיק לבן',
        price: 2.00,
        description: 'beautiful bag',
        image: "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/73/P00505710.jpg"

    },
    {
        name: 'תיק בז',
        price: 34334.00,
        description: 'beige bag',
        image: "https://twicpics.celine.com/product-prd/images/large/10E382CBX.01TA_1_LIB_613851_V2.jpg?twic=v1/cover=1:1/resize-max=720"
    },
    {
        name: 'תיק אדום',
        price: 43534.00,
        description: 'beautiful bag',
        image: "https://www.arielhayom.com/wp-content/uploads/2017/12/product-bag3.jpg"

    },
    {
        name: 'תיק ירוק',
        price: 43534.00,
        description: 'beautiful bag',
        image: "https://cdn-images.farfetch-contents.com/19/17/81/36/19178136_42101740_1000.jpg"

    },
    {
        name: 'תיק ורוד',
        price: 43534.00,
        description: 'beautiful bag',
        image: "https://cdn-images.farfetch-contents.com/18/65/82/10/18658210_41115957_1000.jpg"

    },
    {
        name: 'תיק כחול',
        price: 43534.00,
        description: 'beautiful bag',
        image: "https://cdn-images.farfetch-contents.com/19/31/40/23/19314023_42472352_1000.jpg"

    },
    {
        name: 'תיק צהוב',
        price: 43534.00,
        description: 'beautiful bag',
        image: "https://cdn-images.farfetch-contents.com/18/54/08/35/18540835_39966830_1000.jpg"

    },
    {
        name: 'תיק סגול',
        price: 43534.00,
        description: 'beautiful bag',
        image: "https://cdn-images.farfetch-contents.com/19/15/06/78/19150678_41974609_1000.jpg"

    },

]
Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
