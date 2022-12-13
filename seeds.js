

const { default: mongoose } = require("mongoose");

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log("no connection start");
    })

const seedProducts = [
    {
        name: 'תיק שחור',
        price: 1.00,
        description: 'beautiful bag',
        image: "https://litb-cgis.rightinthebox.com/images/640x640/201903/nrssmx1554045289387.jpg?fmt=webp&v=1"

    },
    {
        name: 'תיק לבן',
        price: 2.00,
        description: 'beautiful bag',
        image: "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/73/P00505710.jpg"

    },
    {
        name: 'תיק גוצי',
        price: 2.00,
        description: 'beautiful bag',
        image: "https://www.ronarifashion.com/wp-content/uploads/2021/04/CB72D8F8-8145-4FC5-B53A-F0F82951B16F.jpeg"

    },
    {
        name: 'תיק כתום',
        price: 2.00,
        description: 'beautiful bag',
        image: "https://d3vfig6e0r0snz.cloudfront.net/rcYjnYuenaTH5vyDF/images/products/dc30e3c87a2f32a48fb3f57536a620f7.webp"

    },
    
    {
        name: 'תיק אפור',
        price: 2.00,
        description: 'beautiful bag',
        image: "https://www.platinexpress.co.il/media/catalog/product/cache/e08ff2bd7abaae445c898acf01207d72/b/c/bc787922dvl_1_1.jpg"

    },
    {
        name: 'תיק בורדו',
        price: 2.00,
        description: 'beautiful bag',
        image: "https://cdn-images.farfetch-contents.com/18/93/40/16/18934016_41203203_1000.jpg"

    },
    {
        name: 'תיק בז',
        price: 34334.00,
        description: 'beige bag',
        image: "https://bshare-group.co.il/images/detailed/52/1669239189.webp"
    },
    {
        name: 'תיק אדום',
        price: 43534.00,
        description: 'beautiful bag',
        image: "https://litb-cgis.rightinthebox.com/images/640x640/201903/mzzrjn1554045288285.jpg?fmt=webp&v=1"

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
