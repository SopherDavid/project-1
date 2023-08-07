const data = [
    {
        id: '206',
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        Quantity: 10,
        price: 109.95,
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: { rate: 3.9, count: 120 }
    },
    {
        id: 207,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        Quantity: 12,
        price: 22.3,
        description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: "men",
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        rating: { rate: 4.1, count: 259 }
    },
    {
        id: '208',
        title: 'Men',
        Quantity: 18,
        price: 55.99,
        description: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
        category: "men",
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        rating: { rate: 4.7, count: 500 }
    },
    {
        id: '209',
        title: 'Mens Casual Slim Fit',
        Quantity: 22,
        price: 15.99,
        description: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
        category: "men",
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        rating: { rate: 2.1, count: 430 }
    },
    {
        id: '210',
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        Quantity: 20,
        price: 695,
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 4.6, count: 400 }
    },
    {
        id: '211',
        title: 'Solid Gold Petite Micropave ',
        price: 168,
        Quantity: 55,
        description: 'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 3.9, count: 70 }
    },
    {
        id: '212',
        title: 'White Gold Plated Princess',
        price: 9.99,
        Quantity: 10,
        description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 3, count: 400 }
    },
    {
        id: '213',
        title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
        price: 10.99,
        Quantity: 34,
        description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 1.9, count: 100 }
    },
    {
        id: '214',
        title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
        price: 64,
        Quantity: 12,
        description: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
        rating: { rate: 3.3, count: 203 }
    },
    {
        id: '215',
        title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
        price: 109,
        Quantity: 18,
        description: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/ write speeds of up to 535MB / s / 450MB / s(Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.) ',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
        rating: { rate: 2.9, count: 470 }
    },
    {
        id: '216',
        title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
        price: 109,
        Quantity: 8,
        description: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC(Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
        rating: { rate: 4.8, count: 319 }
    },
    {
        id: '217',
        title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
        price: 114,
        Quantity: 13,
        description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
        rating: { rate: 4.8, count: 400 }
    },
    {
        id: '218',
        title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
        Quantity: 26,
        price: 599,
        description: '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        rating: { rate: 2.9, count: 250 }
    },
    {
        id: '219',
        title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
        price: 999.99,
        Quantity: 8,
        description: '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag', category: 'electronics',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
        rating: { rate: 2.2, count: 140 }
    },
    {
        id: '220',
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        Quantity: 13,
        description: 'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
        category: "woman",
        image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
        rating: { rate: 2.6, count: 235 }
    },
    {
        id: '221',
        title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        Quantity: 10,
        description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
        category: "woman",
        image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
        rating: { rate: 2.9, count: 340 }
    },
    {
        id: '222',
        title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
        price: 39.99,
        Quantity: 26,
        description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.", category: "women's clothing",
        category: "woman",
        image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
        rating: { rate: 3.8, count: 679 }
    },
    {
        id: '223',
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        Quantity: 41,
        description: '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        category: "woman",
        image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        rating: { rate: 4.7, count: 130 }
    },
    {
        id: '224',
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        Quantity: 21,
        description: '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
        category: "woman",
        image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        rating: { rate: 4.5, count: 146 }
    },
    {
        id: '225',
        title: 'DANVOUY Womens T Shirt Casual Cotton Short',
        price: 12.99,
        Quantity: 14,
        description: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual / Office / Beach / School / Home / Street.Season: Spring, Summer, Autumn, Winter.', category: "women's clothing",
        category: "woman",
        image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        rating: { rate: 3.6, count: 145 }
    }
]








// creating the default home page
for (const obj of data) {

    //calling 'main' part of html in order to inject the data
    const main = document.getElementsByTagName('main')[0]
    main.id = "main"
    
    //card for each item holding the image on top and other info on bottom
    const card = document.createElement('div');
    card.id = "card"
    
    const image = document.createElement('img');
    image.id = "image"
    image.src = obj.image

    //bottom part of the card - holding the description and edit or delete button
    const cardBottom = document.createElement('div')
    cardBottom.id = "cardBottom"

    const title = document.createElement('p')
    title.textContent = obj.title

    // line between the description to icon's
    const hr = document.createElement('hr')

    //delete and edit icons
    let del = document.createElement('i');
    del.classList.add("material-icons");
    del.innerHTML = "delete";
    del.classList.add("icons")

    let edit = document.createElement('i');
    edit.classList.add("material-icons");
    edit.innerHTML = "edit";
    edit.classList.add("icons")
    
    // adding card and all above info to 'main' page
    cardBottom.append(title, hr, del, edit )
    card.append(image, cardBottom)
    main.appendChild(card)
}

// filtering by category 
const main = document.getElementById('main');

document.querySelectorAll('#nav button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.textContent.trim();
        const filteredProducts = data.filter(product => product.category.toLowerCase() === category.toLowerCase());
        displayProducts(filteredProducts);
    });
});

function displayProducts(products) {
    //clear previous products in order to create new cards by to selected category
    main.innerHTML = ''; 

    //for "All Products" button
    if (products.length === 0) {
        document.location.reload()
    }

    //creating new cards according to selected category - as on above
    for (const obj of products) {
        const card = document.createElement('div');
        card.id = 'card';
        
        const image = document.createElement('img');
        image.id = 'image';
        image.src = obj.image;

        const cardBottom = document.createElement('div');
        cardBottom.id = 'cardBottom';


        const title = document.createElement('p');
        title.textContent = obj.title;

        const hr = document.createElement('hr');
        

        // icon's
        let del = document.createElement('i');
        del.classList.add('material-icons', 'icons');
        del.innerHTML = 'delete';

        let edit = document.createElement('i');
        edit.classList.add('material-icons', 'icons');
        edit.innerHTML = 'edit';

        // adding card and all above info to 'main' html
        cardBottom.append(title, hr, del, edit);
        card.append(image, cardBottom);
        main.appendChild(card);
    }
}
